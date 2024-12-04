import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [productData, setProductData] = useState([]);
/* Yoxlama */
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

  return (
    <div>
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
    </div>
  );


}

export default Admin