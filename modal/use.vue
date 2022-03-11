

<script>
import {modalController} from '~/composables/core/modals'


export default defineComponent({
	name: 'Modal',
	setup(){

	
		const { openSingleDetails} = modalController()

return {
openSingleDetails
}
    }
})
</script>

