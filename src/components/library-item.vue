<template>
	<div class="library-item"
		 :style="{ backgroundColor: color }"
		 v-on:click="isExpanded = true">

		<div class="title">
			<div class="name">
				{{ item.Name }}
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
				<div class="stars">
					<i class="fa fa-star"></i>
					{{ item['Repository Stars Count'] || 0 }}
				</div>
			</div>
			<div class="description">
				{{ item.Description }}
			</div>

		</div>
	</div>
</template>

<script>
	let randomColor = function () {
		let unit = () => Math.ceil(Math.random() * 100 + 155);
		return `rgb(${unit()}, ${unit()}, ${unit()})`;
	};

	export default {
		name: 'library-item',
		props: [
			'item',
		],
		data: () => ({
			isExpanded: false,
			color: '',
		}),

		created: function () {
			if (this.item && !this.item.color) {
				this.item.color = randomColor();
			}
			this.color = this.item.color;
		}
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

		.title {
			margin: 0.2em 0;
			display: flex;

			.name {
				flex: 1;
				height: 30px;
				text-align: center;
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
			margin-top: -0.5em;
			padding: 0.5em;

			min-height: 0;
			max-height: 0;
			opacity: 0;

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
