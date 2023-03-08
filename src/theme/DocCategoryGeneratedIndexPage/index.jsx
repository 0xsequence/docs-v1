import React from 'react'
import {
  PageMetadata,
  useCurrentSidebarCategory,
} from '@docusaurus/theme-common'
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import useBaseUrl from '@docusaurus/useBaseUrl'
import DocCardList from '@theme/DocCardList'
import DocPaginator from '@theme/DocPaginator'
import DocVersionBanner from '@theme/DocVersionBanner'
import DocVersionBadge from '@theme/DocVersionBadge'
import DocBreadcrumbs from '@theme/DocBreadcrumbs'
import Heading from '@theme/Heading'

function DocCategoryGeneratedIndexPageMetadata({ categoryGeneratedIndex }) {
  return (
    <PageMetadata
      title={categoryGeneratedIndex.title}
      description={categoryGeneratedIndex.description}
      keywords={categoryGeneratedIndex.keywords}
      // TODO `require` this?
      image={useBaseUrl(categoryGeneratedIndex.image)}
    />
  )
}

function DocCategoryGeneratedIndexPageContent({ categoryGeneratedIndex }) {
  const category = useCurrentSidebarCategory()
  const mobileSidebar = useNavbarMobileSidebar()

  return (
    <div className="flex">
      <div className="w-full max-w-[850px] mx-auto">
        <DocVersionBanner />
        <DocBreadcrumbs />
        <DocVersionBadge />
        <header>
          <Heading
            as="h1"
            className="text-4xl dark:text-white-80 text-black-80"
          >
            {categoryGeneratedIndex.title}
          </Heading>
          {categoryGeneratedIndex.description && (
            <p className="text-sm">{categoryGeneratedIndex.description}</p>
          )}
        </header>
        <article className="margin-top--lg">
          <DocCardList items={category.items} className="mb-0" />
        </article>
        <footer className="margin-top--lg">
          <DocPaginator
            previous={categoryGeneratedIndex.navigation.previous}
            next={categoryGeneratedIndex.navigation.next}
          />
        </footer>
      </div>
      <div className="col col--3 mobile-nav:block hidden ml-2" />
    </div>
  )
}

export default function DocCategoryGeneratedIndexPage(props) {
  return (
    <>
      <DocCategoryGeneratedIndexPageMetadata {...props} />
      <DocCategoryGeneratedIndexPageContent {...props} />
    </>
  )
}
