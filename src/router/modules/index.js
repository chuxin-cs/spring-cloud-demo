import Layout from "@/layouts/index.vue";

export const constantRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/pages/dashboard/index"),
        meta: { title: "Dashboard", icon: "dashboard", affix: true },
      },
    ],
  },
  {
    path: "/about",
    component: Layout,
    redirect: "/about",
    children: [
      {
        path: "",
        name: "About",
        component: () => import("@/pages/about/index"),
        meta: { title: "Dashboard", icon: "about", affix: true },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    hidden: true,
    meta: {},
    component: () => import("@/pages/login/index"),
  },

  {
    path: "/404",
    name: "notFound",
    hidden: true,
    meta: {},
    component: () => import("@/pages/error-page/404"),
  },
  {
    path: "/401",
    name: "noPermission",
    hidden: true,
    meta: {},
    component: () => import("@/pages/error-page/401"),
  },
];

export const asyncRoutes = [];

export default [...constantRoutes, ...asyncRoutes];
