import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ChiSiamo from "~/components/ChiSiamo/chiSiamo";
import Header from "~/components/Header/header";
import MainView from "~/components/MainView/mainView";



export default component$(() => {
  return (
    <>
    <Header />
    <MainView />
    <ChiSiamo />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
