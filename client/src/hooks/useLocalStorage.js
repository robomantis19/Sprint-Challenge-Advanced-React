import {useState} from 'react';


export const useLocalStorage = (key, initValue) => { 
    const [storedSearch, setStoredSearch] = useState(() => {
        const SearchItem = window.localStorage.getItem(key); 
        return SearchItem ? JSON.parse(SearchItem): initValue;
    })

    const SetValue = value => { 
        setStoredSearch(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedSearch, SetValue];
}