import { $, component$, useSignal } from "@builder.io/qwik";
import { scrollTo } from "~/Utils/utils";
import MobileMenu from "./mobileMenu";
import { useNavigate, useLocation, Link } from "@builder.io/qwik-city";
import { LuImage } from "@qwikest/icons/lucide";
const navigationLabel = ["Chi Siamo", "Contattaci", "Servizi"];
export default component$(() => {
  const navigation = useNavigate();
  const logo = "images/logo.png";
  const currentNav = useSignal("Home");
  const location = useLocation();

  const handleNav = $(async (id: string) => {
    currentNav.value = id;
    console.log("id--->", id, "pathname ---->", location.url.pathname);
    // if (id === "Gallery") {
    //   navigation("/gallery");
    // }
    // if (location.url.pathname !== "/") {
    //   await navigation("/");
    // }
    await scrollTo(id);
  });

  return (
    <div class="fixed z-10 flex h-20 w-full justify-between bg-transparent p-4 backdrop-blur-sm ">
      <div onClick$={() => handleNav("home")}>
        <a href="/">
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
      <div class="hidden sm:flex justify-center items-center">
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
        <Link class="flex justify-center items-center flex-col ml-5 text-white" href="/gallery">
          <LuImage class="w-10 h-10 "/>
          gallery
        </Link>
      </div>
    </div>
  );
});
