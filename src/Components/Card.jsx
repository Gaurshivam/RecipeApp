import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const Card = () => {
    const [data, setData] = useState([])



    let APP_ID = "b36937df";
    let APP_KEYS = "061a12399f4feef1133f71eebdd079cb";
    
    async function getData(defaultQuery){
      let response = await  fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${APP_ID}&app_key=${APP_KEYS}`);
      let fetchdata = await response.json();
      setData(fetchdata.hits);
      console.log(fetchdata.hits)

    }
    useEffect(()=>{
       getData()
    },[])
  return (
    <div>
      <h1>Recipe App</h1>
      <RecipeCard data={data}/>
    </div>
  );
}

export default Card;
