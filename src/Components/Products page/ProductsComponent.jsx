import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/Api data/ProductsSlice';

function ProductsComponent() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.products);

  // API'den ürünleri çekmek için bir buton
  const fetchProducts = () => {
    dispatch(getAllProducts());
  };

  return (
    <div>
      <button onClick={fetchProducts}>Ürünleri Getir</button>
      
      {loading && <p>Yükleniyor...</p>}
      {error && <p>Hata: {error}</p>}
      
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsComponent;
