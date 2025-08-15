<script>
	let { icon: Icon, label, value, color = 'primary', ...props } = $props();

	const colorClasses = {
		primary: 'bg-primary-50 border-primary-200 text-primary-800',
		emerald: 'bg-emerald-50 border-emerald-200 text-emerald-800',
		amber: 'bg-amber-50 border-amber-200 text-amber-800',
		blue: 'bg-blue-50 border-blue-200 text-blue-800'
	};

	const iconColors = {
		primary: 'text-primary-600',
		emerald: 'text-emerald-600',
		amber: 'text-amber-600',
		blue: 'text-blue-600'
	};
</script>

<div
	class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
	{...props}
>
	<div class="flex items-center space-x-3">
		<div class="flex-shrink-0">
			<div class="w-10 h-10 rounded-lg {colorClasses[color]} flex items-center justify-center">
				<Icon class="w-5 h-5 {iconColors[color]}" />
			</div>
		</div>
		<div class="flex-1 min-w-0">
			<p class="text-2xl font-bold text-gray-900">{value}</p>
			<p class="text-sm text-gray-600">{label}</p>
		</div>
	</div>
</div>
