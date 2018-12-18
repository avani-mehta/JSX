// Import react and React-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create React component
const App = () => {
  return <div>Hello there!!</div>;
};

// Take the React component and show it on UI/screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
