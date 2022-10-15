import styled from 'styled-components'
import ReactSearchBox from 'react-search-box'

export const SearchBarContainer = styled.div`
    display: flex;  
    width: 100%;
    gap: 2px;
`

export const SearchBox = styled(ReactSearchBox)`
    flex-grow: 1;
    width: 100%;
    border: 1px solid red;
`
