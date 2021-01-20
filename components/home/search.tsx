import Icon from 'components/templates/icon'

const SearchBar = () => {
  const onSubmit = (event: React.SyntheticEvent) => {
    event?.preventDefault()
    alert('Search haven\'t implemented')
  }

  return (
    <form className="sidebar-search" onSubmit={onSubmit}>
      <input type="text" name="search" placeholder="Search for articles and topics" />
      <button type="submit">
        <Icon title="search" size={16} />
      </button>
    </form>
  )
}

export default SearchBar
