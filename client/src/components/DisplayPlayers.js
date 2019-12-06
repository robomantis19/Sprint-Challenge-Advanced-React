import React, {useState, useEffect} from 'react'; 
import { useSearchHistory } from '../hooks/useSearchHistory'; 
import Display from './Display'

const DisplayPlayers = (props) => { 
    const [search, setSearch] = useState(""); 

    const [searchvalues, setSearchValues, returndiv] = useSearchHistory("History")
    useEffect(() => { 
        setSearchValues(search);
    },[search])


    function handleChange(e){ 
        setSearch(e.target.value);
    }

    return (
        <div>

            <h1 data-testid="soccerDivs">Womens World Cup!</h1>
            <input type = 'text' placeholder="Search..." onChange={handleChange}/>
            {searchvalues}
            {props.players.length != 0 ? 
            props.players.filter(player => search !== '' ?
            player.name.toLowerCase().includes(search.toLowerCase()) : true)
              .map(item => (
                <Display key={item.id} name={item.name} country={item.country}searches={item.searches} id={item.id}/>
            // <div key={item.id} style={{border: `2px dashed black`}}>
            //    <h2>{item.name}</h2> 
            //    <h3>{item.country}</h3>
            //    <h3>Searches: {item.searches}</h3>
            //    <h3>Number Id: {item.id}</h3>
            // </div>
      )) : "loading..."}
            
        </div>
    )
}
export default DisplayPlayers;