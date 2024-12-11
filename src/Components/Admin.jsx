import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* import Dashboard from './Admin Panel/Dashboard';
import ProductManagement from './Admin Panel/ProductManagement';
import OrderManagement from './Admin Panel/OrderManagement';
import AdminLayout from './Admin Panel/AdminLayout'; */
const Admin = () => {


    return (
        <>
        <h3>Admin</h3>
        </>


    );
}

export default Admin



{/* <Route path='dashboard' element= {<Dashboard/>}/>
                <Route path='productsmanagement' element={<ProductManagement/>}/> 
                <Route path='ordermanagement' element={<OrderManagement/>}/> */}



/* 
    const [productData, setProductData] = useState([]);
  useEffect(() => {
    axios
      .post("https://localhost:7269/api/UIProduct/AllProductUI")
      .then((response) => {
        const images = response.data.$values.map((product) => {
          // Eğer ürünün resimleri varsa, resimleri al
          if (product.ProductImage && product.ProductImage.$values) {
            return product.ProductImage.$values.map((image) => image.ImageUrl);
          }
          return [];
        }).flat();
        setProductData(images);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
*/



/* <div>
      <h1>Product Images</h1>
      <div>
        {productData.length === 0 ? (
          <p>No images found.</p>
        ) : (
          productData.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Product ${index}`} />
            </div>
          ))
        )}
      </div>
    </div> */