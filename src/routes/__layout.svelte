<script>
  import '../tailwind.css'
  import Header from '../components/header.svelte'
</script>

<Header />
<div class='w-full min-h-screen bg-slate-800 text-slate-50 px-10 md:px-14 lg:px-32 py-14'>
  <slot></slot>
</div>
