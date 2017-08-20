<template>
	<library-list :items="items" v-if="items">
	</library-list>
</template>

<script>
	import Data from './api/data';
	import LibraryList from './components/library-list.vue';

	export default {
		data: () => ({
			items: undefined
		}),
		created: function () {
			let component = this;

			Data.loadData().then(value => component.items = value);
		},
		components: {
			LibraryList,
		},
	};
</script>

<style lang="less">
</style>
