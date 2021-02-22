import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components/Containers';

export const DropDown = props => {

  console.log('running');

  const ref = React.useRef(null);

  const onMouseDown = e => {

    if (ref.current && !ref.current.contains(e.target)) {
      typeof props.onClickOutside === 'function' && props.onClickOutside(e);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
    }
  });

  // This avoids passing onClickOutside down to the DOM and raising errors.
  const containerProps = {...props};
  delete containerProps.onClickOutside;

  return (

    <Container
      {...containerProps}
      ref={ref}
    />
  );
};

DropDown.propTypes = {
  position: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  flexDirection: PropTypes.string,
  boxShadow: PropTypes.string,
  overflow: PropTypes.string,
  margin: PropTypes.string,
  flex: PropTypes.string,
  onClickOutside: PropTypes.func,
};

DropDown.defaultProps = {
  position: 'absolute',
  backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  flexDirection: 'column',
  boxShadow: '0px 4px 8px rgba(10, 34, 64, 0.05), 0px 1px 2px rgba(10, 34, 64, 0.05), 0px 2px 4px rgba(10, 34, 64, 0.05)',
  overflow: 'hidden',
  flex: null,
  margin: null,
  onClickOutside: null,
};
