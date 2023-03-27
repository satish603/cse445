import React, { useEffect, useState, useContext } from 'react';
import Card from './Card';
import searchContext from '../context/search/searchContext';


function Home(){

  const products={
    productsarray: [],
  }
  const [state, setState] = useState(products);
  const context=useContext(searchContext);
  const {searchkey}=context;
  useEffect(()=>{
    fetch('http://localhost:5000/api/getproduct')
      .then((response) => response.json())
      .then((item) => {
        setState(() => {
          return { productsarray: item };
        });
      });
  });
  const filterProduct=state.productsarray.filter((product)=>{
    return product.name.toLowerCase().includes(searchkey.searchField);
  })
    return (
      <div className='container'>
        <h1 className='text-center'>Donato</h1>
        <div className='container'>
          <div className='row'>
            {filterProduct.map((product) => {
              return (
                <div className='col-md-4 col-12 mx-auto my-2'>
                  <Card key={product.id} product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  export default Home;
