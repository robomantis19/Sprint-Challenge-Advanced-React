import React, { useEffect } from 'react'; 
import { useLocalStorage } from './useLocalStorage'; 


export const useSearchHistory = initValue => {
    const [searchvalues, setSearchValues] = useLocalStorage('Search', initValue);
    const returndiv = () => { 

        let arr = []
        arr.push(searchvalues); 
        return <div>{arr}</div>
    }
    useEffect(() => {
        returndiv(searchvalues);

    }, [searchvalues])
    return [searchvalues, setSearchValues, returndiv]
}