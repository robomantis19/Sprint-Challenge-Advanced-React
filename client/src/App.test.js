import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from './components/Display'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'; 
import { getByTitle, getByText } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('get element divs test', () => { 
  const { getByTestId } = rtl.render(<App/>); 
  getByTestId(/soccerDivs/i); 
 
})


test('get element divs test', () => { 
  const { getByText } = rtl.render(<Display/>); 
  
    getByText("Searches:")
  
  
})
test('get element divs test', () => { 
  const { getByText } = rtl.render(<Display/>); 
  
    getByText("Number Id:")
    
  
})
test('get name', () => { 
  const { getByTestId } = rtl.render(<Display/>); 
  getByTestId("Name")
})
test('get country', () => { 
  const { getByTestId } = rtl.render(<Display/>); 
  
  getByTestId("Country")
  
  
})

