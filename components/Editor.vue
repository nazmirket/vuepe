<template>
	<div
		ref="peditor"
		:class="['pe-editor', `pe-size-${width}x${height}`, `pe-zoom-${zoom}`]"
	>
		<Toolbar />
		<!--CONTENT-->
		<div class="pe-content">
			<!--PAGE WRAPPER-->
			<div class="pe-page-wrapper" :style="{ width: sW + 'px', height: sH + 'px' }">
				<div class="pe-page">
					<Controller />
				</div>
			</div>
		</div>
		<!---->
	</div>
</template>

<script>
import Editor from '../assets/js/Editor'
import Toolbar from './Toolbar.vue'
import Controller from './Controller.vue'
export default {
	components: { Toolbar, Controller },
	model: {
		prop: 'page',
		event: 'change',
	},
	props: {
		page: {
			type: {
				components: { type: Array, default: () => [] },
				style: { type: Object, default: () => {} },
			},
			default: {},
		},
		width: {
			type: Number,
			default: 600,
		},
		height: {
			type: Number,
			default: 600,
		},
		zoom: {
			type: Number,
			default: 100, // 10 to 200
		},
		pageId: {
			type: String,
			required: true,
		},
	},
	data() {
		return { editor: null }
	},
	computed: {
		ratio() {
			return (this.zoom || 100) / 100
		},
		sH() {
			return this.ratio * this.height
		},
		sW() {
			return this.ratio * this.width
		},
	},
	watch: {
		page() {
			this.load()
		},
	},
	mounted() {
		if (this.page && this.pageId) this.load()
	},
	methods: {
		onChange(components, style) {
			this.$emit('change', { components, style })
		},
		initPE() {
			if (!window?.$pe) window.$pe = {}
		},
		load() {
			this.initPE()
			const root = this.$refs.peditor
			this.editor = new Editor({ root, onChange: this.onChange })
			window.$pe[this.pageId] = this.editor
			this.editor.load([...this.page.components], this.page.style)
		},
	},
}
</script>

<style></style>
