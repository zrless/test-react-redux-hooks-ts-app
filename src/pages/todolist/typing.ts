export interface IToDo {
  id: number;
  title: string;
  checked: boolean;
}

export enum IActionType {
  INIT_STATE = "INIT_STATE",
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CHANGE_STATUS = "CHANGE_STATUS",
}

export interface IAction {
  type: IActionType;
  payload: number | IToDo | IToDo[] | null | undefined;
}

export interface IState {
  records: IToDo[];
}
