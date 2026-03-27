<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import "@/style/forum-material.css";

    import SideNavigation from "@/components/SideNavigation.svelte";
    import ToolbarLogin from "@/components/ToolbarLogin.svelte";
    import LoadingSpinner from "@/components/LoadingSpinner.svelte";

    // Dynamically selected components
    import ThreadPage from "@/components/ThreadPage.svelte";
    import ThreadList from "@/components/ThreadList.svelte";

    import { filterBoard, seedBoards } from "@/utils/seedFireStore";
    import { forumState } from "@/state/forumState";
    import { initRouter } from "@/utils/initRouter";

    let categories = {};

    onMount(() => {
        forumState.subscribe((response) => {
            categories["general"] = filterBoard(response.boards, "General");
            categories["support"] = filterBoard(response.boards, "Support");
            categories["ideas"] = filterBoard(response.boards, "Ideas");
        });

        initRouter();
        seedBoards();
    });
</script>

<div class="forum-embedded-app" transition:fade>
    {#if !categories["general"]?.length}
        <LoadingSpinner />
    {:else}
        <div class="main__content clearfix">
            <header class="forum-header">
                <ToolbarLogin />
            </header>

            <div class="forum-layout">
                <aside class="forum-sidebar">
                    <SideNavigation categories="{categories}" />
                </aside>
                <div class="forum-main">
                    <svelte:component
                        this="{$forumState.selectedThread?.board
                            ? ThreadPage
                            : ThreadList}"
                    />
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    .forum-embedded-app {
        font-family: inherit;
        padding-top: 1rem;
    }
    .forum-header {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
    }
    .forum-layout {
        display: flex;
        gap: 2rem;
    }
    .forum-sidebar {
        flex: 0 0 25%;
    }
    .forum-main {
        flex: 1;
    }

    @media (max-width: 768px) {
        .forum-layout {
            flex-direction: column;
        }
        .forum-sidebar {
            flex: 1;
        }
    }
</style>
