<script lang="ts">
	import Navigator from '../lib/Navigator.svelte';
	import { onMount } from 'svelte';

	let pages = ['Contracts', 'Client Nodes', 'FAQ', 'Home', 'Case Officers'];

	let navigatorComponent : null | Navigator = null;

	onMount(() => {
		navigatorComponent = new Navigator({
			target: document.getElementById('navigator'),
			props: {
				pages: pages
			}
		});
	});
</script>

<body class="container">
	<div>
		<h1>Welcome to Svelte Playground</h1>
		<h1>Hello from unwb</h1>
		<p>You may test the Svelte components here</p>

		<div id="navigator" />
		<button on:click={() => {navigatorComponent?.clear()}}>Clear Navigator</button>
		<!-- <Navigator pages={['Contracts', 'Client Nodes', 'FAQ', 'Home', 'Case Officers']} /> -->
	</div>
	
</body>

<style>
	.container {
		padding: 5%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
	}

	.container > * {
		margin-top: 10px;
		margin-bottom: 10px;
	}
</style>
