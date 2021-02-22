import React from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import * as locations from 'data/locations.json';
import { Container } from 'components/Containers';

export const Map = props => {

  const center = props.coordinates ?? [-26.1714537,27.8999389];
  const zoom = props.zoom ?? 6;

  console.log('map', center, zoom)

  return (
    <Container
    >

      <LeafletMap 
        center={center}
        zoom={zoom}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

      </LeafletMap>

    </Container>
  );
};