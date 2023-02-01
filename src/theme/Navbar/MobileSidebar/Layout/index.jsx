import React from 'react'
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common'
import Link from '@docusaurus/Link'
import ColorModeToggle from '@site/src/theme/ColorModeToggle'

function useNavbarItems() {
  return useThemeConfig().navbar.items
}

export default function NavbarMobileSidebarLayout({ header, secondaryMenu }) {
  const { colorMode, setColorMode } = useColorMode()
  const items = useNavbarItems()

  return (
    <div className="navbar-sidebar overflow-hidden flex flex-col">
      <div className="shrink-0">{header}</div>
      <div className="flex-1 overflow-y-scroll">
        <div className="navbar-sidebar__item menu">{secondaryMenu}</div>
      </div>
      <div className="w-full py-6 px-4 flex items-center justify-between shrink-0 border-t dark:border-[#222222] border-[#e3e1cf]">
        <div className="flex items-center gap-x-4">
          {items.map((item, index) => {
            const className = 'flex items-center hover:opacity-50'
            const children = (
              <>
                {/* have to render both light and dark mode icons and hide with css because of useColorMode rehydration issues */}
                {/* https://github.com/facebook/docusaurus/issues/7986 */}
                <img
                  className="dark:block hidden"
                  alt={`${item.label} logo`}
                  src={`/img/icons/${item.label}-icon-dark.svg`}
                />
                <img
                  className="dark:hidden block"
                  alt={`${item.label} logo`}
                  src={`/img/icons/${item.label}-icon-light.svg`}
                />
              </>
            )

            if (item.href.startsWith('/')) {
              return (
                <Link key={index} className={className} href={item.href}>
                  {children}
                </Link>
              )
            }

            return (
              <a
                key={index}
                className={className}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            )
          })}
        </div>
        <ColorModeToggle value={colorMode} onChange={setColorMode} />
      </div>
    </div>
  )
}
