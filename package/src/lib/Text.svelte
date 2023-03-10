<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		init(null);
	});

	export let value: string | null;

	export let metadata: {
		Required: boolean;
		Hidden: boolean;
		CustomProperties: {
			multiline: boolean;
		};
	};

	export let autocomplete = false;

	export const init = (v : string | null) => {
		value = v;
		return Promise.resolve();
	};

	export const getValue = () => {
		return Promise.resolve(value);
	};

	export const clearInput = () => {
		value = '';
		return Promise.resolve();
	};

	export const toggle = () => {
		metadata.Hidden = !metadata.Hidden;
		return Promise.resolve();
	};
</script>

{#if !metadata.Hidden}
<!-- <div style="display: none;"></div> -->
	{#if metadata.CustomProperties.multiline}
		<textarea
			class="form-control"
			bind:value={value}
			required={metadata.Required && !metadata.Hidden}
		/>
	{:else}
		<input
			autocomplete={autocomplete ? 'on' : 'off'}
			class="form-control"
			bind:value={value}
			required={metadata.Required && !metadata.Hidden}
			type="text"
		/>
	{/if}
{/if}
