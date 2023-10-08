import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div id="ChiSiamo" class="flex flex-col gap-10 justify-center w-full h-screen bg-black text-white pt-10">
      <div class="flex flex-row justify-around">
        <div>Giovanni Nardacci</div>
        <div class="w-[10rem] h-[20rem] bg-slate-500">Immagine</div>
      </div>
      <div class="flex flex-row justify-around ">
        <div class="w-[10rem] h-[20rem] bg-slate-500">Immagine</div>
        <div>Virgilio Nardacci</div>
      </div>
    </div>
  );
});
