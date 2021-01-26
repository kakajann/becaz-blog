import { useState } from 'react'
import { setSearchQuery } from 'lib/redux/actions/blogs'
import { ReduxRootState } from 'lib/types/redux'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Icon from 'components/templates/icon'

interface P {
  searchQuery: string
  dispatchSetSearchQuery: (query: string) => void
}

const SearchBar = ({ searchQuery, dispatchSetSearchQuery }: P) => {
  const [value, setValue] = useState(searchQuery)

  const onSubmit = (event: React.FormEvent) => {
    event?.preventDefault()
    dispatchSetSearchQuery(value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  return (
    <form className="sidebar-search" onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        value={value}
        onChange={handleChange}
        placeholder="Search for articles and topics"
      />
      <button type="submit">
        <Icon title="search" size={16} />
      </button>
    </form>
  )
}

const mapState = ({ blogs }: ReduxRootState) => ({
  searchQuery: blogs.searchQuery,
})

const mapDispatch = (dispatch: Dispatch) => ({
  dispatchSetSearchQuery: (query: string) => dispatch(setSearchQuery(query)),
})

export default connect(mapState, mapDispatch)(SearchBar)
