import React from 'react';
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';
import { MapCenterController } from 'components/maps/MapCenterController';

export const Map = props => {

  const center = props.coordinates ?? [-26.1714537,27.8999389];
  const zoom = props.zoom ?? 6;

  return (

    <LeafletMap 
      center={center}
      zoom={zoom}
    >

      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MapCenterController 
        center={center}
        zoom={zoom}
      />

    </LeafletMap>
  );
};