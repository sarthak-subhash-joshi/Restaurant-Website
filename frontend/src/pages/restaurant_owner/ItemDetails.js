import React from 'react'

const ItemDetails = ({item}) => {

    const handleClick= async ()=>{
        const response = await fetch('api/menu/'+item._id,{
          method:'DELETE'
        })
        const  json = await response.json()
        alert("'"+json.title+ "' deleted successfully")
      }
    


  return (
    <>
        <div className='listed-item'>
                 <img className='listed-items-img' src={item.img_url} listed-items-img alt="" />
                <div>
                <p><strong>Name : </strong>{item.title}</p>
                <p><strong>Price : </strong>{item.price} ₹</p>
                <p><strong>Discount : </strong>{item.discount}%</p>
                <button className='listed-item-btn'><i class="fa-solid fa-trash" onClick={handleClick} ></i></button>
                </div>
        </div>
    </>
  )
}

export default ItemDetails