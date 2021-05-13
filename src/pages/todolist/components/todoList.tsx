import React, { FC, ReactElement } from "react";

import ToDoItem from "./todoItem";

import { IToDo } from "../typing";

interface IProps {
  records: IToDo[];
  onRemoveItem: (id: number) => void;
  onChangeItem: (id: number) => void;
}

const ToDoList: FC<IProps> = ({
  records,
  onRemoveItem,
  onChangeItem,
}): ReactElement => {
  const removeToDo = (id: number) => {
    console.log(id);
    onRemoveItem && onRemoveItem(id);
  };
  const changeItem = (id: number) => {
    onChangeItem && onChangeItem(id);
  };
  return (
    <div>
      {records.map((item) => {
        return (
          <ToDoItem
            key={item.id}
            data={item}
            onRemoveToDo={removeToDo}
            onChangeItemStatus={changeItem}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
