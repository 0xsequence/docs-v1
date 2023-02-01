import React from 'react'
import clsx from 'clsx'
import {
  useSidebarBreadcrumbs,
  useHomePageRoute,
} from '@docusaurus/theme-common/internal'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { translate } from '@docusaurus/Translate'

// TODO move to design system folder
function BreadcrumbsItemLink({ children, href, isLast }) {
  const className = clsx(
    'font-inter font-normal text-sm',
    isLast
      ? 'dark:text-white-80 text-black-80'
      : 'dark:text-white-50 text-black-50'
  )

  if (isLast) {
    return (
      <span className={className} itemProp="name">
        {children}
      </span>
    )
  }
  return href ? (
    <Link
      className={clsx(
        className,
        'dark:hover:text-white-80 hover:text-black-80',
        'hover:no-underline transition-none'
      )}
      href={href}
      itemProp="item"
    >
      <span itemProp="name">{children}</span>
    </Link>
  ) : (
    // TODO Google search console doesn't like breadcrumb items without href.
    // The schema doesn't seem to require `id` for each `item`, although Google
    // insist to infer one, even if it's invalid. Removing `itemProp="item
    // name"` for now, since I don't know how to properly fix it.
    // See https://github.com/facebook/docusaurus/issues/7241
    <span className={className}>{children}</span>
  )
}

// TODO move to design system folder
function BreadcrumbsItem({ children, active, index, addMicrodata }) {
  return (
    <li
      {...(addMicrodata && {
        itemScope: true,
        itemProp: 'itemListElement',
        itemType: 'https://schema.org/ListItem',
      })}
      className={
        !active
          ? "after:content-['>'] after:w-10 after:h-10 after:text-black-50 dark:after:text-white-50 after:mx-2"
          : ''
      }
    >
      {children}
      <meta itemProp="position" content={String(index + 1)} />
    </li>
  )
}

function HomeBreadcrumbItem() {
  const homeHref = useBaseUrl('/')
  return (
    <li className="after:content-['>'] after:w-10 after:h-10 after:text-black-50 dark:after:text-white-50 after:mx-2">
      <Link
        aria-label={translate({
          id: 'theme.docs.breadcrumbs.home',
          message: 'Home page',
          description: 'The ARIA label for the home page in the breadcrumbs',
        })}
        className="hover:no-underline"
        href={homeHref}
      >
        <span className="font-inter font-normal dark:text-white-50 text-black-50 dark:hover:text-white-80 hover:text-black-80">
          ⌂
        </span>
      </Link>
    </li>
  )
}

export default function DocBreadcrumbs() {
  const breadcrumbs = useSidebarBreadcrumbs()
  const homePageRoute = useHomePageRoute()

  if (!breadcrumbs) {
    return null
  }

  return (
    <nav
      aria-label={translate({
        id: 'theme.docs.breadcrumbs.navAriaLabel',
        message: 'Breadcrumbs',
        description: 'The ARIA label for the breadcrumbs',
      })}
    >
      <ul
        className="list-none flex flex-wrap p-0"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {homePageRoute && <HomeBreadcrumbItem />}
        {breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1
          return (
            <BreadcrumbsItem
              key={idx}
              active={isLast}
              index={idx}
              addMicrodata={!!item.href}
            >
              <BreadcrumbsItemLink href={item.href} isLast={isLast}>
                {item.label}
              </BreadcrumbsItemLink>
            </BreadcrumbsItem>
          )
        })}
      </ul>
    </nav>
  )
}
