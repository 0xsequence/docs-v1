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
      <img src="/img/icons/close-icon.svg" />
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
