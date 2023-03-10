<script lang="ts">
	import { onMount } from 'svelte';
	import Text from '../lib/Text.svelte';
	import Nav from '../lib/Navigator.svelte';

	let textComponent: Text | null = null;
	let navComponent: Nav | null = null;

	onMount(() => {
		textComponent = new Text({
			target: document.getElementById('text-box'),
			props: {
				metadata: {
					Required: true,
					Hidden: false,
					CustomProperties: {
						multiline: false
					}
				},
				autocomplete: false
			}
		});

		navComponent = new Nav({
			target: document.getElementById('navigator'),
			props: {
				pages: ['Contracts', 'Client Nodes', 'Suppliers', 'Countries', 'Users']
			}
		});
	});

	let text;
</script>

<body class="container">
	<div>
		<h1>Welcome to Svelte Playground</h1>
		<p>You may test the Svelte components here</p>
	</div>
	<div>
		<label>Example1: A component generated with client component api</label>
		<div id="text-box" />
		<button
			on:click={() => {
				textComponent?.toggle();
			}}>Show/Hide Textbox</button
		>
		<button
			on:click={() => {
				textComponent?.getValue().then((res) => alert('Text box has value: ' + res));
			}}>Get Value</button
		>
		<button
			on:click={() => {
				textComponent?.clearInput();
			}}>Clear Value</button
		>
	</div>
	<div>
		<label>Example2: A navigator that searches pages</label>
		<div id="navigator" />
		<button
			on:click={() => {
				navComponent?.clear();
			}}>Clear Value</button
		>
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
