import axios from 'axios';
import React, { useState } from 'react'

const AddCategory = () => {

    const [newCategory, setNewCategory] = useState("")


    const token = localStorage.getItem('token');
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',  // multipart/form-data formatı ile veri gönderiyoruz
    };

   /*  const handleAdd = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('categoryName', newCategory);
        formData.append('categoryId', categoryId)

        try {
            const response = await axios.post('https://localhost:7269/api/Category/AddCategory', formData, { headers });
            console.log(response.data);  // API'den gelen yanıt
        } catch (error) {
            console.error('Error adding product:', error);
        }

    } */

        const handleAdd = async (e) => {
            const zero = 0;
        
            const payload = {   
                categoryName: newCategory,  
                categoryId: parseInt(zero),  
            };
        
            try {
                const response = await axios.post('https://localhost:7269/api/Category/AddCategory', payload, { headers });
                console.log(response.data);  
            } catch (error) {
                console.error('Kategori eklenirken hata oluştu:', error.response ? error.response.data : error.message);
            }
        };
        

    return (
        <div>
            <h4 className='mb-4'>Add New Category</h4>

            <form className='d-flex flex-column gap-4'>
                <input
                    className='p-2'
                    type="text"
                    placeholder="Category Name"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                />
                
                <button onClick={handleAdd} className='btn btn-primary' type="submit">Add Category</button>
            </form>
        </div>
    )
}

export default AddCategory