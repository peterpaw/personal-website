import Head from 'next/head'
import styled from 'styled-components'

const FirstName = styled.h1`
  text-transform: uppercase;
  font-size: 1.5rem;
`

const LastName = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 2rem;
`

const Occupation = styled.h2`
  border-top: 1px solid #fff;
  line-height: 1.2;
`

const Header = styled.div`
  font-size: 2rem;
  text-align: right;
  text-transform: uppercase;
  padding: 0 1rem;
  h1,
  h2 {
    font-weight: 100;
  }

  h1 {
    line-height: 1;
  }

  p {
    font-weight: 100;
    text-transform: none;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 600px) {
    font-size: 3rem;
  }
`

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 4px;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Peter Pawelczyk - Web Entwickler</title>
      </Head>
      <Wrapper>
        <Header>
          <FirstName>Peter</FirstName>
          <LastName>Pawelczyk</LastName>
          <Occupation>Web Entwickler</Occupation>
          <p>info@peterpaw.de</p>
        </Header>
      </Wrapper>
    </>
  )
}
