import React from 'react'
import Link from '@docusaurus/Link'
import clsx from 'clsx'

export default function CardList({ items }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  )
}

function Card({ title, description, route }) {
  const rootElClassName = clsx(
    'block relative dark:bg-[rgba(255,255,255,0.05)] bg-[#EEEAE3] rounded-lg p-4 hover:no-underline group w-full',
    !!route && 'cursor-pointer'
  )

  const children = (
    <div className={clsx('text-sm', !!route && 'group-hover:opacity-50')}>
      <p className="dark:text-white-80 text-black-80 font-bold mb-0">{title}</p>
      <p className="dark:text-white-50 text-black-50 mb-0">{description}</p>
      {!!route && <img
        src="/img/icons/chevron.svg"
        className="dark:invert rotate-90 absolute top-4 right-3 opacity-80"
      />}
    </div>
  )

  if (!route) {
    return <div className={rootElClassName}>{children}</div>
  }

  return (
    <Link to={route} className={rootElClassName}>
      {children}
    </Link>
  )
}
