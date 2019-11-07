import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyBS1y7bGZpCL_M51W4KUdk6N-NSlPkqvXE";

// components which create some html
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
        );
}

// take this component's generated HTML and put in on the dom
ReactDom.render(<App/>, document.querySelector('.container'));


export default App;