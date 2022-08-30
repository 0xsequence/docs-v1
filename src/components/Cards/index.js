import React from 'react'
import Link from '@docusaurus/Link'

function Cards(props) {
  const cards = props.cards
  return (
    <div className="container" style={{ padding: 5 }}>
      <div className="row is-multiline">
        {cards.map((item, id) => (
          <div className="col col--6" key={id} style={{ padding: 5 }}>
            <Link className="card" to={item.route} style={{ height: '100%', textAlign: 'center' }}>
              <div className="card__body">
                <h4 >{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
