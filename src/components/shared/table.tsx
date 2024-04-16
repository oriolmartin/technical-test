import React from "react";
import { Table } from "antd";
import { AnyObject } from "antd/es/_util/type";
import { ColumnType } from "antd/es/table/interface";

interface Props {
  data: AnyObject[];
  columns: string[];
  actions?: (text: string, record: any) => React.ReactNode;
}

const FormattedTable: React.FC<Props> = ({ data, columns, actions }: Props) => {
  const formattedCols = columns.map((col: string) => {
    return { title: col, dataIndex: col.toLowerCase(), key: col.toLowerCase() };
  });

  const actionColumn: ColumnType<any> = {
    align: "center",
    key: "actions",
    render: actions,
    fixed: "right",
    className: "table-actions",
  };

  return (
    <Table
      columns={!!actions ? [...formattedCols, actionColumn] : formattedCols}
      dataSource={data}
    />
  );
};

export default FormattedTable;
