<template>
	<transition name="slide" appear>
		<div  class="bg">
			<slot/>
		

		</div>
	</transition>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'


export default defineComponent({
	name: 'Modal',

})
</script>

<style scoped>

.bg {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  width: 100vw;
  max-width: 100vw;
  min-height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: scale(0);
  opacity: 0
}
</style>