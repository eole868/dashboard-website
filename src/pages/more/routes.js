// import Changelog from "./changelog";
// import FirstLanding from "./first-landing";

export default [
  {
    path: "/changelog",
    components: {
      cache: () => import("./changelog"),
    },
    meta: {
      title: "Changelog",
    },
  },
  {
    path: "/first-landing",
    component: () => import("./first-landing"),
    meta: {
      title: "First Landing",
      hideNav: 1,
      isTab: 1,
      noLogin: 1,
    },
  },
  {
    path: "/hosting/first-landing",
    redirect: "/first-landing",
  },
];
