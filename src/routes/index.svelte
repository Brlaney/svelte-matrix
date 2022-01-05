<script>
    import {StructuralSystems} from '../systems';
    import Option from '../components/Option.svelte'
</script>

<section>
  <div class='flex-auto w-full'>
    {#each $StructuralSystems as ss (ss.id)}
      <Option system={ss} />
    {/each}
  </div>
</section>
