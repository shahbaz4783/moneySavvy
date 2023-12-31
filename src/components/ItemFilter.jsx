export const ItemFilter = (props) => {
    const filterHandler = (e) => {
        props.onFilterChange(e.target.value);
    }
  return (
    <div className="filter-container">
        <label className="filter-label">Filter By Year</label>
        <select className="selectTab" value={props.selected} onChange={filterHandler}>
            <option value={'2023'}>2023</option>
            <option value={'2022'}>2022</option>
            <option value={'2021'}>2021</option>
            <option value={'2020'}>2020</option>
            <option value={'2019'}>2019</option>
        </select>
    </div>
  )
}
