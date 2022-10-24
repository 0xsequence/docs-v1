import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import styled from '@emotion/styled'

import useBaseUrl from '@docusaurus/useBaseUrl'

import SearchBar from '@theme-original/SearchBar'

const actions = [
  {
    title: 'What is Sequence',
    href: '#',
    to: './intro/overview',
    text: `Learn more about the Sequence developer platform and smart wallet`,
  },
  {
    title: 'Multichain support',
    href: '#',
    to: '/multi-chain-support',
    text: `Find out which chains are supported by the developer platform`,
  },
  {
    title: 'Gas fees',
    href: '#',
    to: '/intro/gas',
    text: `Learn how to minimize, bundle, and remove gas fees for your users`,
  },
]

const github = [
  {
    title: 'Wallet',
    href: '/wallet',
  },
  {
    title: 'Indexer',
    href: '/indexer',
  },
  {
    title: 'Metadata',
    href: 'metadata',
  },
  {
    title: 'Relayer',
    href: '/relayer',
  },
]

const Guides = [
  {
    title: 'Quickstart',
    text: 'Get started building using the JavaScript SDK',
    to: '/quickstart',
  },
  {
    title: 'Connect wallet',
    text: 'Integrate the smart contract wallet into your app',
    to: '/wallet/guides/connect-wallet',
  },
  {
    title: 'Verifying messages',
    text: 'Signing transactions',
    to: '/wallet/guides/sign-message',
  },
  {
    title: 'Send an ERC-20 token',
    text: 'Learn about transfers on Sequence',
    to: '/wallet/guides/send-erc20',
  },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 960px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    max-width: 100%;
    margin: 0 1rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const TwoRow = styled(Row)`
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  display: flex;
  max-height: 250px;
  min-width: 350px;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 20px;
  border: 1px solid var(--ifm-color-emphasis-200);
  /* flex: 1 1 0px; */

  &:hover {
    border: 1px solid var(--ifm-color-emphasis-400);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`

const CenterCard = styled(Card)`
  min-width: 250px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 24px;

  h3 {
    margin-bottom: 0.25rem;
  }

  p {
    margin-bottom: 0px;
  }
`

const ShadowCard = styled(Card)`
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff10;
  backdrop-filter: blur(10px);
  min-height: 200px;
`

const WideCard = styled(ShadowCard)`
  max-height: auto;

  @media (max-width: 960px) {
    margin: 0 2rem;
    max-height: fit-content;
    width: fit-content;
  }
`


const TopSection = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`

const LinkRow = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  a h3 {
    color: black;
  }
`

const DocsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
`

const HideMedium = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`

export default function Home() {
  return (
    <Layout title={`Sequence Docs`} description="Technical Documentation For Sequence">
      <Container>
        <DocsHeader>
          <div
            style={{
              padding: '4rem 0  ',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1 style={{ fontWeight: '600' }}> Welcome to the Sequence Docs</h1>
            <HideMedium>
              <SearchBar />{' '}
            </HideMedium>
          </div>
         
          <Row>
            {actions.map((action) => (
              <Link style={{ textDecoration: 'none' }} to={action.to}>
                <ShadowCard key={action.title}>
                  <TopSection>

                    <svg
                      style={{ width: '24px', opacity:0.9 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </TopSection>
                  <h3 style={{ marginBottom: '.75rem', color: action.color }}>{action.title}</h3>
                  <p style={{ marginBottom: '0.5rem' }}>{action.text}</p>
                </ShadowCard>
              </Link>
            ))}
          </Row>
        </DocsHeader>

        <TwoRow
          style={{
            gap: '56px',
            marginTop: '4rem',
          }}
        >
          <div>
            <h2>Getting started</h2>
            <p>
              Explore these guides to start building using the SDK
            </p>
            <div>
              {Guides.map((action) => (
                <Link style={{ textDecoration: 'none' }} key={action.title} to={action.to}>
                  <Card key={action.title} style={{ marginBottom: '1rem' }}>
                    <LinkRow>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3 style={{ marginBottom: '0rem' }}>{action.title}</h3>
                      </div>
                      <svg
                        style={{ width: '24px', opacity: 0.2 }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                      </svg>
                    </LinkRow>
                    <p style={{ marginBottom: '0rem' }}>{action.text}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2>The Sequence Stack</h2>
            <p>Sequence is comprised of a series of modules for developers</p>
            {github.map((action) => (
              <Link style={{ textDecoration: 'none' }} href={action.href}>
                <Card key={action.title} style={{ marginBottom: '1rem' }}>
                  <LinkRow style={{ display: 'flex', alignItems: 'center' }}>
                   
                    
                      <h3 style={{ marginBottom: '0rem', marginLeft: '16px' }}>{action.title}</h3>
                   
                    <svg
                      style={{ width: '24px', height: '24px', opacity: 0.2 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </LinkRow>
                </Card>
              </Link>
            ))}
          </div>
        </TwoRow>

        <hr />
       
        <Link
          style={{
            textDecoration: 'none',
            maxWidth: '960px',
            margin: '0 auto 4rem auto',
            width: '100%',
          }}
          href={'/support'}
        >
          <WideCard
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '24px',
            }}
          >
           
            <div>
              <h2 style={{ marginBottom: '0.5rem' }}>Talk to us</h2>
              <p style={{ margin: '0rem' }}>
                We want to help you build your web3 project or game. Please contact our team for assistance or partnership enquiries.{' '}
              </p>
            </div>
          </WideCard>
        </Link>
      </Container>
    </Layout>
  )
}