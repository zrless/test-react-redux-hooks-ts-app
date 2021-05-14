import React, {
  FC,
  ReactElement,
  useState,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import ToDoInput from "./components/todoInput";
import ToDoList from "./components/todoList";
import { IToDo, IActionType, IState } from "./typing";
import { todoListReducer } from "./reducer";

const MyToDoList: FC = (): ReactElement => {
  /**
   * 方式一:
   */
  // const [records, setRecords] = useState<IToDo[]>([]);
  // useEffect(() => {
  //   const todolist = JSON.parse(localStorage.getItem("todolist") || "[]");
  //   setRecords(todolist);
  //   return function destory() {
  //     console.log("销毁页面");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log(records);
  //   localStorage.setItem("todolist", JSON.stringify(records));
  // }, [records]);

  // const onAddItem = useCallback((data: IToDo) => {
  //   setRecords((records) => [...records, data]);
  // }, []);

  // const onRemoveItem = useCallback((id: number) => {
  //   setRecords((records) => {
  //     return records.filter((item) => item.id !== id);
  //   });
  // }, []);

  // const onChangeItem = useCallback((id: number) => {
  //   setRecords((records) => {
  //     return records.map((item) => {
  //       return {
  //         ...item,
  //         checked: item.id === id ? !item.checked : item.checked,
  //       };
  //     });
  //   });
  // }, []);
  // return (
  //   <div>
  //     <ToDoInput onAddItem={onAddItem} records={records} />
  //     <ToDoList
  //       onRemoveItem={onRemoveItem}
  //       onChangeItem={onChangeItem}
  //       records={records}
  //     />
  //   </div>
  // );

  /**
   * 方式二: reducer
   */
  const initialState: IState = { records: [] };
  const [state, dispatch] = useReducer(todoListReducer, initialState);
  useEffect(() => {
    const todolist: IToDo[] = JSON.parse(localStorage.getItem("todolist") || "[]");
    dispatch({
      type: IActionType.INIT_STATE,
      payload: todolist
    })
    return function destory() {
      console.log("销毁页面");
    };
  }, []);

  useEffect(() => {
    console.log("todolist:", state.records);
    localStorage.setItem("todolist", JSON.stringify(state.records));
  }, [state.records]);

  const onAddItem = useCallback((data: IToDo) => {
    dispatch({
      type: IActionType.ADD_ITEM,
      payload: data
    })
  }, []);

  const onRemoveItem = useCallback((id: number) => {
    dispatch({
      type: IActionType.REMOVE_ITEM,
      payload: id
    })
  }, []);

  const onChangeItem = useCallback((id: number) => {
    dispatch({
      type: IActionType.CHANGE_STATUS,
      payload: id
    })
  }, []);

  return (
    <div>
      <ToDoInput onAddItem={onAddItem} records={state.records} />
      <ToDoList
        onRemoveItem={onRemoveItem}
        onChangeItem={onChangeItem}
        records={state.records}
      />
    </div>
  );
};

export default MyToDoList;
