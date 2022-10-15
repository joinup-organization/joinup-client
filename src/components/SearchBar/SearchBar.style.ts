import styled from 'styled-components'
import ReactSearchBox from 'react-search-box'

export const SearchBarContainer = styled.div`   
    width: 100%;
    position: relative;
`

export const SearchBox = styled(ReactSearchBox)`
    width: 100%;
    border-radius: 5px 0 0 5px;
    padding-right: 30px;
`

export const SearchButton = styled.button`
    border-radius: 0 5px 5px 0;
    background: ${'var(--ion-color-primary)'};
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
`
