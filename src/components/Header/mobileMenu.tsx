import { component$, useSignal} from "@builder.io/qwik";
import {LuMenu} from '@qwikest/icons/lucide'
import ModalMenu from "./modalMenu";
export default component$(() => {
  const showModal = useSignal(false)
  
  return (
    <div class="flex sm:hidden ">
      <LuMenu class="w-8 h-8" color="white" onClick$={()=>showModal.value=true}/>
      <ModalMenu showModal={showModal}/>
    </div>
  );
});
