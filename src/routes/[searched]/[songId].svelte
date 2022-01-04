<script>
  import {page} from '$app/stores';
  import {onMount} from 'svelte';

  let songResults = [];

  onMount(async () => {
    var songId = $page.params.songId;
    const itunesSearched = await fetch(`https://itunes.apple.com/search?term=${songId}&entity=song`);

    var res = await itunesSearched.json();
    songResults = res.results[0];

    console.log(songResults)
  })
</script>

<section>
  <div>
    Artist searched: {$page.params.searched}
  </div>
  <div>
    {songResults.trackName}
  </div>
</section>
