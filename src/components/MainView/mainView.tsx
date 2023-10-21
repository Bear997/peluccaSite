import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div id="home"
      class="flex h-screen items-center justify-center bg-cover bg-no-repeat "
      style="background-image: url('images/mainImage.jpg');"
    >
      <div
        class="cursor-pointer rounded-lg border-4 border-solid p-2 transition-all duration-500
        hover:bg-white hover:text-red-400 hover:scale-110"
      >
        <button class="text-lg font-bold">Richiedi un Preventivo</button>
      </div>
    </div>
  );
});
