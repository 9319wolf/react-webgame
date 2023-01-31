import React, { useContext } from "react";
import { TableContext } from "./MineSearch-self";
import Td from "./Td-self";

const Tr = () => {
  const { tableData } = useContext(TableContext);

  return (
    <tr>
      {tableData[0] &&
        Array(tableData[0].length)
          .fill()
          .map((td, i) => <Td key={i + 1} />)}
    </tr>
  );
};

export default Tr;
