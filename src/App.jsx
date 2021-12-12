/* eslint react-hooks/exhaustive-deps: off */
//eslintの特定のエラー検知を無効化できる
import React, { useEffect } from "react";
import { ColorfulMessage } from "./components/ColorfulMesage";
import { useState } from "react";

const App = () => {
  console.log("最初");
  //動的に変化する変数num, num の stateを更新していく関数setNumを定義
  //初期値0を設定,stateは配列で定義
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  //ボタンクリック時に実行される処理を記述
  //onClickでボタンタグに機能を割り当てる
  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //Appコンポーネント内で何回も再レンダリングが行われるためNG
  /*
  if (num % 3 === 0) {
    setFaceShowFlag(true);
  } else {
    setFaceShowFlag(false);
  }
  */

  //すでにtrueが設定されている場合は、新しく値を入れないようにする
  //パイプラインは左がfalseの場合、右側の処理を実行する
  //&&は左側がtrueの場合、右側の処理を実行する
  //0のときに(^_-)-☆が表示されないようにする(初期値をfalseにする)
  useEffect(() => {
    console.log("useEffect!!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    //上の記述で次の行でeslintが検知したエラーを無効化することができる
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue" message="お元気ですか" />
      <ColorfulMessage color="pink" message="元気です" />
      <button onClick={onClickButton}>Count Up!!</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^_-)-☆</p>}
    </>
  );
};

export default App;
