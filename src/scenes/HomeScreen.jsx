import React from 'react';
import locations from 'data/locations';
import {
  VContainer,
  Map,
  DropDownButton,
  Button,
} from 'components';

export const HomeScreen = () => {

  const [state, setState] = React.useState({});

  const items = [];
  locations.forEach(element => {
    items.push(
      <Button 
        text={element.location}
        onClick={()=>{
          console.log('clicked');
          setState({
          coordinates: [element.latitude, element.longitude],
          zoom: element.zoom,
        })}}
      />
    );
  });

  return (
    <VContainer>
      <DropDownButton
        text={'Pick a location'}
        dropDownItems={items}
      />
      <Map
        coordinates={state.coordinates}
        zoom ={state.zoom}
      />
    </VContainer>
  );
};