<template>
	<!--TOOLBAR-->
	<div class="pe-toolbar">
		<!--OPTIONS TOOLBAR-->
		<div class="pe-options-toolbar">
			<!--FONT FAMILY-->
			<span class="pe-tool pe-change-font">
				<div class="pe-selector">
					<span class="pe-selector-display">
						<span class="pe-selector-label" />
						<img src="../public/select-arrow.svg" />
					</span>
					<div class="pe-selector-options" />
				</div>
			</span>

			<!--FONT SIZE-->
			<span class="pe-tool pe-change-font-size">
				<div class="pe-selector">
					<span class="pe-selector-display">
						<span class="pe-selector-label" />
						<img src="../public/select-arrow.svg" />
					</span>
					<div class="pe-selector-options" />
				</div>
			</span>

			<!--TEXT ALIGN-->
			<span class="pe-tool pe-change-align">
				<button>
					<img />
				</button>
			</span>

			<!--COLOR-->
			<span class="pe-tool pe-change-color">
				<span class="pe-color-area">
					<img src="../public/font-color.svg" />
					<span class="pe-color-indicator" />
				</span>
				<input type="color" />
			</span>

			<!--TOGGLE BOLD-->
			<span class="pe-tool pe-toggle-bold">
				<button>
					<img src="../public/bold.svg" />
				</button>
			</span>

			<!--TOGGLE ITALIC-->
			<span class="pe-tool pe-toggle-italic">
				<button>
					<img src="../public/italic.svg" />
				</button>
			</span>

			<!--TOGGLE STRIKE-->
			<span class="pe-tool pe-toggle-strike">
				<button>
					<img src="../public/strike.svg" />
				</button>
			</span>

			<!--FLIP HORIZONTAL-->
			<span class="pe-tool pe-flip-horizontal">
				<button>
					<img src="../public/fliph.svg" />
				</button>
			</span>

			<!--FLIP VERTICAL-->
			<span class="pe-tool pe-flip-vertical">
				<button>
					<img src="../public/flipv.svg" />
				</button>
			</span>

			<!--FLIP BACK-->
			<span class="pe-tool pe-flip-back">
				<button>
					<img src="../public/flipb.svg" />
				</button>
			</span>

			<!--FLIP FRONT-->
			<span class="pe-tool pe-flip-front">
				<button>
					<img src="../public/flipf.svg" />
				</button>
			</span>

			<!--OPACITY-->
			<span class="pe-tool pe-change-opacity">
				<span class="pe-opacity-icon">
					<img src="../public/opacity.svg" />
				</span>
				<div class="pe-opacity-menu">
					<input type="range" min="0" max="100" class="pe-opacity-slider" />
				</div>
			</span>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
