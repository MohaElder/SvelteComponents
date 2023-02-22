<script>
	import MyComponent from '../lib/MyComponent.svelte';
	import SmartNavigator from '../lib/SmartNavigator.svelte';
	import MyList from '../lib/MyList.svelte';

	export let funcA = () => {
		alert('It works with Svelte!');
	};

	function funcB () {
		console.log('funcB');
	}
	
</script>

<body class="container">
	<div>
		<h1>Welcome to Svelte Playground</h1>
		<p>You may test the Svelte components here</p>
	</div>
	<div>
		<label>Example1: pass property into the svelte component</label>
		<MyComponent name="unwb+" func_name="funcB"/>
	</div>
	<div>
		<label>Example2: a bootstrap input</label>
		<SmartNavigator />
	</div>
	<div>
		<label>Example3: using svelte #for and calling unwb api</label>
		<MyList />
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
