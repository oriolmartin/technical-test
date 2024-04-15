import React from "react";
import { Table } from "antd";
import { AnyObject } from "antd/es/_util/type";

interface Props {
  data: AnyObject[];
  columns: string[];
}

const FormattedTable: React.FC<Props> = ({ data, columns }: Props) => {
  const formattedCols = columns.map((col: string) => {
    return { title: col, dataIndex: col.toLowerCase(), key: col.toLowerCase() };
  });

  return <Table columns={formattedCols} dataSource={data} />;
};

export default FormattedTable;
