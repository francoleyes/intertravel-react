import { BasicLayout } from "../layouts";
import { Home } from "../pages/Home"
import { Error404 } from "../pages"

const routes = [
  {
    path: "/",
    layout: BasicLayout,
    component: Home,
  },
  {
    path: "*",
    layout: BasicLayout,
    component: Error404,
  },
];

export default routes;
