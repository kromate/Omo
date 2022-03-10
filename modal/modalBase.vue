// place this component in a layout page

<template>
	<div>
		<component :is="modal.elem" v-for="modal in allModals" :key="modal.elem.name" :show-modal="modal.state.value" @close="modal.close" />
	</div>
</template>

<script >

import {  globalModal } from '@/composables/core/modals'

export default {
	name: 'ModalBase',
	setup () {

		const allModals = globalModal()

		console.log(allModals)

		
		
		return { allModals }
	}
}
</script>
