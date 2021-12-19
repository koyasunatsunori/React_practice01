import { memo } from "react";

export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("ChildAreaがレンダリングされました");

  //2000の要素を持つ配列を準備して、繰り返しで表示させる
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
