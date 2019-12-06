import React from 'react'; 


const Display = (props) => { 


    return (

        <div>
            <div  style={{border: `2px dashed black`}}>
               <h2 data-testid="Name">Name: {props.name}</h2> 
               <h3 data-testid="Country">Country: {props.country}</h3>
               <h3>Searches: {props.searches}</h3>
               <h3>Number Id: {props.id}</h3>
            </div>
        </div>
    )
}
export default Display;