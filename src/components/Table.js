import React from 'react'

export default function Table({
  items,
  leftHeading,
  rightHeading,
  renderLeftItem,
  renderRightItem,
}) {
  return (
      <table>
        <thead>
          <th align="left">{leftHeading}</th>
          <th align="left">{rightHeading}</th>
        </thead>
        <tbody>
          {items.map(function (item, index) {
            return (
              <tr key={index}>
                <td align="left">{renderLeftItem(item)}</td>
                <td align="left">{renderRightItem(item)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
  )
}
