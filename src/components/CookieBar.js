import React, { useState, useLayoutEffect } from 'react'
import clsx from 'clsx'
import Cookies from 'js-cookie'

const cookieName = 'skyweaver-docs-cookie-approval'
const ACCEPT = 'ACCEPT'
const REJECT = 'REJECT'
const cookieConfig = {
  expires: 365,
  path: '/',
  domain: '', // requires domain to be set client side
}

export function CookieBar() {
  const [shouldRender, setShouldRender] = useState(false)

  const rejectCookies = () => {
    Cookies.set(cookieName, REJECT, cookieConfig)
    setShouldRender(false)
  }

  const acceptCookies = () => {
    Cookies.set(cookieName, ACCEPT, cookieConfig)
    injectGAScripts()
    setShouldRender(false)
  }

  useLayoutEffect(() => {
    cookieConfig.domain = window.location.hostname
    const cookieState = Cookies.get(cookieName)

    // user has accepted cookies already
    if (cookieState === ACCEPT) {
      injectGAScripts()
      return
    }

    // user has neither accepted nor rejected cookies, so we should show the banner
    if (cookieState !== REJECT) {
      setShouldRender(true)
    }
  }, [])

  if (!shouldRender) return null

  return (
    <div
      className={clsx(
        'fixed z-50 bottom-0 left-0 w-screen px-6 py-10',
        'bg-[rgba(17,17,17,0.85)] border-t-[#222222]'
      )}
      style={{
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
      }}
    >
      <div className="mx-auto max-w-screen-lg text-white flex items-center md:flex-row flex-col">
        <p className="text-sm md:mb-0 mb-6 md:text-left text-center">
          Sequence uses cookies and similar technologies to provide you with
          personalized content, improve site performance, and conduct analytics.
          By using the Sequence website or other online services, you consent to
          the practices described in our{' '}
          <a href="/privacy" className="underline text-white hover:text-white">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/terms" className="underline text-white hover:text-white">
            Terms of Service
          </a>
          .
        </p>
        <div className="ml-6 flex items-center">
          <button
            className={clsx(
              'py-2 px-3 mr-4 border-0 ring-1 ring-inset ring-[rgba(255,255,255,0.15)]',
              'rounded-xl text-[14px] leading-[18px] text-white font-semibold'
            )}
            style={{ background: BUTTON_GRADIENT }}
            onClick={acceptCookies}
          >
            Accept
          </button>
          <button
            className={clsx(
              'py-2 px-3 mr-4 border-0 ring-1 ring-inset ring-[rgba(255,255,255,0.15)]',
              'bg-[#191919] rounded-xl text-[14px] leading-[18px] text-white font-semibold'
            )}
            onClick={rejectCookies}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  )
}

const GTAG_ID = 'G-B4F1CT9GP2'

const injectGAScripts = () => {
  const script = document.createElement('script')
  script.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`)
  script.onload = function () {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', `${GTAG_ID}`)
  }

  document.head.append(script)
}

const BUTTON_GRADIENT = `
    linear-gradient(10.93deg,
      #951990 -19.03%,
      #3a35b1 46.85%,
      #20a8b0 100%)
      padding-box,
    linear-gradient(12.93deg,
      rgb(221, 20, 213) 0%,
      rgb(78, 71, 245) 55%,
      rgb(61, 232, 243) 100%)`
