import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div
      id="Chi Siamo"
      class="flex h-auto w-full flex-col justify-center gap-10 bg-black pt-10 text-white pb-5 sm:h-screen"
    >
      <div class="flex flex-col justify-around sm:flex-row">
        <div class="bg-slate-500 h-[10rem] w-[10rem] rounded-full justify-center flex items-center self-center sm:hidden">Immagine</div>
        <div class="w-[50rem]">
          <h1>Giovanni Nardacci</h1> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed non gravida neque. Nunc et iaculis augue. Vivamus
          sit amet blandit leo, pretium laoreet libero. Maecenas interdum
          consequat diam ut bibendum. Proin arcu lectus, mattis eu aliquam
          vitae, finibus et diam. Suspendisse mattis velit sem, sit amet
          eleifend metus egestas vitae. Curabitur augue turpis, aliquam sed dui
          nec, convallis viverra purus. Aliquam eu ipsum quis tortor imperdiet
          viverra vitae nec ipsum. Aliquam facilisis lobortis facilisis. Proin
          felis sem, pharetra sit amet aliquam sit amet, sagittis non mauris.
          Morbi gravida nunc ex, vitae aliquam nisl facilisis at. Suspendisse
          potenti. Aenean est neque, lacinia quis velit eget, maximus consequat
          libero. Fusce egestas, purus pretium eleifend ultricies, velit erat
          molestie justo, nec blandit massa massa ac urna. Mauris non turpis
          dui. Suspendisse convallis sapien magna, sed porttitor lorem aliquam
          pharetra. Nullam nunc arcu, tincidunt id neque id, commodo ultricies
          felis. Nunc iaculis neque fringilla lectus eleifend, nec tincidunt
          lacus pulvinar. Nullam sollicitudin aliquet facilisis. In nec iaculis
          dolor. Praesent egestas, ipsum et pulvinar volutpat, dolor urna
          tristique lacus, eget pretium mi tortor vel felis. Morbi a dolor
          justo. Aliquam sed odio leo. Sed id malesuada augue. Pellentesque nec
          tellus metus. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Duis rhoncus interdum risus
          eget laoreet. Sed vitae sollicitudin velit, vitae dictum quam.
          Pellentesque diam leo, vehicula et luctus at, congue sed risus.
          Vivamus sed vestibulum ante. Pellentesque nec justo vel enim tincidunt
          vehicula.{" "}
        </div>
        <div class="bg-slate-500 h-[10rem] w-[10rem] hidden rounded-full self-center sm:flex sm:items-center sm:justify-center">Immagine</div>
      </div>
      <div class="flex flex-col justify-around sm:flex-row">
        <div class="bg-slate-500 h-[10rem] w-[10rem] flex justify-center rounded-full self-center items-center ">Immagine</div>
        <div class="sm:w-[50rem]">
          <h1>Virgilio Nardacci</h1>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed non gravida neque. Nunc et iaculis augue. Vivamus
          sit amet blandit leo, pretium laoreet libero. Maecenas interdum
          consequat diam ut bibendum. Proin arcu lectus, mattis eu aliquam
          vitae, finibus et diam. Suspendisse mattis velit sem, sit amet
          eleifend metus egestas vitae. Curabitur augue turpis, aliquam sed dui
          nec, convallis viverra purus. Aliquam eu ipsum quis tortor imperdiet
          viverra vitae nec ipsum. Aliquam facilisis lobortis facilisis. Proin
          felis sem, pharetra sit amet aliquam sit amet, sagittis non mauris.
          Morbi gravida nunc ex, vitae aliquam nisl facilisis at. Suspendisse
          potenti. Aenean est neque, lacinia quis velit eget, maximus consequat
          libero. Fusce egestas, purus pretium eleifend ultricies, velit erat
          molestie justo, nec blandit massa massa ac urna. Mauris non turpis
          dui. Suspendisse convallis sapien magna, sed porttitor lorem aliquam
          pharetra. Nullam nunc arcu, tincidunt id neque id, commodo ultricies
          felis. Nunc iaculis neque fringilla lectus eleifend, nec tincidunt
          lacus pulvinar. Nullam sollicitudin aliquet facilisis. In nec iaculis
          dolor. Praesent egestas, ipsum et pulvinar volutpat, dolor urna
          tristique lacus, eget pretium mi tortor vel felis. Morbi a dolor
          justo. Aliquam sed odio leo. Sed id malesuada augue. Pellentesque nec
          tellus metus. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Duis rhoncus interdum risus
          eget laoreet. Sed vitae sollicitudin velit, vitae dictum quam.
          Pellentesque diam leo, vehicula et luctus at, congue sed risus.
          Vivamus sed vestibulum ante. Pellentesque nec justo vel enim tincidunt
          vehicula.{" "}
        </div>
      </div>
    </div>
  );
});
