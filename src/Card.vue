<template>
	<div class="card">
		<h2>{{ label }}</h2>
		<p>Open: {{ open }}</p>
		<p>Close: {{ close }}</p>
		<p>High: {{ high }}</p>
		<p>Low: {{ low }}</p>
	</div>
</template>

<script>
export default {
	name: 'Card',
	props: {
		label: String,
		open: Number,
		close: Number,
		high: Number,
		low: Number
	}
}
</script>

<style scoped>
.card {
	border: 1px solid #ffab00;
	background-color: #ffab00;
	border-radius: 4px;
	width: 286px;
	padding: 1em;
	margin-top: 1em;
	text-align: center;
}

</style>