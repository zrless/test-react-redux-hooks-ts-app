import React, {
  FC,
  ReactElement,
  useState,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { connect } from "react-redux";
import List from "./components/list";
import { axiosGet } from "../../utils/http";
import { IData } from "./typing";
import { getRecords, setRecords } from "../../models/actions/home";

const MyList: FC<any> = ({
  records,
  fetchRecords,
  handleRecords,
}: any): ReactElement => {
  useEffect(() => {
    fetchRecords();
    return function destory() {
      console.log("销毁页面");
    };
  }, []);

  useEffect(() => {
    console.log("records", records);
  }, [records]);

  const onBtnClick = useCallback(() => {
    const index = records.length + 1;
    const record = {
      name: "Kavin" + index,
      age: 60 + index,
      company: "公司" + index,
    };
    const newRecords = records.concat([record]);

    handleRecords(newRecords);
  }, [records]);

  return (
    <div>
      <List records={records} />
      <button onClick={onBtnClick}>添加</button>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    records: state.home.records,
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchRecords: () => {
      dispatch(getRecords());
    },
    handleRecords: (records: IData[]) => {
      dispatch(setRecords(records));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
