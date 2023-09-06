import React from 'react';

const RecipeCard = ({data}) => {
  return (
    <div style={{display:"grid",margin:"20px",gridTemplateColumns:"1fr 1fr 1fr"}}>
      {
        data.map((item,i)=>{
            return(
                <div key={i} style={{backgroundColor:"red",color:"white", margin:"20px",width:"400px",boxShadow:"0px 0px 10px black"}}>
                  <img src={item.recipe.image} alt='ImageData' width={400} height={200} />
                  <h3>{item.recipe.label}</h3>
                </div>
            )
        })
      }
    </div>
  );
}

export default RecipeCard;
