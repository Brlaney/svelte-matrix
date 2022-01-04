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
    <input type='text' bind:value={searched} />
    <button on:click={search}>Search</button>
  </div>
</section>
