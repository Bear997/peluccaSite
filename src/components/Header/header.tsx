import { $, component$, useSignal } from "@builder.io/qwik";
import { scrollTo } from "~/Utils/utils";

export default component$(() => {
  const logo = "images/logo.png";
  const currentNav = useSignal("Home");
  const handleNav = $((id: string) => {
    currentNav.value = id;
    scrollTo(id);
  });
  return (
    <div class="fixed z-10 flex w-full justify-between bg-transparent p-4 ">
      <div class="hover:scale-125 hover:rotate-[360deg] transition-all duration-1000 ease-in-out">
        <a href="#">
          <img class="w-20 h-20 rounded-full" src={logo} alt="logo" />
        </a>
      </div>
      <div class="flex">
        <ul class=" flex list-none items-center justify-center gap-10 text-2xl text-gray-50">
          <li>
            <button
              class={`cursor-pointer ${
                currentNav.value === "ChiSiamo" ? "text-red-500" : "text-white"
              }`}
              onClick$={() => handleNav("ChiSiamo")}
            >
              Chi Siamo
            </button>
          </li>
          <li>
            <button
              class={`cursor-pointer ${
                currentNav.value === "Contattaci" ? "text-red-500" : "text-white"
              }`}
              onClick$={() => handleNav("Contattaci")}
            >
              Contattaci
            </button>
          </li>
          <li>
            <button
              class={`cursor-pointer ${
                currentNav.value === "Servizi" ? "text-red-500" : "text-white"
              }`}
              onClick$={() => handleNav("Servizi")}
            >
              Servizi
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
});
