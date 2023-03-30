import React,{useState,useEffect} from 'react'
import './ListedItems.css'
import ItemDetails from './ItemDetails';

const ListedItems = () => {

  // fetching data
  const [items,setItems] = useState(null);

  useEffect(()=>{
    const fetchItems = async () =>{
      const response = await fetch(`/api/menu`)
      const json = await response.json()
      
      if(response.ok){
          setItems(json);
      }
  }

  fetchItems();
  },[])




  return (
   <>
      <div className="ListedItems-container-main">
        <h3 style={{margin:'3%',color:'#7149C6'}} >Listed Items</h3>
         
        <div className='lised-items-container'>

        {
            items && items.map((elem)=>{
              return(
                <>
                <ItemDetails key={elem._id} item={elem} />
                </>
              )
            })
          }

         
      
        </div>

      </div>
   </>
  )
}

export default ListedItems