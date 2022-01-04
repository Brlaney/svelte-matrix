<script>
  import {page} from '$app/stores';
  import {onMount} from 'svelte';
  import {goto} from '$app/navigation';

  let songResults = [];

  onMount(async () => {
    var searched = $page.params.searched;
    const itunesSearched = await fetch(`https://itunes.apple.com/search?term=${searched}&entity=song`);

    var res = await itunesSearched.json();
    songResults = res.results;

    console.log(songResults)
  })
</script>

<section>
  <div>
    Artist searched: {$page.params.searched}
  </div>
  <div>
    {#each songResults as song}
    <button on:click={goto(`${$page.params.searched}/${song.trackId}`)}>
      <div>{song.trackName}</div>
    </button>  
    {/each}
  </div>
</section>
