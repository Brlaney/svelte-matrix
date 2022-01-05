<script>
    import truss from '../../static/truss.svg';
    import beam from '../../static/beam.svg';
    import frame from '../../static/frame.svg';

  import Card from './Card.svelte'
  export let system
</script>

<Card>
  <div class='h-52 bg-slate-700'>

    <!-- Conditionally render to appropriate system option -->
    {#if system.id == 1}
      <img src={truss} alt={system.lower} class='w-full h-full' />
    {:else if system.id == 2}
      <img src={beam} alt={system.lower} class='w-full h-full' />
    {:else}
      <img src={frame} alt={system.lower} class='w-full h-full' />
    {/if}
  </div>

  <div class='mx-6 my-4'>
    <div class='font-medium text-slate-900 mb-4'>
      {system.name}
    </div>
  </div>
</Card>
