import { type Signal, component$, $, useSignal } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { LuXOctagon } from "@qwikest/icons/lucide";
import { scrollTo } from "~/Utils/utils";

const navigationLabel = ["Chi Siamo", "Contattaci", "Servizi", "Gallery"];

export default component$<{ showModal: Signal<boolean> }>((props) => {
  const currentNav = useSignal("Home");
  const navigation = useNavigate();
  const location = useLocation();
  const handleNav = $(async (id: string) => {
    currentNav.value = id;
    if (id === "Gallery") {
      navigation("/gallery");
    }
    if (location.url.pathname !== "/") {
      await navigation("/");
    }
    props.showModal.value = false;
    await scrollTo(id);
  });
  return (
    <>
      <div
        class={`fixed bottom-0 left-0 right-0 top-0 z-20 flex h-screen w-full items-center justify-center bg-black bg-opacity-50 p-10 backdrop-blur-md transition-all duration-200 ${
          props.showModal.value ? "translate-x-0" : "translate-x-96"
        }`}
      >
        <div class="absolute right-5 top-5">
          <LuXOctagon
            class="h-8 w-8"
            color="white"
            onClick$={() => (props.showModal.value = false)}
          />
        </div>
        <div class="flex flex-col gap-20 ">
          {navigationLabel.map((l, index) => {
            return (
              <p
                key={index}
                class="text-xl font-bold text-zinc-400"
                onClick$={() => handleNav(l)}
              >
                {l}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
});
