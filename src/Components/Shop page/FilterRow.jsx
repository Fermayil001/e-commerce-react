import React from 'react'
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import './FilterRow.css'

const FilterRow = ({ handleChangeView }) => {



  return (
    <div className='filter-row d-flex justify-content-between main-width mx-auto my-5'>
      <div className="filter-row-title">
        <h3>Ecommerce Acceories & Fashion item </h3>
        <span>About 9,620 results (0.62 seconds)</span>  {/* Must be dynamic */}
      </div>
      <ul className='d-flex'>
        <li>
          <label htmlFor="">Per Page: </label>
          <input type="text" />
        </li>
        <li>
          <label htmlFor="">Sort by:</label>
          <Dropdown>
            <MenuButton size='sm' >Best Match ^</MenuButton>
            <Menu>
              <MenuItem>X</MenuItem>
              <MenuItem>xx</MenuItem>
              <MenuItem>xxx</MenuItem>
            </Menu>
          </Dropdown>
        </li>
        <li style={{gap: '10px'}}>
          <span>View: </span>
          <button className='border-none' ><i id='isGrid' onClick={handleChangeView} className="bi bi-grid-fill"></i></button>
          <button className='border-none' ><i id='isList' onClick={handleChangeView} className="bi bi-list-ul"></i></button>
        </li>
        <li>
          <input type="text" />
        </li>
      </ul>

    </div>
  )
}

export default FilterRow