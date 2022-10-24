import React, { useEffect, useState } from 'react';
import '../../Assets/Css/Item.css';

// const itemDetails = [
//   {
//     "id": 0,
//     "itemType": "Fruits",
//     "itemName": "Apple (1kg)",
//     "price": 80
//   },
//   {
//     "id": 1,
//     "itemType": "Fruits",
//     "itemName": "Mango (1kg)",
//     "price": 100
//   },
//   {
//     "id": 2,
//     "itemType": "Snacks",
//     "itemName": "Lays",
//     "price": 20
//   },
//   {
//     "id": 3,
//     "itemType": "Meat",
//     "itemName": "Chicken (1kg)",
//     "price": 240
//   },
//   {
//     "id": 4,
//     "itemType": "Soft Drinks",
//     "itemName": "Sprite",
//     "price": 40
//   },
//   {
//     "id": 5,
//     "itemType": "Vegetables",
//     "itemName": "Lady's Finger (1kg)",
//     "price": 30
//   },
//   {
//     "id": 6,
//     "itemType": "Vegetables",
//     "itemName": "Potato (1kg)",
//     "price": 15
//   },
//   {
//     "id": 7,
//     "itemType": "Spices",
//     "itemName": "Mushroom Masala",
//     "price": 30
//   },
//   {
//     "id": 8,
//     "itemType": "Snacks",
//     "itemName": "Bingo",
//     "price": 10
//   },
//   {
//     "id": 9,
//     "itemType": "Soft Drinks",
//     "itemName": "7 UP",
//     "price": 60
//   },
//   {
//     "id": 10,
//     "itemType": "Spices",
//     "itemName": "Gobi Masala",
//     "price": 15
//   },
//   {
//       "id": 11,
//       "itemType": "Fruits",
//       "itemName": "Mango (1kg)",
//       "price": 70
//     },
//     {
//       "id": 12,
//       "itemType": "Fruits",
//       "itemName": "Orange (1kg)",
//       "price": 120
//     },
//     {
//       "id": 13,
//       "itemType": "Snacks",
//       "itemName": "Chocolate",
//       "price": 80
//     },
//     {
//       "id": 14,
//       "itemType": "Soft Drinks",
//       "itemName": "Pepsi",
//       "price": 30
//     },
//     {
//       "id": 15,
//       "itemType": "Vegetables",
//       "itemName": "Tomato (1kg)",
//       "price": 33
//     },
//     {
//       "id": 6,
//       "itemType": "Vegetables",
//       "itemName": "Carrot (1kg)",
//       "price": 15
//     },
//     {
//       "id": 7,
//       "itemType": "Spices",
//       "itemName": "Pani Puri Masala",
//       "price": 30
//     },
//     {
//       "id": 8,
//       "itemType": "Snacks",
//       "itemName": "Ice Cream",
//       "price": 150
//     },
//     {
//       "id": 9,
//       "itemType": "Meat",
//       "itemName": "Fish",
//       "price": 320
//     },
//     {
//       "id": 10,
//       "itemType": "Meat",
//       "itemName": "Mutton",
//       "price": 1000
//     }
//   ]
const Item = () => {
  const [ storeState, setStoreState ] = useState([]);
  useEffect(() => {
fetch (`https://bunzo-order-management.herokuapp.com/items?type=${localStorage.itemType}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then( async (res) => {
      const itemData = await res.json();
      setStoreState(itemData)
    })
  },[])

  const handleChange = (e, itemId) => {
    console.log(document.getElementById(itemId));
    document.getElementById(itemId).value = e.target.value;
  };

  const handleClick = (e, itemId) => {
    e.preventDefault();
    document.getElementById(itemId).value = Number(document.getElementById(itemId).value) + 1;
  }

  const handleClickminus = (e, itemId) => {
    if(document.getElementById(itemId).value <= 0){
      document.getElementById(itemId).value = 0;
    } else {
      document.getElementById(itemId).value = Number(document.getElementById(itemId).value) - 1;
    }
   }
  return (
    <div>
      {storeState.map((data,id) => {
           if (localStorage.itemType == data.itemType)
        return <div key={id}>
      <div className='item_container'>
        <h3 className='item'>{data.itemName}</h3>
        <h2 className='item_price'>Rs{data.price}</h2>
        <div className='cart_icons'>
        <button className='cart_btn'  onClick={(e) => handleClickminus(e, data.id)}>-</button>
        <input type="text" id={data.id} onChange={(e) => handleChange(e, data.id)} placeholder='0' className='cart_text'/>
        <button className='cart_btn' onClick={(e) => handleClick(e, data.id)}>+</button>
        </div>
      </div>
          </div>
      })}
    

      <button className='back_btn' onClick={()=>window.location.replace('/category')}>Back</button>
      <button className='payment_btn' onClick={()=>{alert('Payment Successful! Receive the products in 10 minutes'); window.location.replace('/home ')}}>Proceed to Payment</button>
    </div>
  )
}

export default Item