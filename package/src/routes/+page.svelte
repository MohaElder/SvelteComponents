<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		
	});
</script>

<body class="container">
	<div>
		<h1>Welcome to Svelte Playground</h1>
		<p>You may test the Svelte components here</p>
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
