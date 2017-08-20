import Vue from 'vue';

const EventBus = new Vue();
const CollapseEvent = 'collapse';

export default {
	on(handler) {
		EventBus.$on(CollapseEvent, handler);
	},

	off(handler) {
		EventBus.$off(CollapseEvent, handler);
	},

	emit() {
		EventBus.$emit(CollapseEvent);
	}
};
