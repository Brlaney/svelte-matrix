<script>
	import truss from '../../static/systems/truss.svg';
	import frame from '../../static/systems/frame.svg';
	import beam from '../../static/systems/beam.svg';
	export let system;
</script>

<!-- Conditionally render to appropriate system option -->

<!-- Truss Card -->
{#if system.id == 1}
	<div class='w-6/12 bg-slate-100 rounded-lg sm:my-1 mx-2 my-3'>
		<div class='flex items-center h-52 bg-slate-700'>
			<img src={truss} alt={system.lower} class='w-full h-5/6' />
		</div>
		<div class='mx-6 my-4'>
			<div class='font-medium text-xl text-slate-900 mb-4'>
				{system.name}
			</div>
		</div>
	</div>

<!-- Frame Card -->
{:else if system.id == 2}
	<div class='w-5/12 bg-slate-100 rounded-lg sm:my-1 mx-2 my-3'>
		<div class='flex items-center h-52 bg-slate-700'>
			<img src={frame} alt={system.lower} class='w-full h-full' />
		</div>
		<div class='mx-6 my-4'>
			<div class='font-medium text-xl text-slate-900 mb-4'>
				{system.name}
			</div>
		</div>
	</div>

<!-- Beam Card -->
{:else}
	<div class='w-full bg-slate-100 rounded-lg sm:my-1 mx-2 my-3'>
		<div class='flex items-center h-52 bg-slate-700'>
			<img src={beam} alt={system.lower} class='w-full h-3/6' />
		</div>
		<div class='mx-6 my-4'>
			<div class='font-medium text-xl text-slate-900 mb-4'>
				{system.name}
			</div>
		</div>
	</div>
{/if}
