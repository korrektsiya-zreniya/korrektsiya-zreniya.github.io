<script lang="ts">
    export let boards = [];

    const setIsActive = (board) => {
        return window.location.hash === `#/${board.url}` ? "active" : "";
    };
</script>

{#if boards.length}
    <div class="board-group">
        <h3 class="board-category">{boards[0]?.category}</h3>
        <div class="collection shadow">
            {#each boards as board}
                <a
                    class="collection-item {setIsActive(board)}"
                    href="/#/{board.url}"
                >
                    {board.title}
                </a>
            {/each}
        </div>
    </div>
{/if}

<style>
    .board-group {
        margin-bottom: 25px;
    }
    .board-category {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 15px;
        color: #333;
        border-bottom: 1px solid #eee;
        padding-bottom: 8px;
    }
    .collection {
        border: 1px solid #e0e0e0;
        margin: 0;
        padding: 0;
    }
    .collection-item {
        display: block;
        padding: 10px 15px;
        text-decoration: none;
        color: #039BE5;
        border-bottom: 1px solid #e0e0e0;
        transition: background 0.2s;
    }
    .collection-item:last-child {
        border-bottom: none;
    }
    .collection-item:hover {
        background-color: #f5f5f5;
    }
    .collection-item.active {
        background-color: #212121;
        color: #fff !important;
    }
    .shadow {
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1);
    }
</style>
