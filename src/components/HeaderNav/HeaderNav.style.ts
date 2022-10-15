import { IonIcon } from '@ionic/react'
import styled from 'styled-components'
import { Text } from '../../global.style'

export const Title = styled(Text)`
  font-weight: 600;
`

export const HeaderNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const BackContainer = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  gap: 5px;
  align-items: center;
`

export const BackItem = styled(IonIcon)`
  font-size: 30px;
  color: var(--ion-color-primary);
`

export const BackText = styled(Text)`
  color: var(--ion-color-primary);
`
