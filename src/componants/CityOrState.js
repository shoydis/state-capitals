function CityOrState({ id, hoveredItem, isActive, state, capitals }) { 
  if (hoveredItem === id) {
    return <div>{capitals}</div>; 
  }
  return <div>{state}</div>; 

} 

export default CityOrState;