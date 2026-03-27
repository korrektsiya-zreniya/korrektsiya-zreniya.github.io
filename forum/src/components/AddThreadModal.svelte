<script lang="ts">
    import { get } from "svelte/store";
    import { authState } from "@/state/authState";
    import { forumState } from "@/state/forumState";
    import { strToURL } from "@/utils/dataUtils";

    export let listAllCategories = [];

    let showModal = false;
    let selectedCategory;
    let textInput = "";
    let descriptionInput = "";

    const setCategory = (category) => {
        selectedCategory = category;
    };

    const handleAddThread = () => {
        import("@/utils/forumHelpers").then(async (module) => {
            const user = get(authState);
            if (!user?.user) return;

            const threadUrl = `${selectedCategory.url}/${strToURL(textInput)}`;

            const threadData = {
                board: selectedCategory.url,
                title: textInput,
                dateCreated: new Date(),
                dateModified: new Date(),
                url: threadUrl,
                user: {
                    displayName: user.user.displayName,
                    uid: user.user.uid,
                },
            };

            const firstPostData = {
                board: selectedCategory.url,
                text: descriptionInput,
                threadURL: threadUrl,
                dateCreated: new Date(),
                dateModified: new Date(),
                user: {
                    displayName: user.user.displayName,
                    uid: user.user.uid,
                },
            };

            // 1. Instant local update
            forumState.addThreadLocally(threadData);
            forumState.addCommentLocally(firstPostData);

            // 2. Redirect immediately for the best UX
            window.location.hash = `#/thread/${threadUrl}`;

            // Clean up UI
            showModal = false;
            textInput = "";
            descriptionInput = "";

            // 3. Background FireBase updates
            module.addThread(threadData);
            module.addComment(firstPostData);
        });
    };
</script>

<button
    class="btn btn-primary"
    style="width: 100%; margin-bottom: 1rem;"
    on:click="{() => showModal = true}"
>
    Создать тему
</button>

{#if showModal}
<div class="modal-overlay" on:click="{() => showModal = false}">
    <div class="modal-content" on:click|stopPropagation>
        <h3>Создать новую тему</h3>
        
        {#if listAllCategories.length}
            <div class="category-selector">
                <p>Выберите категорию:</p>
                {#each listAllCategories as category}
                    <label class="radio-label">
                        <input
                            type="radio"
                            name="category"
                            checked="{category.url === selectedCategory?.url}"
                            on:change="{() => setCategory(category)}"
                        />
                        <span>{category.title}</span>
                    </label>
                {/each}
            </div>

            <div class="input-group">
                <label for="thread-title">Заголовок темы:</label>
                <input
                    type="text"
                    id="thread-title"
                    bind:value="{textInput}"
                    placeholder="Введите название темы..."
                />
            </div>

            <div class="input-group">
                <label for="thread-description">Текст сообщения:</label>
                <textarea
                    id="thread-description"
                    bind:value="{descriptionInput}"
                    placeholder="Опишите вашу тему подробнее..."
                    rows="5"
                    style="width: 100%; border-radius: 4px; border: 1px solid #ccc; padding: 0.5rem;"
                ></textarea>
            </div>

            <div class="modal-actions">
                <button class="btn" on:click="{() => showModal = false}">Отмена</button>
                <button 
                    class="forum-btn" 
                    disabled="{!textInput || !descriptionInput || !selectedCategory || !$authState?.user}"
                    on:click="{handleAddThread}"
                >
                    {$authState?.user ? "Создать" : "Войдите, чтобы создать"}
                </button>
            </div>
        {/if}
    </div>
</div>
{/if}

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
    .modal-content {
        background: white;
        padding: 2rem;
        border-radius: 4px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .category-selector {
        margin: 1rem 0;
    }
    .radio-label {
        display: block;
        margin-bottom: 0.5rem;
        cursor: pointer;
    }
    .input-group {
        margin: 1.5rem 0;
    }
    .input-group input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-top: 0.5rem;
    }
    .modal-actions {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }
    .btn {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
    }
    .btn-primary {
        background: #e22d30;
        color: white;
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
