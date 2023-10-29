import { component$ } from "@builder.io/qwik";
import { social } from "~/data/social";
import { LuFacebook, LuInstagram, LuLinkedin } from "@qwikest/icons/lucide";
import { navToLink } from "~/Utils/utils";
const Icon = component$<{ label: string }>((props) => {
  switch (props.label) {
    case "facebook":
      return <LuFacebook class="w-10 h-10 group-hover: fill-slate-400"/>;
    case "instagram":
      return <LuInstagram class="w-10 h-10 group-hover: fill-slate-400" />;
    case "linkedin":
      return <LuLinkedin class="w-10 h-10 group-hover: fill-slate-400" />;
    default:
      return <p>no icon</p>;
  }
});

export default component$(() => {
  return (
<div class="bg-white flex flex-col justify-center items-start  sm:flex-row sm:gap-10">
        {Object.entries(social).map((kv, index) => {
          const socialLabel = kv[0];
          const socialLink = kv[1];          
          return (
            <button key={index} onClick$={()=>navToLink(socialLink)} class="group flex gap-4 p-2 rounded-xl  hover:bg-black">
              <Icon label={socialLabel} /> <p class="self-center font-bold text-lg group-hover:text-slate-400">{socialLabel.toUpperCase()}</p>
            </button>
          );
        })}
      </div>
  );
});
