import React, { useEffect, useState } from 'react';
import '../../Assets/Css/Category.css';

// let categoryDetails=[
//   {
//     "id": 0,
//     "categoryImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxf6_nAXz7qiU4oQG5D7xVLrZb2b_Sd1-jg&usqp=CAU",
//     "categoryName": "Fruits"
//   },
//   {
//     "id": 1,
//     "categoryImg": "https://media.istockphoto.com/photos/food-background-with-assortment-of-fresh-organic-fruits-and-picture-id1203599963?k=20&m=1203599963&s=612x612&w=0&h=XY0PiCcaw1HShjCU9JgywVoY5JQC-lZnZfWqyyREOus=",
//     "categoryName": "Vegetables"
//   },
//   {
//     "id": 2,
//     "categoryImg": "https://static.toiimg.com/photo/71198298.cms",
//     "categoryName": "Spices"
//   },
//   {
//     "id": 3,
//     "categoryImg": "https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/snacks-in-america.jpg?quality=82&strip=1",
//     "categoryName": "Snacks"
//   },
//   {
//     "id": 4,
//     "categoryImg": "https://us.123rf.com/450wm/monticello/monticello1804/monticello180400265/103002442-poznan-poland-apr-6-2018-bottles-of-global-soft-drink-brands-including-products-of-coca-cola-company.jpg?ver=6",
//     "categoryName": "Soft Drinks"
//   },
//   {
//     "id": 5,
//     "categoryImg": "https://images.ctfassets.net/3s5io6mnxfqz/5GlOYuzg0nApcehTPlbJMy/140abddf0f3f93fa16568f4d035cd5e6/AdobeStock_175165460.jpeg",
//     "categoryName": "Meat"
//   }
// ]

const Category = () => {
  const [ storeState, setStoreState ] = useState([]);
  useEffect( ()=> { 
    fetch ("https://bunzo-order-management.herokuapp.com/categories")
    .then( async (res) => {
      const categoryData = await res.json();
      setStoreState(categoryData);
    })
 },[])
 
  return (
    <div  className='categories'>
    {storeState.map((data,id) =>{
           return <div key={id}>
           <div className='category' >
             <div className="category_head">
               <img src= {data.categoryImg}
               className='category_img' onClick={()=>{
              localStorage.setItem("itemType", data.categoryName);
               window.location.replace(`/item?type=${localStorage.itemType}`)
               console.log(data.categoryName)
                }}/>
             
              
               <h3 className='category_name'>{data.categoryName}</h3>
               </div>
           </div>
           </div>
    })}
  </div>)
}

export default Category