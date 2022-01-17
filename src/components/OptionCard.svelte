<script>
	import truss from '../../static/systems/truss.svg';
	import frame from '../../static/systems/frame.svg';
	import beam from '../../static/systems/beam.svg';
  import {goto} from '$app/navigation';

	export let system;
</script>

<!-- Conditionally render to appropriate system option -->

<!-- Truss Card -->
{#if system.id == 1}
	<div class='w-6/12 bg-slate-100 rounded-md sm:my-1 mx-2 my-3 drop-shadow-xl'>
		<div class='flex items-center h-52 bg-slate-700 rounded-t'>
			<img src={truss} alt={system.lower} class='w-full h-5/6' />
		</div>
		<div class='flex flex-row justify-between'>
			<div class='font-medium text-xl text-slate-800 my-3 mx-5'>
				{system.name}
			</div>
			<div class='font-medium text-xl text-slate-800 my-3 mx-5'>
				<button 
					class='w-full px-5 py-1 bg-blue-800 font-medium text-slate-100' 
					on:click={() => {goto('/trusses')}}
				>
					Solve
				</button>
			</div>
		</div>
	</div>

<!-- Frame Card -->
{:else if system.id == 2}
	<div class='w-5/12 bg-slate-100 rounded-md sm:my-1 mx-2 my-3 drop-shadow-xl'>
		<div class='flex items-center h-52 bg-slate-700 rounded-t'>
			<img src={frame} alt={system.lower} class='w-full h-full' />
		</div>
		<div class='flex flex-row justify-between'>
			<div class='font-medium text-xl text-slate-800 my-3 mx-5'>
				{system.name}
			</div>
			<div class='font-medium text-xl text-slate-800 my-3 mx-5'>
				<button 
					class='w-full px-5 py-1 bg-blue-800 font-medium text-slate-100' 
					on:click={() => {goto('/frames')}}
				>
					Solve
				</button>
			</div>
		</div>
	</div>

<!-- Beam Card -->
{:else}
	<div class='w-full bg-slate-100 rounded-md mx-2 my-12 drop-shadow-xl'>
		<div class='flex items-center h-52 bg-slate-700 rounded-t'>
			<img src={beam} alt={system.lower} class='w-full h-3/6' />
		</div>
		<div class='flex flex-row justify-between'>
			<div class='font-medium text-xl text-slate-800 my-3 mx-5'>
				{system.name}
			</div>
			<div class='font-medium text-xl text-slate-800 my-3 mx-5'>
				<button 
					class='w-full px-5 py-1 bg-blue-800 font-medium text-slate-100' 
					on:click={() => {goto('/beams')}}
				>
					Solve
				</button>
			</div>
		</div>
	</div>
{/if}
