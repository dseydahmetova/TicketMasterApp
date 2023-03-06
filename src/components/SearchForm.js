function SearchForm({ event, setSearchQuery }) {

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleSearch(e) {
    let search = (e.target.value).toLowerCase()
    
    if (!search) return setSearchQuery(event)

    const eventResults = event.filter(eventItem => {
      const eventNameLower = eventItem.name.toLowerCase()
      const eventSegmentLower = eventItem.classifications[0].segment.name.toLowerCase()
      const eventGenreLower = eventItem.classifications[0].genre.name.toLowerCase()
      const eventsubGenreLower = eventItem.classifications[0].subGenre.name.toLowerCase()
      const eventCountryLower = eventItem._embedded.venues[0].state.name.toLowerCase()
      return eventNameLower.includes(search) || eventSegmentLower.includes(search) ||
        eventGenreLower.includes(search) || eventsubGenreLower.includes(search) || eventCountryLower.includes(search)
    })
    setSearchQuery(eventResults)
  }

  return (
    <nav className=" searchBar">
      <div className="container-fluid searchBox">
        <form onSubmit={handleSubmit} className="d-flex" role="search">
          <input type="text" onChange={handleSearch} required className="me-3 searchInput" name="focus" placeholder="Search by name, state, segment, genre" aria-label="Search" /> 
          <button className="close-icon" type="reset"></button>
          <button className="btn btn-outline search-button" type="submit"><i className="bi-search"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
      </div>
    </nav>
  )
}

export default SearchForm
