import React, { FC, ReactElement } from "react";
import Item from "./item";
import { IData } from "../typing";

interface IProps {
  records: IData[];
}

const List: FC<IProps> = ({ records }): ReactElement => {
  return (
    <div>
      {(records || []).map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </div>
  );
};

export default List;
