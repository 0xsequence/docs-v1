import React from 'react'
import useIsBrowser from '@docusaurus/useIsBrowser'
import { translate } from '@docusaurus/Translate'
import clsx from 'clsx'

function ColorModeToggle({ value, onChange, className }) {
  const isBrowser = useIsBrowser()

  const title = translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the navbar color mode toggle',
    },
    {
      mode:
        value === 'dark'
          ? translate({
              message: 'dark mode',
              id: 'theme.colorToggle.ariaLabel.mode.dark',
              description: 'The name for the dark color mode',
            })
          : translate({
              message: 'light mode',
              id: 'theme.colorToggle.ariaLabel.mode.light',
              description: 'The name for the light color mode',
            }),
    }
  )

  return (
    <button
      onClick={() => onChange(value === 'dark' ? 'light' : 'dark')}
      disabled={!isBrowser}
      title={title}
      aria-label={title}
      aria-live="polite"
      className={clsx(
        'border-0 bg-transparent cursor-pointer p-0 hover:opacity-50 flex items-center',
        className
      )}
    >
      <img src="/img/icons/light-mode-icon.svg" className="dark:hidden block" />
      <img src="/img/icons/dark-mode-icon.svg" className="dark:block hidden" />
    </button>
  )
}

export default React.memo(ColorModeToggle)
