import App from './App.svelte';
import { initRefLines } from './utils/refline';
initRefLines()
var app = new App({
	target: document.body
});

export default app;