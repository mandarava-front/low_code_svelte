<script>
	let name = 'world';
	import Button from './components/Button.svelte'
	import Panel from './components/Panel.svelte';
	import Material from './components/materials.svelte'
	import {deepCopy, hash} from './utils'
	import {options} from './build-in-components'
	import {store} from './store'
	function handleDragOver(e){
		e.preventDefault();
		e.dataTransfer.dropEffect = 'copy';
	}

	function handleDrop(e){
		e.preventDefault()
		e.stopPropagation()
		const component = deepCopy(options[e.dataTransfer.getData('id')])
		component.style.top = e.offsetY
		component.style.left = e.offsetX
		component.id = hash()

		store.update((c = []) => [...c, component]);
	
	}

	// console.log('options',options)
</script>

<div class="container">
	<div class="material">物料区
		<Material  />
	</div>
	<!-- 頁面編輯 -->
	<div class="panel" on:dragover={handleDragOver} on:drop={handleDrop}>  
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
