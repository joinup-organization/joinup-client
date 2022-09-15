import styled from 'styled-components'
import { Text } from '../../global.style'

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  padding: 1.5rem 0;
  position: relative;
`

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Description = styled(Text)`
  margin-top: 20px;
`

export const ViewMoreButton = styled.button``
