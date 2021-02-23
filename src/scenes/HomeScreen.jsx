import React from 'react';
import locations from 'data/locations';
import trips from 'data/trips';
import {
  VContainer,
  Map,
  DropDownButton,
  Button,
} from 'components';

export const HomeScreen = () => {

  const [state, setState] = React.useState({});

  const panningFunc = (arr,  i) => {

    setState({
      coordinates: [arr[i].latitude, arr[i].longitude],
      zoom: arr[i].zoom,
    });

    if(i < arr.length - 1) setTimeout(()=>panningFunc(arr, i+1), 2000);
  };

  const items = [];
  const tripItems = [];

  locations.forEach(element => {
    items.push(
      <Button 
        text={element.location}
        onClick={() =>
          setState({
            coordinates: [element.latitude, element.longitude],
            zoom: element.zoom,
          })
        }
      />
    );
  });

  trips.forEach(element => {
    tripItems.push(
      <Button
        text={element.title}
        onClick={ () => panningFunc(element.trip, 0) }
      />
    );
  });

  return (
    <VContainer>
      <DropDownButton
        text={'Pick a location'}
        dropDownItems={items}
      />

      <DropDownButton
        text={'Pick a trip'}
        dropDownItems={tripItems}
      />

      <Map
        coordinates={state.coordinates}
        zoom ={state.zoom}
      />
    </VContainer>
  );
};