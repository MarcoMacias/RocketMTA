import { createBrowserRouter } from "react-router-dom";
import { WithMenu } from "@/Layouts/WithMenu/WithMenu";
import NProgress from "nprogress";
import { AuthLayout } from "@/router/layouts/AuthLayout";
import { useEffect } from "react";
import loadable from "@loadable/component";
import RequireAuth from "@/_requireAuth";
import { ProfileError } from "@/router/erros/ProfileError";
import { HomeError } from "./erros/HomeError";
import Adjust from "@/Pages/Adjust";

const LazyLoad = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return <></>;
};

const Rick = () => {
  window.location.href="https://www.youtube.com/watch?v=DLzxrzFCyOs"
  return <></>;
};


const Landing = loadable(() => import("@/Pages/Landing"), {
  fallback: <LazyLoad />,
});

const NotFound = loadable(() => import("@/Pages/NotFound"), {
  fallback: <LazyLoad />,
});

export const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "/login",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/download",
    element: <Rick />
  },
  {
    path: "/register",
    element: <Adjust />,
  },
  {
    path: "/register/confirm",
    element: <Adjust />,
  },
  {
    path: "/register/confirm/:token",
    element: <Adjust />,
  },
  {
    path: "/login/recovery",
    element: <Adjust />,
  },
  {
    path: "/recovery/sent",
    element: <Adjust />,
  },
  {
    path: "/home",
    errorElement: <HomeError />,
    element: <Adjust />,
  },
  {
    path: "/discover",
    element: <Adjust />,
  },
  {
    path: "/marktplace",
    element: <Adjust />,
  },
  {
    path: "/support",
    element: <Adjust />,
  },
  {
    path: "/premium",
    element: <Adjust />,
  },
  {
    path: "/me/:slug",
    errorElement: <NotFound />,
    element: <Adjust />,
  },
  {
    path: "/recovery/change/:token",
    element: <Adjust />,
  },
]);
