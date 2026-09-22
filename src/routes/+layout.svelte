<script>
  import Header from '$lib/components/Header.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/modulos.css';
  import { page } from '$app/state';

  let { children } = $props();
</script>

<div class={page.url.pathname === '/login' ? 'd-flex flex-column min-vh-100' : 'd-flex flex-column min-vh-100 bg-light'}>
  {#if page.url.pathname !== '/login'}
    <Header />
    <Navbar />
  {/if}

  <main class="flex-grow-1 d-flex flex-column">
    {@render children()}
  </main>

  {#if page.url.pathname !== '/login'}
    <Footer />
  {/if}
</div>