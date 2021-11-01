<template>
  <div
    :id="id"
    :class="`pe-editor pe-active-editor pe-size-${width}x${height} pe-zoom-${zoom}`"
  >
    <!--TOOLBAR-->
    <div class="pe-toolbar">
      <!--OPTIONS TOOLBAR-->
      <div class="pe-options-toolbar">
        <!--FONT FAMILY-->
        <span class="pe-tool pe-change-font">
          <select class="pe-change-font-select" />
        </span>

        <!--FONT SIZE-->
        <span class="pe-tool pe-change-font-size">
          <select class="pe-change-font-size-select" />
        </span>

        <!--TEXT ALIGN-->
        <span class="pe-tool pe-change-align">
          <img class="pe-align-selected" src="../icons/align-left.svg" />
          <div class="pe-align-menu pe-hidden">
            <img src="../icons/align-left.svg" class="pe-left-alg" />
            <img src="../icons/align-center.svg" class="pe-center-alg" />
            <img src="../icons/align-right.svg" class="pe-right-alg" />
          </div>
        </span>

        <!--COLOR-->
        <span class="pe-tool pe-change-color">
          <span class="pe-color-area">
            <img src="../icons/font-color.svg" />
            <span class="pe-color-indicator"></span>
          </span>
          <input class="pe-change-color-picker" type="color" />
        </span>

        <!--TOGGLE BOLD-->
        <span class="pe-tool pe-toggle-bold">
          <input type="checkbox" class="pe-toggle-bold-btn" />
          <img src="../icons/bold.svg" />
        </span>

        <!--TOGGLE ITALIC-->
        <span class="pe-tool pe-toggle-italic">
          <input type="checkbox" class="pe-toggle-italic-btn" />
          <img src="../icons/italic.svg" />
        </span>

        <!--TOGGLE STRIKE-->
        <span class="pe-tool pe-toggle-strike">
          <input type="checkbox" class="pe-toggle-strike-btn" />
          <img src="../icons/strike.svg" />
        </span>

        <!--FLIP HORIZONTAL-->
        <span class="pe-tool pe-flip-horizontal">
          <button>
            <img src="../icons/fliph.svg" />
          </button>
        </span>

        <!--FLIP VERTICAL-->
        <span class="pe-tool pe-flip-vertical">
          <button>
            <img src="../icons/flipv.svg" />
          </button>
        </span>

        <!--FLIP BACK-->
        <span class="pe-tool pe-flip-back">
          <button>
            <img src="../icons/flipb.svg" />
          </button>
        </span>

        <!--FLIP FRONT-->
        <span class="pe-tool pe-flip-front">
          <button>
            <img src="../icons/flipf.svg" />
          </button>
        </span>

        <!--ALPHA-->
        <span class="pe-tool pe-change-alpha">
          <span class="pe-alpha-icon">
            <img src="../icons/opacity.svg" />
          </span>
          <div class="pe-alpha-menu pe-hidden">
            <input type="range" min="0" max="100" class="pe-alpha-slider" />
          </div>
        </span>
      </div>

      <!--HISTORY TOOLBAR-->
      <div class="pe-history-toolbar">
        <!--FLIP BACK-->
        <span class="pe-tool pe-is-disabled pe-undo">
          <button>
            <img src="../icons/undo.svg" />
          </button>
        </span>

        <!--FLIP FRONT-->
        <span class="pe-tool pe-is-disabled pe-redo">
          <button>
            <img src="../icons/redo.svg" />
          </button>
        </span>
      </div>
    </div>

    <!--CONTENT-->
    <div class="pe-page-wrapper">
      <div class="pe-page">
        <!--CONTROLLER-->
        <div class="pe-controller">
          <!--ROTATE HANDLE-->
          <span class="pe-rotate-handle">
            <img src="../icons/rotate.svg" />
          </span>

          <!--DELETE HANDLE-->
          <span class="pe-delete-handle">
            <img src="../icons/delete.svg" />
          </span>

          <div class="pe-thumbs">
            <span class="pe-thumb pe-thumb-tl"></span>
            <span class="pe-thumb pe-thumb-tr"></span>
            <span class="pe-thumb pe-thumb-bl"></span>
            <span class="pe-thumb pe-thumb-br"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { init, reload } from "../js/index";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      deault: 600,
    },
    height: {
      type: Number,
      deault: 600,
    },
    zoom: {
      type: Number,
      default: 100, // 10 to 200
    },
  },
  mounted() {
    init();
    reload();
  },
};
</script>

<style>
.pe-change-font-size-select,
.pe-change-font-select {
  background: url("") no-repeat right rgb(255, 255, 255);
}

.pe-editor {
  height: 60vh;
  width: 80vw;
}
</style>