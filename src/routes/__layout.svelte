<script>
  import '../tailwind.css'
  import Nav from '../components/Nav.svelte'
</script>

<div class='w-full min-h-screen bg-slate-800 text-slate-50 overflow-y-hidden'>
  <Nav />
  <div class='flex justify-center items-center content-center px-10 sm:px-1 md:px-6 lg:px-12 py-14 h-full'>
    <slot></slot>
  </div>
</div>
