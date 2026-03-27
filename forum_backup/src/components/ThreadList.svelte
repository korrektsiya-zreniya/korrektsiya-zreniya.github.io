<script lang="ts">
    import { fade } from "svelte/transition";
    import { forumState } from "@/state/forumState";
    import { displayDate } from "@/utils/dataUtils";
    import { inview } from "svelte-inview";
    import { onMount } from "svelte";
    import { get } from "svelte/store";
    import { getNextThreadsPage } from "@/utils/lazyFirestore";

    const observerOptions = {
        rootMargin: "0px",
    };

    const handleGetNextPage = async ({ detail }) => {
        getNextThreadsPage(detail, forumState);
    };

    const getInitialThreads = () => {
        const { threads, lastVisibleThreadSnapshot } = get(forumState);

        if (threads.length === 0 || lastVisibleThreadSnapshot) {
            // Initialize Firebase app
            import("@/utils/initFireBase").then(() => {
                // Get first page of results
                import("@/utils/lazyFirestore").then(async (module) => {
                    const response = await module.getPaginatedResults(
                        "threads",
                        "dateCreated",
                        threads.length === 0,
                        lastVisibleThreadSnapshot
                    );

                    forumState.setLastSnap(response[0]);

                    if (response[1].length > 0) {
                        forumState.updateAllThreads(response[1]);
                    }
                });
            });
        }
    };

    onMount(() => {
        getInitialThreads();
    });
</script>

<div transition:fade class="forum-content">
    <h2 class="forum-title">Список тем</h2>

    <ul class="collection">
        {#each $forumState.filteredThreads as thread}
            {#if thread}
                <li class="collection-item avatar">
                    <i class="material-icons circle avatar-bg">forum</i>
                    <div class="thread-info">
                        <a
                            class="thread-link"
                            on:click="{() => forumState.setSelectedThread(thread)}"
                            href="/#/{thread?.url}"
                        >
                            {thread.title}
                        </a>
                        <br />
                        <span class="thread-date">{displayDate(thread?.dateCreated)}</span>
                        
                        <span class="new badge">
                            {thread?.board.replace('boards/', '')}
                        </span>
                    </div>
                </li>
            {/if}
        {/each}
    </ul>

    {#if $forumState.filteredThreads.length}
        <span
            use:inview="{observerOptions}"
            on:change="{handleGetNextPage}"
            style="height: 1rem; display: block;"
        >
        </span>
    {/if}
</div>

<style>
    .forum-title {
        font-size: 2rem;
        font-weight: 300;
        color: #424242;
        margin-bottom: 1.5rem;
    }
    .thread-date {
        font-size: 0.8rem;
        color: #777;
    }
    .thread-link {
        font-size: 1.1rem;
        font-weight: 500;
    }
    /* Ensure the list fills correctly */
    .collection {
        list-style: none;
        padding: 0;
    }
</style>
