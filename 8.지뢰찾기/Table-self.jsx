import React, { useContext } from "react";
import { TableContext } from "./MineSearch-self";
import Tr from "./Tr-self";

const Table = () => {
  const { tableData } = useContext(TableContext);

  return (
    <table>
      <tbody>
        {Array(tableData.length)
          .fill()
          .map((tr, i) => (
            <Tr key={i} rowIndex={i} />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
