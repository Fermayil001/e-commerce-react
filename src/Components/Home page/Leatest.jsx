import React, { useState } from 'react';

const Leatest = ({ product }) => {
  // Filtreleme işlemi için seçilen filtreyi tutuyoruz
  const [selectedFilter, setSelectedFilter] = useState('newArrival');

  // Filtreye tıklanıldığında aktif filtreyi ayarlamak
  const handleFilterClick = (filterType) => {
    setSelectedFilter(filterType);
  };

  // Filtreye göre ürün detaylarını almak için fonksiyon
  const getProductDetails = (filterType) => {
    return product.map((product) => {
      let updatedProduct = { ...product };

      switch (filterType) {
        case 'bestSeller':
          updatedProduct.img = product.img[0].color1;
          break;
        case 'featured':
          updatedProduct.img = product.img[0].color2;
          break;
        case 'specialOffer':
          updatedProduct.img = product.img[0].default;
          break;
        default:
          updatedProduct.img = product.img[0].default;
          break;
      }

      return updatedProduct;
    });
  };

 
  const filteredProducts = getProductDetails(selectedFilter);

  
  const displayedProducts = filteredProducts.slice(0, 6);

  return (
    <section className="leatest-products">
      <div className="main-width mx-auto">
        <h3 className="mt-5 fw-700 text-center" style={{ color: '#151875' }}>
          Leatest Products
        </h3>
        <div className="filter-bar mt-2">
          <ul
            id="leatest-filter"
            className="text-center d-flex mx-auto p-0 justify-content-around"
            style={{ width: '50%' }}
          >
            <li
              className={`newArrival ${selectedFilter === 'newArrival' ? 'active' : ''}`}
              onClick={() => handleFilterClick('newArrival')}
            >
              New Arrival
            </li>
            <li
              className={`bestSeller ${selectedFilter === 'bestSeller' ? 'active' : ''}`}
              onClick={() => handleFilterClick('bestSeller')}
            >
              Bes seller
            </li>
            <li
              className={`featured ${selectedFilter === 'featured' ? 'active' : ''}`}
              onClick={() => handleFilterClick('featured')}
            >
              Featured
            </li>
            <li
              className={`specialOffer ${selectedFilter === 'specialOffer' ? 'active' : ''}`}
              onClick={() => handleFilterClick('specialOffer')}
            >
              Special Offer
            </li>
          </ul>
        </div>
        <div className="container mx-auto mt-5">
          <div className="row justify-content-between g-2">
            {displayedProducts.map((product, index) => (
              <div key={index} className="col-12 col-md-4 mb-5 p-0">
                <div className="card border-none leatest-container align-items-center">
                  <img
                    src={product.img}
                    className="card-img-top leatest-card"
                    alt={product.name}
                  />
                  <div className="card-body d-flex container-fluid justify-content-between p-0 align-items-baseline">
                    <h5 className="card-title fs-14">{product.name}</h5>
                    <p className="card-text fs-14 letaest-discount">
                      <span className="leatest-price">{product.discount}</span>{' '}
                      <span style={{ textDecoration: 'line-through', color: 'red' }}>
                        {product.price}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leatest;
