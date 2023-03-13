<script lang="ts">
export let pages : Array<string> = [];
let searchInput : string = "";
let searchResults : Array<string> = [];

$: searchResults = searchInput.length === 0 ? [] : pages.filter(page => page.toLowerCase().includes(searchInput.toLowerCase()))

export const clear = () => {
   searchInput = "";
}

</script>

<input type="text" 
placeholder="Search everything in UNWB" bind:value={searchInput}>
<ul>
   {#each searchResults as result}
      <li>{result}</li>
   {/each}
</ul>