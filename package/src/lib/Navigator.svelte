<script lang="ts">
	export let pages: Array<string> = [];
	let searchWord: string = '';
	let searchResult: Array<string> = [];

    $: searchResult = searchWord.length === 0? [] : pages?.filter((page) => page.toLowerCase().includes(searchWord.toLowerCase()));

    export const clear = () => {
        searchWord = '';
    }
</script>

<input type="text" 
placeholder="Search everything in UNWB" bind:value={searchInput}>
<ul>
	{#each searchResult as item}
		<li>{item}</li>
	{/each}
</ul>
