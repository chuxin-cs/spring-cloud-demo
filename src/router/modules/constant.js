export default [
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    name: "notFound",
    component: () => import("@/pages/error-page/404"),
    hidden: true,
  },
  {
    path: "/401",
    name: "noPermission",
    component: () => import("@/pages/error-page/401"),
    hidden: true,
  },
];
