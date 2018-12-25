// Import react and React-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getTime() {
    return (new Date()).toLocaleTimeString()
}
//Create React component
const App = () => {
  return <div>
  <div>Hey there!!Current time is:</div>
  <h3>{getTime()}</h3>
</div>
}


// Take the React component and show it on UI/screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
