import React from 'react'

const FilterRow = ( { handleChangeView } ) => {



  return (
    <div className='d-flex justify-content-end main-width mx-auto'>
      <button id='isGrid' className='btn' onClick={handleChangeView}>Grid</button>
      <button id='isList' className='btn' onClick={handleChangeView}>List</button>
    </div>
  )
}

export default FilterRow