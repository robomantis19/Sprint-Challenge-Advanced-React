import React, {useState} from 'react'; 

const DisplayPlayers = (props) => { 
    const [search, setSearch] = useState(""); 
    function handleChange(e){ 
        setSearch(e.target.value);
    }

    return (
        <div>

            <h1>Womens World Cup!</h1>
            <input type = 'text' placeholder="Search..." onChange={handleChange}/>
            {props.players.length != 0 ? 
            props.players.filter(player => search !== '' ?
            player.name.toLowerCase().includes(search.toLowerCase()) : true)
              .map(item => (
            
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