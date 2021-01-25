<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <!-- Header Slot -->
          <div class="modal-header">
            <slot name="header"> Header default</slot>
          </div>

          <!-- Body slot -->
          <div class="modal-body">
            <slot name="body"> Body default </slot>
          </div>

          <!-- Footer slot -->
          <div class="modal-footer">
            <slot name="footer">
              Footer default
              <button
                class="modal-default-button"
                @click="$emit('close')"
              >
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalLayout",
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

/** Estilos do Modal */
.modal-header {
  margin-top: 0;
  color: #583D72;
  font-size: 1.2em;
  text-align: center;
}

.modal-body {
  margin: 25px 0;
  text-align: justify;
}

.modal-default-button {
  float: right;
  background-color: #583d72;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: .5em 1.3em;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
}

.modal-default-button:hover {
  background-color: #9558cf;
}

/*
 * Os estilos a seguir são auto-aplicados à elementos com transition="modal"
 * quando sua visibilidade for trocada pelo Vue.js.
 */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>