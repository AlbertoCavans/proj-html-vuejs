import { reactive } from "vue";

export const store = reactive({
  apiUrl: "...",
  apiKey: "...",

  socialLinks: [
    {
      icon: "fa-brands fa-facebook-f",
      url: "#",
    },
    {
      icon: "fa-brands fa-instagram",
      url: "#",
    },
    {
      icon: "fa-brands fa-twitter",
      url: "#",
    },
  ],

  quickLinks: [
    {
      text: "HOME",
      url: "#",
    },
    {
      text: "BLOG",
      url: "#",
    },
    {
      text: "GALLERY",
      url: "#",
    },
    {
      text: "CONTACT",
      url: "#",
    },
  ],

  educationLinks: [
    {
      text: "FIXTURES & RESULTS",
      url: "#",
    },
    {
      text: "LEAGUE TABLE",
      url: "#",
    },
    {
      text: "PLAYERS",
      url: "#",
    },
    {
      text: "GALLERY",
      url: "#",
    },
  ],
});
