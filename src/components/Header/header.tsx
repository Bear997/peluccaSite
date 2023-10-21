import { $, component$, useSignal } from "@builder.io/qwik";
import { scrollTo } from "~/Utils/utils";
import MobileMenu from "./mobileMenu";
const navigationLabel = ["Chi Siamo", "Contattaci", "Servizi"];
export default component$(() => {
  const logo = "images/logo.png";
  const currentNav = useSignal("Home");
  const handleNav = $((id: string) => {
    currentNav.value = id;
    scrollTo(id);
  });
  return (
    <div class="fixed z-10 flex w-full justify-between bg-transparent p-4 backdrop-blur-sm ">
      <div
        class="transition-all duration-1000 ease-in-out hover:rotate-[360deg] hover:scale-125"
        onClick$={() => handleNav("home")}
      >
        <a href="#">
          <img
            class="rounded-full"
            width={60}
            height={60}
            src={logo}
            alt="logo"
          />
        </a>
      </div>
      <MobileMenu />
      <div class="hidden sm:flex">
        <ul class=" flex list-none items-center justify-center gap-10 text-2xl text-gray-50">
          {navigationLabel.map((l, index) => {
            return (
              <li key={index}>
                <button
                  class={`cursor-pointer ${
                    currentNav.value === l ? "text-slate-400" : "text-white"
                  }`}
                  onClick$={() => handleNav(l)}
                >
                  {l}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});
