
function Generate_Option_List(props) {
    return <option value={ props.id }>{ props.brand }</option>;
  }
  
  function FillComboBox() {
    const cars = [
      {id: 0, brand: '[Please Select Car Name for List]'},
      {id: 1, brand: 'Ford'},
      {id: 2, brand: 'BMW'},
      {id: 3, brand: 'Audi'}
    ];
    return (
      <>
        <h1>select from Drop down List</h1>
        <select>
          {cars.map((car) => <Generate_Option_List key={car.id} brand={car.brand} />)}
        </select>
      </>
    );
  }

export default FillComboBox;