<script>
    import {StructuralSystems} from '../systems';
    import OptionCard from '../components/OptionCard.svelte'
</script>

<section>
  <div class='flex flex-row flex-wrap justify-between w-full h-full'>
    {#each $StructuralSystems as sys (sys.id)}
      <OptionCard system={sys} />
    {/each}
  </div>
</section>
