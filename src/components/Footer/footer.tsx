import { component$ } from "@builder.io/qwik";
import Social from "./social";
import { LuSmartphone, LuNavigation, LuMails } from "@qwikest/icons/lucide";
import { onClickMail } from "~/Utils/utils";

export default component$(() => {
  return (
    <div
      id="Contattaci"
      class="flex h-screen  flex-col gap-5 w-full items-center justify-evenly p-5 sm:flex-col sm:h-auto"
    >
      <div class="w-72">
        <div class="my-2 flex gap-5">
          <LuSmartphone class="scale-110 justify-start" />
          <p>
            (+39) 3889897416 <span class="font-bold">Giovanni</span>
          </p>
        </div>
        <div class="my-2 flex gap-5">
          <LuSmartphone class="scale-110 justify-start" />
          <p>
            (+39) 3889897416 <span class="font-bold">Virgilio</span>
          </p>
        </div>
        <div class="my-2 flex gap-5">
          <LuNavigation class="scale-110 justify-start" />
          <p> via Antani, 23, Roccagorga (LT)</p>
        </div>
        <div class="my-2 flex gap-5">
          <LuMails class="scale-110 justify-start" />
          <p onClick$={()=> onClickMail('giovanni.mardacci@gmail.com')}>giovanni.mardacci@gmail.com</p>
        </div>
      </div>
      <Social />
      <div class="flex justify-center">
        <p class="font-semibold">
          P.I 03012346578 - via Antani, 23, Roccagorga (LT)
        </p>
      </div>
    </div>
  );
});
