import React from 'react'
import Table from './Table'

export default function IndexerTable({ items }) {
  return (
    <Table
      items={items}
      leftHeading="Network"
      rightHeading="Indexer Endpoint"
      renderLeftItem={item => (
        <div className="flex items-center">
          <img src={item.logo} className="w-6 mr-2" />
          <span>{item.network}</span>
        </div>
      )}
      renderRightItem={item => <span>{item.endpoint}</span>}
    />
  )
}
