import React, { FC, ReactElement } from "react";
import { IData } from "../typing";

interface IProps {
  data: IData;
}

const List: FC<IProps> = ({ data }): ReactElement => {
  return (
    <div>
      <span>{data.name}</span>-<span>{data.age}</span>-
      <span>{data.company}</span>
    </div>
  );
};

export default List;
