import React from 'react'
import GridShop from './Shop page/Grid view/GridShop'
import RowLinks from './General-components/RowLinks'
import FilterRow from './Shop page/FilterRow'
import { useState } from 'react'
import ListShop from './Shop page/List view/ListShop'
import Footer from './Home page/Footer'

const ShopPg = ({ products }) => {

    const rowData = 'Shop'

    const [isGrid, setIsGrid] = useState(true);

    const handleChangeView = (e) => {
        e.target.id === "isGrid" ? setIsGrid(true) : setIsGrid(false)
    }

    return (
        <>
            <RowLinks data={rowData} />
            <FilterRow handleChangeView={handleChangeView} />
            {isGrid ? <GridShop products={products} isGrid = {isGrid}/> : <ListShop products={products} isGrid = {isGrid}/>}
            <Footer/>
        </>
    )
}

export default ShopPg