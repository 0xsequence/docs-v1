import React from 'react'
import Link from '@docusaurus/Link'
import {
  findFirstCategoryLink,
  useDocById,
} from '@docusaurus/theme-common/internal'
import { translate } from '@docusaurus/Translate'

function CardContainer({ href, children }) {
  return (
    <Link
      href={href}
      className="block dark:bg-[rgba(255,255,255,0.05)] bg-white rounded-lg p-4 hover:no-underline group h-full"
    >
      {children}
    </Link>
  )
}

function CardLayout({ href, title, description }) {
  return (
    <CardContainer href={href}>
      <div className="group-hover:opacity-50">
        <h2
          className="font-inter font-bold text-sm dark:text-white-80 text-black-80 mb-0"
          title={title}
        >
          {title}
        </h2>
        {description && (
          <p
            className="font-inter font-medium text-sm dark:text-white-50 text-black-50"
            title={description}
          >
            {description}
          </p>
        )}
      </div>
    </CardContainer>
  )
}

function CardCategory({ item }) {
  const href = findFirstCategoryLink(item)

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null
  }

  return (
    <CardLayout
      href={href}
      title={item.label}
      description={translate(
        {
          message: '{count} items',
          id: 'theme.docs.DocCard.categoryDescription',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        { count: item.items.length }
      )}
    />
  )
}

function CardLink({ item }) {
  const doc = useDocById(item.docId ?? undefined)
  return (
    <CardLayout
      href={item.href}
      title={item.label}
      description={doc?.description}
    />
  )
}

export default function DocCard({ item }) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />
    case 'category':
      return <CardCategory item={item} />
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`)
  }
}
