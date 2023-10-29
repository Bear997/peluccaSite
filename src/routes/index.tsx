import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ChiSiamo from "~/components/ChiSiamo/chiSiamo";
import MainView from "~/components/MainView/mainView";

export default component$(() => {
  return (
    <div class="overflow-x-hidden">
      <MainView />
      <ChiSiamo />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Pelucca Brothers",
  meta: [
    {
      name: "description",
      content: "Odontotecnici di Roccagorga che antani neiwenfoenvnvnwindvnew",
    },
  ],
};
