<script>
  import {goto} from '$app/navigation';
  var searched = '';
  const search = () => {
    goto(`${searched}`)
  }
</script>

<section>
  <div>
    <div>Search an artist</div>
    <input class='text-zinc-800 px-2 py-1 rounded-sm' type='text' bind:value={searched} />
    <button class='px-5 bg-blue-500 py-1 rounded-sm' on:click={search}>
      Search
    </button>
  </div>
</section>
