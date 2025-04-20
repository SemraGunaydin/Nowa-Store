import{ useContext } from 'react'
import { ProductContext } from '../../context/productContext';
import Card from '../../components/Card';

const Home = () => {
  //Product Context icin
  const {products,  selectedCategory} = 
  useContext(ProductContext);


  return (
    <div className='mt-4 container'>
      <h1 >{products.length} item available for </h1>
      <h1 className='text-primary'>{selectedCategory !='all' && selectedCategory + " category"}  </h1>


      <div className='wrapper'>
        {products.map((product) => (
          <Card key={product.id} product={product}/>
        ))}

      </div>
    </div>
  );
};

export default Home;