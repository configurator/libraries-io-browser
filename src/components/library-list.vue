<template>
	<div class="library-list">
		<div class="filter">
			<language-filter :languages="languages"
				:selectedLanguage="selectedLanguage"
				@selectLanguage="value => selectedLanguage = value"></language-filter>
		</div>

		<library-item v-for="item in filteredItems.slice(page * pageSize, (page + 1) * pageSize)"
			:key="item.Id"
			:item="item"></library-item>

		<div class="paging">
			<button v-on:click="page--" :disabled="page <= 0"><i class="fa fa-arrow-left"></i></button>
			<div>
				<span>Page {{ page + 1 }}</span>
			</div>
			<button v-on:click="page++" :disabled="page >= filteredItems.length / pageSize - 1"><i class="fa fa-arrow-right"></i></button>
		</div>
	</div>
</template>

<script>
	import LibraryItem from './library-item.vue';
	import LanguageFilter from './language-filter.vue';

	export default {
		data: () => ({
			page: 0,
			pageSize: 20,

			selectedLanguage: null,
		}),
		props: [
			'items',
		],
		components: {
			LibraryItem,
			LanguageFilter,
		},
		computed: {
			languages() {
				let results = {};
				this.items.map(item => (item.Language || '').trim())
					.filter(item => item)
					.forEach(lang => results[lang] = true);
				return Object.keys(results);
			},
			filteredItems() {
				if (!this.selectedLanguage) {
					return this.items;
				}

				return this.items.filter(item => item.Language === this.selectedLanguage);
			},
		},
	};
</script>

<style lang="less">
	.full-width() {
		width: ~'calc(100vw - 1em)';
	}

	.library-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		position: relative;

		.filter {
			.full-width();

			display: flex;
			min-height: 45px;
			align-items: center;
			justify-content: center;
		}

		.paging {
			.full-width();

			display: flex;
			height: 60px;

			button, div {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;

				margin: 0;
				padding: 0;
			}

			button {
				border: 1px solid black;
				background: white;
			}
		}
	}
</style>
