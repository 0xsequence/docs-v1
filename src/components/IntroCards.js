import React from 'react'
import Link from '@docusaurus/Link'

const ITEMS = [
  {
    route: '/wallet',
    title: 'What is Sequence',
    description: 'Learn more about the Sequence web3 stack and smart wallet',
    icon: 'wallet-icon',
  },
  {
    route: '/multi-chain-support',
    title: 'Multi-Chain Support',
    description: 'Find out which chains are supported by the web3 stack',
    icon: 'multi-chain-icon',
  },
  {
    route: '/intro/gas',
    title: 'Gas Superpowers',
    description: 'Learn how to minimize, bundle, and remove gas fees for your users',
    icon: 'gas-icon',
  },
  {
    route: '/support',
    title: 'Support',
    description: 'Get awesome support from our experienced web3 team.',
    icon: 'faq-icon',
  },
]

export default function IntroCards() {
  return (
    <div>
      <div className="flex sm:flex-row flex-col gap-2 mb-2">
        {[ITEMS[0], ITEMS[1]].map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
      <div className="flex sm:flex-row flex-col gap-2">
        {[ITEMS[2], ITEMS[3]].map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </div>
  )
}

function Card({ title, description, route, icon }) {
  return (
    <Link to={route} className="flex-1 dark:bg-[rgba(255,255,255,0.05)] bg-[#EEEAE3] rounded-lg p-4 pb-3 hover:no-underline group cursor-pointer">
      <div className="text-sm group-hover:opacity-50">
        <p className="dark:text-white-80 text-black-80 font-bold mb-0">{title}</p>
        <p className="dark:text-white-50 text-black-50 sm:mb-8 mb-4">{description}</p>
        <img className="dark:block hidden" src={`/img/icons/${icon}-dark.svg`} />
        <img className="dark:hidden block" src={`/img/icons/${icon}-light.svg`} />
      </div>
    </Link>
  )
}
