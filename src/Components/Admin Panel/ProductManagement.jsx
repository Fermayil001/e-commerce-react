import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import AddCategory from './Components/AddCategory';
import Autocomplete from '@mui/material/Autocomplete';
import './AdminPanel.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/Api-data/ProductsSlice';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import FileUpload from './Components/FileUpload';


const ProductManagement = () => {
 /*  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  }); */
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    TotalCount: '',
    Description: '',
    image: [],
    categoryId: 0
  });
  const [selectedCategory, setSelectedCategory] = useState(null); // Seçilen kategori

  const token = localStorage.getItem('token');


  // Dosya seçildiğinde state güncelleme
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);  // Birden fazla dosya seçilebilir
    setNewProduct({ ...newProduct, image: files });
  };

  // Kategori seçildiğinde CategoryId'yi güncelleme
  const handleCategoryChange = (e, newValue) => {

    if (newValue) {
      setSelectedCategory(newValue.categoryId); // categoryId'yi state'e kaydediyoruz
      setNewProduct({ ...newProduct, CategoryId: newValue.categoryId }); // newProduct'a CategoryId ekliyoruz
    }
    /* const { categoryId } = newValue
    setSelectedCategory(categoryId);
    setNewProduct({ ...newProduct, CategoryId: newValue?.categoryId }); */
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
    formData.append('Description', newProduct.Description); // Açıklama
    formData.append('Brand', newProduct.brand);

    // Birden fazla dosya varsa döngü ile ekliyoruz
    if (newProduct.image) {
      Array.from(newProduct.image).forEach((file) => {
        formData.append('ImageUI', file);  // Resim dosyasını ekliyoruz
      });
    }

    formData.append('CategoryId', newProduct.categoryId); // CategoryId

    try {
      const response = await axios.post('https://localhost:7269/api/Product/AddProductWishImage', formData, { headers });
      console.log(response.data);  // API'den gelen yanıt
      if (response.data) {
        // Successful Alert
        alert('Ürün başarıyla eklendi!');
        // reset inputs
        setNewProduct({ name: '', Brand: '', category: '', price: '', TotalCount: '', Description: '', image: [], categoryId: 0 });
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const categories = useSelector((state) => state.products.data);

  useEffect(() => {
    console.log(categories);  // Kategorilerin doğru geldiğini kontrol et
  }, [categories]);




  const categoriesStatus = useSelector((state) => state.products.status);
  const dis = useDispatch()

  useEffect(() => {
    if (token) {
      dis(getAllCategories(token)); // Kategorileri almak için Redux action'ını dispatch ediyoruz
    }
  }, [dis, token]);

  /* useEffect(() => {
    dis(getAllProducts())
    setCategories(categories)
  }, []) */

  /*  console.log(categoryName)
 
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
       console.log(categoryList)
       setCategories(categoryList);
     } catch (error) {
       console.error('Error fetching categories:', error);
     }
   }
 
 
   useEffect(() => {
     dataFetch();
   }, [selectedCategory]) */



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


        {categoriesStatus === 'loading' ? (
          <p>Loading categories...</p>
        ) : categoriesStatus === 'failed' ? (
          <p>Error loading categories</p>
        ) : (
          <Autocomplete
            disablePortal
            options={categories} // Kategorileri options olarak kullanıyoruz
            getOptionLabel={(option) => option.categoryName} // Kategorinin adını gösteriyoruz
            value={categories.find(category => category.categoryId === selectedCategory) || null} // Seçilen kategori
            onChange={handleCategoryChange} // Seçilen kategori id'sini state'e kaydediyoruz
            renderInput={(params) => <TextField {...params} label="Category" />}
          />
        )}


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
        {/* <InputGroup className="mb-3">
          <Button
            id="button-addon1"
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
          />
        </InputGroup> */}
        <FileUpload/>
        <Button onClick={handleAddProduct}>Add Product</Button>
      </div>
    </div>
  );
};

export default ProductManagement;
