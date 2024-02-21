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

  positionteams: [
    {
      position: "1",
      teamName: "Instanbul Sports",
      teamImg: "club-1.png",
      teamWins: "18",
      teamDraws: "2",
      teamLoses: "0",
      teamPoints: "42",
    },
    {
      position: "2",
      teamName: "UnitedFs Club",
      teamImg: "club-2.png",
      teamWins: "14",
      teamDraws: "2",
      teamLoses: "1",
      teamPoints: "35",
    },
    {
      position: "3",
      teamName: "Schalke Club",
      teamImg: "club-3.png",
      teamWins: "13",
      teamDraws: "3",
      teamLoses: "0",
      teamPoints: "32",
    },
    {
      position: "4",
      teamName: "Inter Club",
      teamImg: "club-4.png",
      teamWins: "13",
      teamDraws: "2",
      teamLoses: "1",
      teamPoints: "31",
    },
    {
      position: "5",
      teamName: "Madrid Club",
      teamImg: "club-5.png",
      teamWins: "12",
      teamDraws: "1",
      teamLoses: "2",
      teamPoints: "30",
    },
    {
      position: "6",
      teamName: "Schalke Club",
      teamImg: "club-6.png",
      teamWins: "11",
      teamDraws: "0",
      teamLoses: "3",
      teamPoints: "28",
    },
    {
      position: "7",
      teamName: "Arsenal Club",
      teamImg: "club-7.png",
      teamWins: "10",
      teamDraws: "5",
      teamLoses: "0",
      teamPoints: "26",
    },
    {
      position: "8",
      teamName: "Bayern Club",
      teamImg: "club-8.png",
      teamWins: "10",
      teamDraws: "2",
      teamLoses: "2",
      teamPoints: "24",
    },
    {
      position: "9",
      teamName: "Atletico Club",
      teamImg: "club-9.png",
      teamWins: "9",
      teamDraws: "0",
      teamLoses: "4",
      teamPoints: "20",
    },
  ],
});
