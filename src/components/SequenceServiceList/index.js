import React from 'react'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'

function SequenceServiceList(props) {
  const serviceName = props.serviceName
  const serviceList = props.serviceList
  return (
    <div className={styles.sequenceServiceList}>
      <table>
        <thead>
          <th align="left">Network</th>
          <th align="left">{serviceName} Endpoint</th>
        </thead>
        <tbody>
        {serviceList.map(function(chain, i){
          return (
            <tr>
              <td align="left">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img style={{ paddingRight: '8px' }} src={chain.logo} width="30" />
                  <span>{chain.network}</span>
                </div>
              </td>
              <td align="left">{chain.endpoint}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default SequenceServiceList
