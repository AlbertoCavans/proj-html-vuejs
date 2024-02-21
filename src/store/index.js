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

  nextMatch: {
    homeTeamName: "Instanbul Sports",
    homeTeamImg: "club-1.png",
    guestTeamName: "UnitedFs Club",
    guestTeamImg: "club-2.png",
    dateMatch: "May 21, 2022 18:05 pm",
    location: "Expert Stadium",
  },

  upcomingMatchs: [
    {
      homeTeamName: "Schalke Club",
      homeTeamImg: "club-3.png",
      guestTeamName: "Inter Club",
      guestTeamImg: "club-4.png",
      dateMatch: "May 21, 2022 18:05 pm",
      location: "Expert Stadium",
    },
    {
      homeTeamName: "Atletico Club",
      homeTeamImg: "club-9.png",
      guestTeamName: "Schalke Club",
      guestTeamImg: "club-3.png",
      dateMatch: "May 21, 2022 18:05 pm",
      location: "Expert Stadium",
    },
    {
      homeTeamName: "UnitedFs Club",
      homeTeamImg: "club-2.png",
      guestTeamName: "Bayern Club",
      guestTeamImg: "club-8.png",
      dateMatch: "May 21, 2022 18:05 pm",
      location: "Expert Stadium",
    },
    {
      homeTeamName: "Arsenal Club",
      homeTeamImg: "club-7.png",
      guestTeamName: "Atletico Club",
      guestTeamImg: "club-9.png",
      dateMatch: "May 21, 2022 18:05 pm",
      location: "Expert Stadium",
    },
    {
      homeTeamName: "Instanbul Sports",
      homeTeamImg: "club-1.png",
      guestTeamName: "UnitedFs Club",
      guestTeamImg: "club-2.png",
      dateMatch: "May 21, 2022 18:05 pm",
      location: "Expert Stadium",
    },
  ],
});
