import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
    //UrlParameterを利用する場合、pathの指定が異なる
    //:(コロン)のあとにパラメータを受け取る
  }
];
