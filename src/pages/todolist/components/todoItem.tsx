import React, { FC, ReactElement, useContext } from "react";
import { IToDo } from "../typing";
import { Context } from "../../../App";

interface IProps {
  data: IToDo;
  onRemoveToDo: (val: number) => void;
  onChangeItemStatus: (val: number) => void;
}

const ToDoItem: FC<IProps> = ({
  data,
  onRemoveToDo,
  onChangeItemStatus,
}): ReactElement => {
  // 方式一:
  const value = useContext(Context);
  console.log("方式一: ", value);

  const onRemove = (id: number) => {
    onRemoveToDo && onRemoveToDo(id);
  };

  const onChange = (id: number) => {
    onChangeItemStatus && onChangeItemStatus(id);
  };

  return (
    <div>
      {/* 方式二 */}
      <Context.Consumer>
        {(value) => {
          const { name, date } = value;
          console.log("方式二: ", value)
          return (
            <div>
              <input
                type="checkbox"
                defaultChecked={data.checked}
                onClick={() => {
                  onChange(data.id);
                }}
              />
              <span>{data.title}</span>
              <button
                onClick={() => {
                  onRemove(data.id);
                }}
              >
                删除
              </button>
              <span>
                {name} - {date}
              </span>
            </div>
          );
        }}
      </Context.Consumer>
    </div>
  );
};

export default ToDoItem;
