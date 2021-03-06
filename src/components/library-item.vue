<template>
	<div class="library-item"
		 :style="{ backgroundColor: color }"
		 v-on:click="expand()">

		<div class="title">
			<div class="name">
				{{ item.Name }}
			</div>
			<div class="language">
				{{ item.Language }}
			</div>
			<div class="stars">
				{{ item['Repository Stars Count'] || 0 }}
				<i class="fa fa-star"></i>
			</div>
		</div>
		<div class="description">
			{{ item.Description }}
		</div>


		<div class="expanded-view"
			 :style="{ backgroundColor: color }"
			 :class="{ visible: isExpanded }"
			 v-on:click.stop="isExpanded = false">

			<div class="title">
				<div class="name">
					{{ item.Name }}
				</div>
				<div class="language">
					{{ item.Language }}
				</div>
				<div class="stars">
					{{ item['Repository Stars Count'] || 0 }}
					<i class="fa fa-star"></i>
				</div>
			</div>
			<div class="description">
				{{ item.Description }}
			</div>

		</div>
	</div>
</template>

<script>
	import LanguageColors from '../api/language-colors';
	import CollapseEventBus from './library-item-collapse-event-bus';

	export default {
		name: 'library-item',

		props: [
			'item',
		],

		data: () => ({
			isExpanded: false,
		}),

		created() {
			this.collapseEventHandler = () => this.isExpanded = false;
			CollapseEventBus.on(this.collapseEventHandler);
		},

		destroyed() {
			CollapseEventBus.off(this.collapseEventHandler);
		},

		methods: {
			expand() {
				CollapseEventBus.emit();
				this.isExpanded = true;
			}
		},

		computed: {
			color() {
				if (!this.item) {
					return null;
				}

				return this.item.color = this.item.color || LanguageColors(this.item.Language);
			}
		},
	};
</script>

<style lang="less">
	.library-item {
		height: 100px;
		min-width: 350px;
		padding: 0.5em;

		flex: 1;
		display: flex;
		flex-direction: column;

		background: #fff0e0;

		margin: 1px;

		cursor: pointer;

		.title {
			margin: 0.2em 0;
			display: flex;

			.name {
				flex: 1;
				height: 30px;
				text-align: center;
			}

			.language::after {
				content: '•';
				margin: 0 0.5em;
			}

			.stars .fa-star {
				margin-left: 0.5em;
			}
		}

		.description {
			flex: 1;
			overflow: hidden;
		}

		.expanded-view {
			position: absolute;
			left: 0;
			right: 0;

			background: #fff0e0;
			border: 1px solid black;
			margin-top: -0.5em;
			padding: 0.5em;

			min-height: 0;
			max-height: 0;
			opacity: 0;

			overflow: hidden;

			display: flex;
			flex-direction: column;

			transition: min-height 300ms ease-in-out, max-height 300ms ease-in-out, opacity 200ms linear;

			&.visible {
				min-height: 40vh;
				max-height: 100vh;
				opacity: 1;
			}
		}
	}
</style>
