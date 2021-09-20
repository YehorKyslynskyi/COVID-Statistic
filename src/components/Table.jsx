import React from "react";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

const Table = ({ countries, createModal, applySort }) => {
  return (
    <table>
      <tbody>
        <TableHeader countries={countries} applySort={applySort} />
        {countries.map((country, index) => (
          <TableItem
            createModal={createModal}
            number={index + 1}
            country={country}
            key={country.ID}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
