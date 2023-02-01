import React from 'react'

export const SidebarIcon = ({ icon }) => {
  if (!icon?.dark || !icon?.light) return null

  return (
    <>
      <img src={icon.light} className="dark:hidden block mr-1" />
      <img src={icon.dark} className="dark:block hidden mr-1" />
    </>
  )
}
