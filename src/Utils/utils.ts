import { $ } from "@builder.io/qwik";

export const scrollTo = $((id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({behavior:"smooth"})
})

export const navToLink = (link: string) => {
  window.open(link, '_blank')
}

export const onClickMail = (mail: string) => {
  location.href = `mailto:${mail}`
}