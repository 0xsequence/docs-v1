import React from 'react'
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import { translate } from '@docusaurus/Translate'

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar()
  return (
    <button
      type="button"
      aria-label={translate({
        id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
        message: 'Close navigation bar',
        description: 'The ARIA label for close button of mobile sidebar',
      })}
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}
    >
      <svg
        className="dark:fill-[#d9d9d9] fill-[#cac8b6]"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.992676"
          y="12.2979"
          width="16"
          height="1"
          transform="rotate(-45 0.992676 12.2979)"
        />
        <rect
          x="1.69971"
          y="0.984375"
          width="16"
          height="1"
          transform="rotate(45 1.69971 0.984375)"
        />
      </svg>
    </button>
  )
}

export default function NavbarMobileSidebarHeader() {
  return (
    <div className="navbar-sidebar__brand">
      {/* have to render both light and dark mode icons and hide with css because of useColorMode rehydration issues */}
      {/* https://github.com/facebook/docusaurus/issues/7986 */}
      <img
        className="dark:block hidden"
        src={`/img/icons/sequence-composite-dark.svg`}
      />
      <img
        className="dark:hidden block"
        src={`/img/icons/sequence-composite-light.svg`}
      />
      <CloseButton />
    </div>
  )
}
