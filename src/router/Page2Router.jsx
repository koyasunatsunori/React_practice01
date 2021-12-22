import { Page2 } from "../Page1";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <UrlParameter />
  }
];
