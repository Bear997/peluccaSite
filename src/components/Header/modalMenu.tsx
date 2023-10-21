import { type Signal, component$, $, useSignal } from "@builder.io/qwik";
import {LuXOctagon} from "@qwikest/icons/lucide"
import { scrollTo } from "~/Utils/utils";


const navigationLabel = ["Chi Siamo", "Contattaci", "Servizi"];

export default component$<{ showModal: Signal<boolean> }>((props) => {
  const currentNav = useSignal("Home");
  const handleNav = $((id: string) => {
    currentNav.value = id;
    props.showModal.value=false
    scrollTo(id);
  });
  return (
    <div
      class={`fixed bottom-0 left-0 top-0 z-20 flex w-full items-center justify-center bg-black bg-opacity-50 p-10 backdrop-blur-md ${
        props.showModal.value ? "flex" : "hidden"
      }`}
    >
      <div class="absolute top-5 right-5">
        <LuXOctagon class="w-8 h-8" color="white" onClick$={()=>props.showModal.value=false}/>
      </div>
      <div class="flex flex-col gap-20 ">
        {navigationLabel.map((l, index) => {
          return (
            <p key={index} class="text-xl font-bold text-zinc-400" onClick$={() => handleNav(l)}>
              {l} 
            </p>
          );
        })}
      </div>
    </div>
  );
});
