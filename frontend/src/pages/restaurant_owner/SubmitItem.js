import React, { useState } from 'react'
import './SubmitItem.css'

const SubmitItem = () => {

    const [title,setTitle] = useState('');
    const [img_url,setImgUrl] = useState('');
    const [discount,setDiscount] = useState('');
    const [price,setPrice] = useState('');
    const [description,setDescription] = useState('');
    const [error,setError] = useState(null);


    const handleSubmit = async (e)=>{
        e.preventDefault()

        const item = {title,img_url,discount,price,description}

        const response = await fetch('/api/menu',{
            method: 'POST',
            body : JSON.stringify(item),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error)
        }

        if(response.ok){
            setTitle('')
            setImgUrl('')
            setDiscount('')
            setPrice('')
            setDescription('')

            setError(null)
            alert('Item Added Successfully !')
            // console.log('new Workout',json)

        }

    }


  return (
    <>
     
         <form action="" className="create" onSubmit={handleSubmit} >

         <h3 style={{marginBottom:'3%',color:'#7149C6'}} >Add a new Dish</h3>
          
        <label >Name of Dish : </label>
        <input 
         type="text" 
         onChange={(e)=>setTitle(e.target.value)} 
         value={title}
        />

        <label >pest image url of Dish : </label>
        <input 
         type="text" 
         onChange={(e)=>setImgUrl(e.target.value)} 
         value={img_url}
        />

        <label>Discount : </label>
        <input
         type="number"
         onChange={(e)=>setDiscount(e.target.value)}
         value={discount}
          />

        <label>Price : </label>
        <input
         type="number"
         onChange={(e)=>setPrice(e.target.value)}
         value={price}
          />

        <label >Add Description: </label>
        <input 
         type="text" 
         onChange={(e)=>setDescription(e.target.value)} 
         value={description}
        />

         <button>Add Dish</button>
        {error && <div className="error">{error}</div>}
     </form>
    </>
  )
}

export default SubmitItem