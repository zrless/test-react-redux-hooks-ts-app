import homeState from "../state/home";

const homeReducer = (state = homeState, action: any) => {
  const { type, payload = {} } = action;
  const { records = [] } = payload;
  switch (type) {
    case "GET_RECORDS":
      return {
        ...state,
        records: records,
      };

    case "SET_RECORDS":
      return {
        ...state,
        records: records,
      };
    default:
      return state;
  }
};

export default homeReducer;
