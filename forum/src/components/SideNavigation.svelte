<script lang="ts">
    import { afterUpdate } from "svelte";
    import AddThreadModal from "@/components/AddThreadModal.svelte";
    import SideNavigationBoards from "@/components/SideNavigationBoards.svelte";

    export let categories;

    let listAllCategories = [];

    afterUpdate(() => {
        if (categories["main"]?.length) {
            listAllCategories = categories["main"]
                .concat(categories["methods"] || [])
                .concat(categories["life"] || [])
                .concat(categories["legal"] || []);
        }
    });
</script>

<aside>
    <AddThreadModal listAllCategories="{listAllCategories}" />

    <SideNavigationBoards boards="{categories['main']}" />
    <SideNavigationBoards boards="{categories['methods']}" />
    <SideNavigationBoards boards="{categories['life']}" />
    <SideNavigationBoards boards="{categories['legal']}" />
</aside>
