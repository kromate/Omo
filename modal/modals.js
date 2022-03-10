import { ref } from '@nuxtjs/composition-api'
import SingleDetails from '@/components/modals/customers/SingleDetails' //modals
import CreateVirtualAccount from '@/components/modals/customers/CreateVirtualAccount' // modals


const allModals = [SingleDetails, CreateVirtualAccount]
const GlobalModalState = {}



export const globalModal = () => {
	const globalModalArray = []

	for (const modal of allModals) {
		globalModalArray.push(
			{
				elem: modal,
				state: GlobalModalState[modal.name],
				open: GlobalModalState['open'+modal.name],
				close: GlobalModalState['close'+modal.name]
			}
		)
	}

	return globalModalArray
	
}

async function registerModal(ModalArray) {

	for (const modal of ModalArray) {
		GlobalModalState[modal.name] = ref(false)
	}

}

registerModal(allModals)


export const modalController = () => {
	for (const key in GlobalModalState) { 
		GlobalModalState['open' + key] = () => {
			GlobalModalState[key].value = true
		}
		GlobalModalState['close' + key] = () => {
			GlobalModalState[key].value = false
		}
	}

	return { ...GlobalModalState }
}

