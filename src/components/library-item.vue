<template>
	<div class="library-item"
		 :style="{ backgroundColor: color }"
		 v-on:click="isExpanded = true">

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

		<div class="expanded-view"
			 v-if="isExpanded"
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
		return `rgba(${unit()}, ${unit()}, ${unit()})`;
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
		margin: 0.5em;

		flex: 1;
		display: flex;
		flex-direction: column;

		background: #fff0e0;

		.title {
			margin: 0.2em;
			display: flex;

			.name {
				flex: 1;
				height: 30px;
				text-align: center;
			}

			.stars {
				width: 70px;
			}
		}

		.description {
			flex: 1;
		}

		.expanded-view {
			position: absolute;
			left: 0;
			right: 0;

			min-height: 60vh;
			background: cyan;

			display: flex;
			flex-direction: column;
		}
	}
</style>
