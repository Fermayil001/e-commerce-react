import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import AddCategory from './Components/AddCategory';
import Autocomplete from '@mui/material/Autocomplete';
import './AdminPanel.css'

const ProductManagement = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    TotalCount: '',
    image: null,
    CategoryId: 0
  });
  const [categories, setCategories] = useState([]); // Kategorileri saklayacağımız state
  const [selectedCategory, setSelectedCategory] = useState(null); // Seçilen kategori


  const token = localStorage.getItem('token');


  // Dosya seçildiğinde state güncelleme
  const handleFileChange = (e) => {
    const files = e.target.files;  // Birden fazla dosya seçilebilir
    setNewProduct({ ...newProduct, image: files });
  };

  // Kategori seçildiğinde CategoryId'yi güncelleme
  const handleCategoryChange = (e, newValue) => {
    setSelectedCategory(newValue);
    setNewProduct({ ...newProduct, CategoryId: newValue?.id || 0 });
  };


  // Form verilerini ve dosyayı API'ye gönderme
  const handleAddProduct = async () => {
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',  // multipart/form-data formatı ile veri gönderiyoruz
    };

    if (!newProduct.image) {
      alert('Lütfen bir resim dosyası seçin!');
      return;
    }

    const formData = new FormData();
    formData.append('ProductName', newProduct.name);
    formData.append('Price', newProduct.price);
    formData.append('TotalCount', newProduct.TotalCount);
    formData.append('Description', newProduct.description); // Açıklama
    formData.append('Brand', newProduct.brand);

    // Birden fazla dosya varsa döngü ile ekliyoruz
    if (newProduct.image) {
      Array.from(newProduct.image).forEach((file) => {
        formData.append('ImageUI', file);  // Resim dosyasını ekliyoruz
      });
    }

    formData.append('CategoryId', newProduct.CategoryId); // CategoryId

    try {
      const response = await axios.post('https://localhost:7269/api/Product/AddProductWishImage', formData, { headers });
      console.log(response.data);  // API'den gelen yanıt
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };


  const dataFetch = async () => {
    const headers = {
      'Authorization': `Bearer ${token}`,
    };

    try {
      const response = await axios.get('https://localhost:7269/api/Category/GetAllCategory', { headers });
      // Kategorileri response'dan alıp state'e set ediyoruz
      const categoryList = response.data.map((category) => ({
        label: category.categoryName,  // Kategori adı
        id: category.categoryId, // Kategorinin id'si (isteğe bağlı olarak)
      }));
      setCategories(categoryList);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }


  useEffect(() => {
    dataFetch();
  }, [selectedCategory])



  return (
    <div className="main-width mx-auto d-flex flex-column gap-5">
      <h1>Manage Products</h1>

      <AddCategory />
      <h4>Add new product</h4>
      <div className="sssaaa d-flex flex-column gap-5">
        <TextField
          label="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <TextField
          label="Product Price"
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />


        <Autocomplete
          disablePortal
          options={categories} // Kategorileri options olarak kullanıyoruz
          getOptionLabel={(option) => option.label} // Kategorilerin adlarını gösteriyoruz
          value={selectedCategory} // Seçilen kategori
          onChange={handleCategoryChange} // Seçilen kategori id'sini state'e kaydediyoruz
          renderInput={(params) => <TextField {...params} label="Category" />}
        />


        <TextField
          label="Total Count"
          type='number'
          value={newProduct.TotalCount}
          onChange={(e) => setNewProduct({ ...newProduct, TotalCount: e.target.value })}
        />
        <TextField
          label="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          
        />
        <TextField
          label="Brand"
          value={newProduct.brand}
          onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
        />
        <input
          type="file"
          multiple // Birden fazla dosya seçilebilmesi için
          onChange={handleFileChange}
        />
        <Button onClick={handleAddProduct}>Add Product</Button>
      </div>
    </div>
  );
};

export default ProductManagement;
