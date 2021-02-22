import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Container } from 'components/Containers';

const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

export const Fill = styled(Container)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  border-radius: 50%;
  border: 3px solid ${props => props.fillColor || `#444444`};
`;

export const Highlight = styled(Container)`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  border-color: ${props => props.highlightColor || `#00EFFF`} transparent transparent;
  border-style: solid;
  animation: ${spin} .6s linear infinite;
  border-width: 3px;
`;

export const Spinner = props => (

  <Container {...props} position={'relative'}>

    <Fill
      color={props.fillColor}
    />

    <Highlight
      color={props.highlightColor}
    />

  </Container>
);

Spinner.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string,
  highlightColor: PropTypes.string,
};

Spinner.defaultProps = {
  width: '52px',
  height: '52px',
  fillColor: null,
  highlightColor: null,
};
