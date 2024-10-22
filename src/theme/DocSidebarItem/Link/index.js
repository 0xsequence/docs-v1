import React from 'react'
import clsx from 'clsx'
import { ThemeClassNames } from '@docusaurus/theme-common'
import { isActiveSidebarItem } from '@docusaurus/theme-common/internal'
import Link from '@docusaurus/Link'
import isInternalUrl from '@docusaurus/isInternalUrl'
import IconExternalLink from '@theme/Icon/ExternalLink'
import styles from './styles.module.css'

import { SidebarIcon } from '/src/components/SidebarIcon'

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const { href, label, className, autoAddBaseUrl, customProps = {} } = item
  const isActive = isActiveSidebarItem(item, activePath)
  const isInternalLink = isInternalUrl(href)

  console.log(label)

  return (
    <>
    {
      label != "Games SDK" && label != "Unity SDK" ?
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className
      )}
      key={label}
    >
      <Link
        className={clsx(
          'menu__link',
          !isInternalLink && styles.menuExternalLink,
          {
            'menu__link--active': isActive,
          }
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}
      >
        <SidebarIcon icon={customProps.icon} />
        {label}
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
      : null
    }
    </>
  )
}
