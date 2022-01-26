<script>
	let name = 'world';
	import Button from './components/Button.svelte'
	import Panel from './components/Panel.svelte';
</script>

<div class="container">
	<div class="material">物料区
		<Button  />
	</div>
	<div class="panel" >
		<Panel></Panel>
	</div>
	<div class="config">配置选项</div>
</div>

<style>

	.container{
		display: flex;
	}
	.material{
		width: 30%;
		min-height: 100vh;
	}
	.panel{
		border-left: 1px solid #ccc;
		border-right: 1px solid #ccc;
		width: 100%;
		min-height: 100vh;
	}
	.config{
		width: 20%;
		min-height: 100vh;
		margin-right: 0;
	}
</style>
