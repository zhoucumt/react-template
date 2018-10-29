import loadable from "react-loadable";
import Loading from "../../components/Loading";

export const Home = loadable({
  loader: () => import("./Home"),
  loading: Loading
});
export const About = loadable({
  loader: () => import("./About"),
  loading: Loading
});
export const Topics = loadable({
  loader: () => import("./Topics"),
  loading: Loading
});

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/topics",
    component: Topics
  }
];

export default routes;
