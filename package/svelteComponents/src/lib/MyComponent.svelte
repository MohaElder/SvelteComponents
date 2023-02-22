<svelte:options tag="my-component" />

<script>
	/**
	 * @type {any}
	 */
	export let name;

	/**
	 * @type {() => any}
	 */
	export let handle_click;

	/**
	 * @type {string}
	 */
	export let func_name = '';

	function handleFunc() {
		handle_click =
			typeof handle_click === 'function'
				? handle_click
				: window[func_name] ?? new Function(func_name);
		handle_click ??= () => console.error('The function is not defined! Please check if handle_click or func_name is defined property');
		handle_click();
	}
</script>

<div>
	<h1>Hi! {name}, Been Ngai Bang?</h1>
	<button class="btn btn-primary" on:click={handleFunc}>Click me</button>
</div>

<style lang="postcss">
	@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css';

	h1 {
		color: #75b7de;
	}
</style>
