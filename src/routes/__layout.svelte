<script>
  import '../tailwind.css'
  import Header from '../components/header.svelte'
</script>

<div class='w-full min-h-screen bg-slate-800 text-slate-50 overflow-y-hidden'>
  <Header />
  <div class='flex items-center justify-center px-10 md:px-14 lg:px-32 py-14 '>
    <slot></slot>
  </div>
</div>
