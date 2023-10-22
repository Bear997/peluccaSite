import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ChiSiamo from "~/components/ChiSiamo/chiSiamo";
import Footer from "~/components/Footer/footer";
import Header from "~/components/Header/header";
import MainView from "~/components/MainView/mainView";



export default component$(() => {
  return (
    <div class="overflow-x-hidden">
    <Header />
    <MainView />
    <ChiSiamo />
    <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Pelucca Brothers",
  meta: [
    {
      name: "description",
      content: "Odontotecnici di Roccagorga",
    },
  ],
};
