import 'vite/modulepreload-polyfill';
import './app.css';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app-two')
});

export default app;
