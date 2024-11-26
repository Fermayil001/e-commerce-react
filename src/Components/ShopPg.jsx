import React from 'react'
import GridShop from './Shop page/Grid view/GridShop'
import RowLinks from './General-components/RowLinks'
import FilterRow from './Shop page/FilterRow'
import { useState } from 'react'
import ListShop from './Shop page/List view/ListShop'

const ShopPg = ({ products }) => {

    const rowData = 'Shop'

    const [isGrid, setIsGrid] = useState(true);

    const handleChangeView = (e) => {
        e.target.id === "isGrid" ? setIsGrid(true) : setIsGrid(false)
        //   setDisplayView(!displayView);
    }

    return (
        <>
            <RowLinks data={rowData} />
            <FilterRow handleChangeView={handleChangeView} />
            {/* <GridShop products={products} isGrid = {displayView}/> */}
            {isGrid ? <GridShop products={products} isGrid = {isGrid}/> : <ListShop products={products} isGrid = {isGrid}/>}

        </>
    )
}

export default ShopPg