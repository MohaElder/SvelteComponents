<svelte:options tag="my-list" />

<script>
	import { onMount } from 'svelte';
	/**
	 * @type {Object[]}
	 */
	let renderData = [{ Id: 'The data is not fetched, please run it in a UNWB instance' }];

	onMount(() => {
		getFormData();
	});

	function getFormData() {
		fetch('http://localhost:59742/api/form/metadata/smart-navigation-valid-forms')
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				renderData = data;
			});
	}
</script>

{#each renderData as item}
	<p>{item.Id}</p>
{/each}

<style lang="postcss">
	@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css';

	h1 {
		color: #75b7de;
	}
</style>
