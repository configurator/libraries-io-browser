<template>
	<library-list :data="data">
	</library-list>
</template>

<script>
	import Data from './api/data';

	export default {
		created: function () {
			let component = this;

			Data.loadSample().then(value => component.sample = value);
		}
	};
</script>

<style lang="less">
</style>
