import React from 'react';
import Card from './Card'
const Home = () => {
  return (
    <div className='col-md-10 col-12 mx-auto mt-3'>
        <h1 className='text-center'>Donato</h1>
        <div className="row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Home