import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  Container,
} from 'components/Containers';

const TextContainer = styled(Container)`
  ${props => props.fontFamily && `font-family: ${props.fontFamily};`}
  ${props => props.fontSize && `font-size: ${props.fontSize};`}
  ${props => props.letterSpacing && `letter-spacing: ${props.letterSpacing};`}
  ${props => props.lineHeight && `line-height: ${props.lineHeight};`}
  ${props => props.textAlign && `text-align: ${props.textAlign};`}
  ${props => props.textTransform && `text-transform: ${props.textTransform};`}
  ${props => props.textDecoration && `text-decoration: ${props.textDecoration};`}
`;

export const Text = props => {

  return (

    <TextContainer
      {...props}
      color={props.color}
      fontFamily={props.fontFamily}
      fontSize={props.fontSize}
      letterSpacing={props.letterSpacing}
      lineHeight={props.lineHeight}
      minHeight={props.minHeight}
      minWidth={props.minWidth}
      maxWidth={props.maxWidth}
      padding={props.padding}
      textAlign={props.textAlign}
      textTransform={props.textTransform}
    >
      {props.text}{props.children}
    </TextContainer>
  );
};

Text.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  letterSpacing: PropTypes.string,
  lineHeight: PropTypes.string,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.func,
    PropTypes.object,
  ]),
  textAlign: PropTypes.string,
  textTransform: PropTypes.string,
};

Text.defaultProps = {
  color: null,
  fontFamily: null,
  fontSize: null,
  letterSpacing: null,
  lineHeight: null,
  minHeight: null,
  minWidth: null,
  maxWidth: null,
  padding: null,
  text: '',
  textAlign: null,
  textTransform: null,
};
