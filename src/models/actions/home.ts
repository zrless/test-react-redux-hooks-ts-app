import { IData } from "../../pages/home/typing"
import { fetchRecords } from "../../services/home";

/**
 * 在redux中异步请求
 * action中请求数据
 */
export const getRecords = (params?: any) => {
  return async (dispatch: any) => {
    const res = await fetchRecords();
    dispatch({
      type: "GET_RECORDS",
      payload: {
        records: res.data || [],
      },
    });
  };
};

/**
 * 外部数据设置state
 */
export const setRecords = (records: IData[]) => {
  return {
    type: 'SET_RECORDS',
    payload: {
      records
    }
  }
};
