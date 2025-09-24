import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Titel from '../Components/Titel';

import ProductItem from '../Components/ProductItem';

 const Collection = () => {

  const {products,search, showSearch} = useContext(ShopContext);

  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] =useState([]);
  const [subCategory,setSubCategory] = useState([]);



  



  const applyFilter=()=>{
    let productsCopy = products.slice()

    if(showSearch && search ){
      productsCopy = productsCopy.filter(item =>item.name.toLowerCase().includes(search.toLowerCase()))
      
    }
    if(category.length >0){
      productsCopy.productsCopy.filter(item => category.includes(item.category));
    }

    setFilterProducts(productsCopy)
  }

 

  useEffect(() =>{
    applyFilter()
  }, [category, subCategory, search, showSearch])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
      

       <div className='border border-gray-300 pl-5 py-3 mt-6 '>
        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p> <input type="checkbox" /> Men</p>
          <p> <input type="checkbox" /> Women</p>
          <p> <input type="checkbox" /> Kids</p>
        </div>
       </div>

       <div className='border border-gray-300 pl-5 py-3 mt-6 '>
        <p className='mb-3 text-sm font-medium'>TYPE</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p> <input type="checkbox" /> Topwear</p>
          <p> <input type="checkbox" /> Bottomwear</p>
          <p> <input type="checkbox" /> Winterwear</p>
        </div>
       </div>
        

        
        
      </div>

     
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Titel text1={'ALL'} text2={'COLLECTIONS'} />

          
          
        </div>

        
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}


export default Collection