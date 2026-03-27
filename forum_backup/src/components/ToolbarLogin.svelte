<script lang="ts">
    import { authState } from "@/state/authState";

    function handleLogOut() {
        import("firebase/auth").then((module) => {
            module.signOut(module.getAuth());
        });
    }

    function handleGoogleLogin() {
        import("firebase/auth").then((module) => {
            const auth = module.getAuth();

            const provider = new module.GoogleAuthProvider();
            module.signInWithPopup(auth, provider);
        });
    }
</script>

<div class="toolbar-login">
    {#if $authState?.user?.displayName}
        <span class="user-name">{$authState.user.displayName}</span>
        <button
            class="forum-btn secondary"
            on:click|preventDefault="{handleLogOut}"
        >
            Выход
        </button>
    {:else}
        <button
            class="forum-btn"
            on:click|preventDefault="{handleGoogleLogin}"
        >
            <i class="material-icons">account_circle</i>
            Вход
        </button>
    {/if}
</div>

<style>
    .toolbar-login {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .user-name {
        font-weight: 600;
        color: #555;
    }
    .forum-btn.secondary {
        background-color: #777;
    }
    .forum-btn.secondary:hover {
        background-color: #555;
    }
</style>
