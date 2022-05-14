/*
 This is a reusable component so no functionality goes here; just the display of the table UI

*/

import React from "react";
import "./table.css";

function TableHead({ data }) {
  return (
    <thead>
      <tr>
        {data.map(el => {
          return (
            <th
              width={`${el.width}%` || "20%"}
              key={el.header}
            >
              {el.header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

function TableBody({ data }) {
  return (
    <tbody>
      {data[0].content?.map((elem, index) => {
        return (
          <tr key={Math.random()}>
            {data.map(el => {
              return (
                <td
                  width={
                    el.width
                      ? `${el.width}%`
                      : `20%`
                  }
                  key={Math.random()}
                >
                  {el.content[index]}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default function Table({ data = [] }) {
  return (
    <table>
      <TableHead data={data} />
      <TableBody data={data} />
    </table>
  );
}
