import { useCallback, useMemo, useState } from "react";
import { ChildArea } from "./components/ChildArea";

export default function App() {
  console.log("app");
  const [text, setText] = useState(0);
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  //useCallbackで囲む
  //関数のメモ化
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  //変数のメモ化、useMemo
  //空配列を第二引数に設定→最初だけ読み込みが行われる
  //利用頻度少なめ？
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
