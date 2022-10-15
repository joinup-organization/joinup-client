import React from 'react'
import { BackContainer, BackItem, HeaderNavContainer, Title, BackText } from './HeaderNav.style'
import { chevronBack } from 'ionicons/icons'

interface IHeaderNav {
  readonly title: string
  readonly goBack: () => void
}

const HeaderNav: React.FC<IHeaderNav> = ({ title, goBack }) => {
  return (
    <HeaderNavContainer>
      <BackContainer onClick={goBack}>
        <BackItem icon={chevronBack}/>
        <BackText>Voltar</BackText>
      </BackContainer>
      <Title>{title}</Title>
    </HeaderNavContainer>
  )
}

export default HeaderNav
