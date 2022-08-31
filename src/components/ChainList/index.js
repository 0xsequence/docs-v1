import React from 'react'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'

function ChainList(props) {
  const chainList = props.chainList
  return (
    <div className={styles.chainList}>
      <table>
        <thead>
          <th align="left">Network</th>
          <th align="left">Chain ID</th>
          <th align="left">Chain Handle</th>
        </thead>
        <tbody>
        {chainList.map(function(chain, i){
          return (
            <tr>
              <td align="left">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img style={{ paddingRight: '8px' }} src={chain.logo} width="30" />
                  <span>{chain.network}</span>
                </div>
              </td>
              <td align="left">{chain.chainId}</td>
              <td align="left">{chain.chainHandle}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default ChainList
