import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    font-family: "Segoe UI", Arial, sans-serif;
    margin: 0;
    padding: 0;
    color: black;
}

  body {
    color: white;
    background-color: white;
  }
`

export const MainTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
`

export const SubTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;

`
export const TerciaryText = styled.h3`
    font-size: 1.2rem;
    font-weight: 400;
    color: #616161;
    margin: 0;
`

export const Text = styled.p`
    font-size: 1rem;
    font-weight: 400;
`
