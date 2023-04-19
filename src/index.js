import React, { useState }  from 'react';

// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';

import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



////////////  create for with label , text box button
// export default function App() {
//   const [message, setMessage] = useState('');

//   const [updated, setUpdated] = useState(message);

//   const handleChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleClick = () => {
//     // 👇 "message" stores input field value
//     setUpdated(message);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         id="message"
//         name="message"
//         onChange={handleChange}
//         value={message}
//       />

//       <h2>Message: {message}</h2>

//       <h2>Updated: {updated}</h2>

//       <button onClick={handleClick}>Update</button>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

/////// -----  19-04-2023

import Login from './login.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);

reportWebVitals();
