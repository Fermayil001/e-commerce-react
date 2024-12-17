import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import AdminLayout from './AdminLayout';

const ProductManagement = () => {
   const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  /* useEffect(() => {
    axios.get('/api/UIProduct/AllProductUI')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []); */

  const handleAddProduct = () => {
    axios.post('/api/Product/AddProductWishImage', newProduct)
      .then(response => setProducts([...products, response.data]))
      .catch(error => console.error('Error adding product:', error));
  };

  return (
    // Admin panel'nin içine eklenecek
    // Product yönetimi tablosu
    <div className='main-width mx-auto'>
      <h1>Manage Products</h1>
      <TextField
        label="Product Name"
        value={newProduct.name}
        onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <TextField
        label="Product Price"
        type="number"
        value={newProduct.price}
        onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <Button onClick={handleAddProduct}>Add Product</Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {products.map(product => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary">
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
};

export default ProductManagement;



{/* <AdminLayout>
      <h1>Manage Products</h1>
      <TextField 
        label="Product Name" 
        value={newProduct.name} 
        onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} 
      />
      <TextField 
        label="Product Price" 
        type="number"
        value={newProduct.price} 
        onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} 
      />
      <Button onClick={handleAddProduct}>Add Product</Button>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminLayout> */}