import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';

import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



//////////// 
// function Hello(props) {
//   return <h1>Hello World  :  !  {props.name}</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Hello name='Raj Barge'/>);

// ////////// 
// function Car(props) {
//   return <div>
//               <h2>Car Name = { props.brand.name }!</h2>
//               <h2>Car Model= { props.brand.model }!</h2>
//               <h2>Car Year = { props.brand.year }!</h2>
//           </div>;
// }

// function Garage() {
//   const carInfo = { name: "Ford", model: "Mustang" , year:"1975" };
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <Car brand={ carInfo } />
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);

////// ---- Create a Class Component   1111111 

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);

////// ---- Create a Class Component & state   222222222  
// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = {color: "red"};
//   }
//   render() {
//     return <h2>I am a {this.state.color} Car!</h2>;
//   }
// }

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Car />);

///////// ----------------- ************  class  ************** ------------------ //////////////


// class Car extends React.Component{
//   constructor(){
//     super();
//     this.state = {color: "blue"};
//   }
//   render(){
//     return <h2>My car color is {this.state.color}!!</h2>;
//   } 
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);

///////// ----------------- ************  Raj Event   ************** ------------------ //////////////

// function Football() {
//   const shoot = () => {
//     alert("Great Shot!");
//   }

//   return (
//     <button onClick={shoot}>Take the shot!</button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);






///////// ----------------- ************  Raj Event parameter passing   ************** ------------------ //////////////

// function Football() {
//   const shoot = (nm) => {
//     alert("Great Shot Mr/Miss :  "+ nm);
//   }

//   return (
//     <button onClick={() => shoot("Dhanashre ")}>Take the shot!</button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);


///////// ----------------- ************  Raj Event event object   ************** ------------------ //////////////

// function Football() {
//   const shoot = (nm, b) => {
//     console.debug(b);
//     alert("Hello : " + nm + "Type : " + b.type);
//     /*
//     'b' represents the React event that triggered the function,
//     in this case the 'click' event
//     */
//   }

//   return (
//     <button onClick={(event) => shoot("Dhanashree", event)}>Take the shot!</button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);


///////// ----------------- ************  Raj Event event object with state and props   ************** ------------------ //////////////

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Toggle />);

/////// 12-04-2023
///////////////------ control statement if connection

// function MissedGoal() {
//     return <h1>MISSED!</h1>;
//   }
  
//   function MadeGoal() {
//     return <h1>Goal!</h1>;
//   }
  
  
//   function Goal(props) {
//     const isGoal = props.isGoal;
//     if (isGoal) {
//       return <MadeGoal/>;
//     }
//     return <MissedGoal/>;
//   }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Goal isGoal={true} />);


///// generate list - with map function 
function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  
  function Garage() {
    const cars = ['Ford', 'BMW', 'Audi',"Maruti"];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
          {cars.map((car) => <Car brand={car} />)}
        </ul>
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);

reportWebVitals();
