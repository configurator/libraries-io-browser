<template>
	<div>
		<button :class="{ selected: !selectedLanguage }"
				@click="() => selected('')">
			All languages
		</button>
		<button v-for="lang in languages"
				:key="lang"
				:class="{ selected: lang === selectedLanguage }"
				:style="{ backgroundColor: color(lang) }"
				@click="() => selected(lang)">
			{{ lang }}
		</button>
	</div>
</template>

<script>
	import LanguageColors from '../api/language-colors';

	export default {
		props: [
			'languages',
			'selectedLanguage',
		],
		methods: {
			selected(lang) {
				this.$emit('selectLanguage', lang);
			},

			color(lang) {
				return LanguageColors(lang);
			},
		}
	};
</script>

<style lang="less">
	div {
		display: flex;
		flex-wrap: wrap;

		button {
			height: 45px;
			min-width: 100px;
			flex: 1;

			background: white;
			border: 1px solid black;

			&.selected {
				font-weight: bold;
				font-style: italic;
			}
		}
	}
</style>
