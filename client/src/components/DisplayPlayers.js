import React from 'react'; 
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

const DisplayPlayers = (props) => { 


    return (
        <div>

            <h1>Womens World Cup!</h1>
            {props.players.length > 0 ? props.players.map(item => (
            
            <div key={item.id} style={{border: `2px dashed black`}}>
               <h2>{item.name}</h2> 
               <h3>{item.country}</h3>
               <h3>Searches: {item.searches}</h3>
               <h3>Number Id: {item.id}</h3>
            </div>
      )) : "loading..."}
            
        </div>
    )
}
export default DisplayPlayers;