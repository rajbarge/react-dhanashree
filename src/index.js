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

// import Login from './login.js';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Login />);


//// 21-04-2023 List and select 
// import ShowList from './list.js';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ShowList  />);

//// FillComboBox
// import FillComboBox from './fill-combo-box';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FillComboBox  />);

////////////////// create static site for show route demo
//BrowserRouter, Routes, Route 
/// npm i -D react-router-dom  (nnot find module 'react-router-dom')

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


reportWebVitals();
