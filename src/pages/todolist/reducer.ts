import { IToDo, IAction, IState, IActionType } from "./typing";

function todoListReducer(state: IState, action: IAction) {
  const { type, payload } = action;
  switch (type) {
    case IActionType.INIT_STATE:
      return {
        ...state,
        records: payload as IToDo[],
      };
    case IActionType.ADD_ITEM:
      return {
        ...state,
        records: [...state.records, payload as IToDo],
      };
    case IActionType.REMOVE_ITEM:
      return {
        ...state,
        records: state.records.filter((item: IToDo) => item.id !== payload),
      };
    case IActionType.CHANGE_STATUS:
      return {
        ...state,
        records: state.records.map((item: IToDo) => {
          return {
            ...item,
            checked: item.id === payload ? !item.checked : item.checked,
          };
        }),
      };
    default:
      return state;
  }
}

export { todoListReducer };
