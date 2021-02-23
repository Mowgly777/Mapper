import { useMap } from 'react-leaflet';

export const MapCenterController = props => {
  const map = useMap();
  map.setView(props.center, props.zoom, {
    animate: true,
    pan: {
      duration: props.duration ?? 1
    }
  });

  return null;
}