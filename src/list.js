function Car(props) {
    return <li>I am a { props.brand }</li>;
  }

  function ShowList() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
      <>
        <h1>List unorder</h1>
        <ul>
          {cars.map((car) => <Car brand={car} />)}
        </ul>
      </>
    );
  }


  export default ShowList;