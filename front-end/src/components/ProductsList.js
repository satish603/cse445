import React, { useEffect, useState, useContext } from 'react';
import Card from './Card';
import searchContext from '../context/search/searchContext';



function ProductList(props){
  const products={
    productsarray: [],
  }
  const [state, setState] = useState(products);
  const context=useContext(searchContext);
  const {searchkey}=context;
  const category=props.category;
  useEffect(()=>{
    const url=`http://localhost:5000/api/getproduct/${category}`
    fetch(url)
      .then((response) => response.json())
      .then((item) => {
        setState(() => {
          return { productsarray: item };
        });
      });
  },[category]);
  const filterProduct=state.productsarray.filter((product)=>{
    return product.name.toLowerCase().includes(searchkey.searchField);
  })
  const capitalKaro=(word)=>{
    let lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
    return (
        <div className='container' style={{'paddingTop': '5rem'}}>
          <h1 className="text-center" style={{color: '#fd5c63', letterSpacing: '1px',fontWeight: 'bold'}}>{capitalKaro(props.category)}</h1>
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
    );
  }

  export default ProductList;
