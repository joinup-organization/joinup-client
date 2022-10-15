import { IonIcon } from '@ionic/react'
import React, { useState } from 'react'
import { SearchBarContainer, SearchBox, SearchButton } from './SearchBar.style'
import { searchOutline } from 'ionicons/icons'

const SearchBarComponent = ({
  placeHolder
}: {
  placeHolder: string
}) => {
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <SearchBarContainer>
      <SearchBox
        placeholder={placeHolder}
        data={[]}
        type="text"
        onSelect={(record: any) => console.log(record)}
        onChange={(value: string) => setSearchValue(value)}
        clearOnSelect={true}
      />
      <SearchButton onClick={() => console.log(searchValue)}>
        <IonIcon color='light' icon={searchOutline}/>
      </SearchButton>
    </SearchBarContainer>
  )
}

export default SearchBarComponent
