import React from 'react';
export default (props) => {

  console.log(props)
  console.log(props.services);

  return(
  <div className="form-group">
    <select className="form-control" name={props.name} {...props}>
      <option selected value="">Available Services</option>
      {props.pets.map(pet => (
        <option value={pet.name} key={pet.key}>{pet.name}</option>
      ))}
    </select>
  </div>
  );
}