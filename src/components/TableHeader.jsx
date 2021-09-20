import React from "react";
import { SORT_TYPES } from "../App";
import classes from "../styles/TableHeader.module.css";

const TableHeader = ({ applySort }) => {
  return (
    <tr className={classes.tableHeader}>
      <td
        onClick={() => applySort(SORT_TYPES.DEFAULT)}
        className={classes.number}
      >
        №
      </td>
      <td
        onClick={() => applySort(SORT_TYPES.COUNTRY)}
        className={classes.country}
      >
        Country
      </td>
      <td
        onClick={() => applySort(SORT_TYPES.TOTAL)}
        className={classes.totalConfirmed}
      >
        Total Confirmed
      </td>
    </tr>
  );
};

export default TableHeader;
