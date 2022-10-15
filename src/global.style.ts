import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'SF Pro Display', sans-serif;
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
    font-size: 34px;
    font-weight: bold;
    color: ${(props) => props.color ?? 'black'};
    margin: 0;
`

export const SubTitle = styled.h2`
    font-size: 28px;
    font-weight: 500;
    color: ${(props) => props.color ?? 'black'};
    margin: 0;
`
export const TerciaryText = styled.h3`
    font-size: 22px;
    font-weight: 400;
    color: ${(props) => props.color ?? '#4A4A4A'};
    margin: 0;
`

export const Text = styled.p`
    font-size: 17px;
    font-weight: 400;
    color: ${(props) => props.color ?? 'black'};
`
