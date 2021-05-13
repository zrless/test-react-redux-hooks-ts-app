import React, { FC, useRef, ReactElement } from "react";
import { IToDo } from "../typing";

interface IProps {
  onAddItem: (val: IToDo) => void | undefined;
  records: IToDo[];
}

const ToDoInput: FC<IProps> = ({ onAddItem, records }): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onAddTodo = () => {
    const value: string = inputRef.current!.value.trim();
    if (!value) {
      alert("请输入有效内容");
      return;
    }
    if (
      records.length > 0 &&
      records.filter((e) => e.title === value).length > 0
    ) {
      alert("内容重复");
      return;
    }

    const data: IToDo = {
      id: new Date().getTime(),
      title: value,
      checked: false,
    };

    onAddItem && onAddItem(data);
  };

  return (
    <div>
      <input ref={inputRef} placeholder="请输入添加的内容" type="text" />
      <button onClick={onAddTodo}>添加</button>
    </div>
  );
};

export default ToDoInput;
