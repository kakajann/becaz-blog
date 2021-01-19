import Icon from 'components/templates/icon'

const SearchBar = () => (
  <form className="sidebar-search">
    <input type="text" name="search" placeholder="Search for articles and topics" />
    <button type="submit">
      <Icon title="search" size={16} />
    </button>
  </form>
)

export default SearchBar
