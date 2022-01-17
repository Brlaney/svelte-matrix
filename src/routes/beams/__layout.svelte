<script>
  import back from '../../../static/backIcon.svg';

  const goBack = () => {
    window.history.back()
  }
</script>

<div class='flex flex-row items-center justify-between mb-12'>
  <button on:click={goBack} class='flex items-center justify-center text-white'>
    <img src={back} alt='back' class='h-4'>
    <div class='ml-2'>Back</div>
  </button>
</div>
<slot></slot>
