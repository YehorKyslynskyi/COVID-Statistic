import React from "react";
import classes from "../styles/TableBody.module.css";

const TableItem = (props) => {
  return (
    <tr
      onClick={() => props.createModal(props.country)}
      className={classes.tableItem}
    >
      <td className={classes.number}>{props.number}</td>
      <td className={classes.country}>{props.country.Country}</td>
      <td className={classes.totalConfirmed}>{props.country.TotalConfirmed}</td>
    </tr>
  );
};

export default TableItem;
