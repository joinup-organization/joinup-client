import React, { useState } from 'react'
import { ISearchSuggestion } from './SearchBar.model'
import { SearchBarContainer, SearchBox } from './SearchBar.style'

const SearchBarComponent = ({
  placeHolder,
  searchSuggestions
}: {
  placeHolder: string
  searchSuggestions: ISearchSuggestion[]
}) => {
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <SearchBarContainer>
      <SearchBox
        placeholder={placeHolder}
        data={searchSuggestions}
        type="text"
        onSelect={(record) => console.log(record)}
        onChange={(value: string) => setSearchValue(value)}
        clearOnSelect={true}
      />
      <button onClick={() => console.log(searchValue)}>Search</button>
    </SearchBarContainer>
  )
}

export default SearchBarComponent
