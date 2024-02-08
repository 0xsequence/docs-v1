import React from 'react'

function LargeTableCell({ item, columns, renderCell }) {
  return (
    columns.map(function (column, columnIndex) {
      return (
        <td align="left">{renderCell(item, columnIndex)}</td>
      )
    })
  )
}

export default function LargeTable({ columns, items, renderCell }) {
  return (
      <table>
        <thead>
          {columns.map(function (column, columnIndex) {
            return (
              <th align="left">{column}</th>
            )
          })}
        </thead>
        <tbody>
          {items.map(function (item, index) {
            return (
              <tr key={index}>
                <LargeTableCell item={item} columns={columns} renderCell={renderCell} />
              </tr>
            )
          })}
        </tbody>
      </table>
  )
}
