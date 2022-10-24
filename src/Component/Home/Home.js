import React, { useEffect, useState } from 'react';
import '../../Assets/Css/Home.css';

// let shopDetails = [
//   {
//     "id": 0,
//     "shopImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJvvA3_yhqdtpR5SPLf-DlFtP2YY-dg8Lyg&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJvvA3_yhqdtpR5SPLf-DlFtP2YY-dg8Lyg&usqp=CAU",
//     "shopName": "The Pick 'n' Mix"
//   },
//   {
//     "id": 1,
//     "shopImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypkxW1YZqhy6lBLhRGT3JjVs0RwlP3w09Iz-VF4SOH5QDzDoitSajcKO83ZCH1U14hSE&usqp=CAU",
//    "shopName": "Buy & Go!"
//   },
//   {
//     "id": 2,
//     "shopImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ex9Ev3l1r7dp6bkNITf65B91aM_cU71wwg&usqp=CAU",
//     "shopName": "Mini Mart"
//   },
//   {
//     "id": 3,
//     "shopImg": "https://cdn.forumcomm.com/dims4/default/0d952c1/2147483647/strip/false/crop/2568x1678+0+0/resize/1486x971!/quality/90/?url=https%3A%2F%2Ffcc-cue-exports-brightspot.s3.us-west-2.amazonaws.com%2Ffccnn%2Fbinary%2Fcopy%2F3b%2F81%2F8b7d40344524af17618f82fe55b3%2F2740881-0b52dxj0kvwfrzhjxcjfwbzgzr1u-binary-771236.jpg",
//     "shopName": "Wall Of Values"
//   },
//   {
//     "id": 4,
//     "shopImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5hs6I-NdFZu0DeTQ9eOkLurh6yu5INxBKg&usqp=CAU",
//     "shopName": "Fro-Shop"
//   },
//   {
//     "id": 5,
//     "shopImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRyPn7f0vlB5s3beyxaK0Y9-386EMKSw74dQ&usqp=CAU",
//     "shopName": "Groceteria"
//   },
//   {
//     "id": 6,
//     "shopImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTniMtJ-_wi1t5hROMrJE4OX0TohLezA6VjVQ&usqp=CAU",
//     "shopName": "Chopperz"
//   },
//   {
//     "id": 7,
//     "shopImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyo6E2n7FxX94TqewbO2rM8FlY0pvKR9B2A&usqp=CAU",
//     "shopName": "Fast N Fresh"
//   }
// ]
const Home = () => {
const [storeState, setStoreState] = useState([]);
  useEffect(()=>{
  fetch("https://bunzo-order-management.herokuapp.com/shops")
  .then( async (res)=> {
    const shopData =  await res.json(); 
    setStoreState(shopData);
  })
  },[])
 
  return (
<div  className='stores'>
    {storeState.map((data,id) =>{
           return <div key={id}>
           <div className='store' onClick={()=>{window.location.replace('/category')}}>
             <div className='store_head'>
               <img src={data.shopImg} className='store_img'/>
             </div>
              
               <h3 className='store_name'>{data.shopName}</h3>
       
           </div>
           </div>
    })}
    </div>
  )
}
 
export default Home

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypkxW1YZqhy6lBLhRGT3JjVs0RwlP3w09Iz-VF4SOH5QDzDoitSajcKO83ZCH1U14hSE&usqp=CAU
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ex9Ev3l1r7dp6bkNITf65B91aM_cU71wwg&usqp=CAU
// 'https://cdn.forumcomm.com/dims4/default/0d952c1/2147483647/strip/false/crop/2568x1678+0+0/resize/1486x971!/quality/90/?url=https%3A%2F%2Ffcc-cue-exports-brightspot.s3.us-west-2.amazonaws.com%2Ffccnn%2Fbinary%2Fcopy%2F3b%2F81%2F8b7d40344524af17618f82fe55b3%2F2740881-0b52dxj0kvwfrzhjxcjfwbzgzr1u-binary-771236.jpg'
