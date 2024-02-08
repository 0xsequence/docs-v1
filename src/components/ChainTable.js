import React from 'react'
import LargeTable from './LargeTable'

export default function ChainTable({ items, columns }) {
  const cellRenderer = (item, columnIndex) => {
    switch (columnIndex) {
      case 0:
        return (
          <div className="flex items-center">
            <img src={item.logo} className="w-6 mr-2" />
            <span>{item.network}</span>
          </div>
        )
      case 1:
        return (
          <span>{item.chainHandle}</span>
        )
      case 2:
        return (
          <span>https://{item.chainHandle}-indexer.sequence.app</span>
        )
      default:
        return null
    }
  }

  return (
    <LargeTable 
      columns={columns} 
      items={items} 
      renderCell={(item, columnIndex) => (
        cellRenderer(item, columnIndex)
      )}
    />
  )
}
