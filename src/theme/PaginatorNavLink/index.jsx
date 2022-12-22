import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'

export default function PaginatorNavLink(props) {
  const { permalink, title, subLabel, isNext } = props
  return (
    <Link
      className={clsx(
        'hover:no-underline group rounded-lg border border-solid p-4',
        'dark:border-[rgba(255,255,255,0.5)] border-[rgba(0,0,0,0.5)]'
      )}
      to={permalink}
    >
      <div
        className={clsx(
          'flex flex-col group-hover:opacity-50',
          isNext ? 'items-end' : 'items-start'
        )}
      >
        {subLabel && (
          <div className="dark:text-white-50 text-black-50 text-sm font-normal">
            {subLabel}
          </div>
        )}
        <div className="dark:text-white-80 text-black-80 text-sm font-bold mb-1">
          {title}
        </div>
      </div>
    </Link>
  )
}
