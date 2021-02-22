import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components/Containers';
import { Text } from 'components/Text';
import { Spinner } from 'components/Spinner';

export const Button = props => {

  const Icon = props.icon || null;
  const SecondaryIcon = props.secondaryIcon || null;

  const onClick = e => {

    if (!e || !e.target || props.isDisabled || props.isLoading) {
      return;
    }

    typeof props.onClick === 'function' && props.onClick(e, props.onClickArgs);
  };

  return (

    <Container
      flex={props.flex}
      padding={props.margin}
      width={props.width}
    >

      <Container
        id={props.id}
        name={props.name}
        alignItems={props.alignItems}
        backgroundColor={(props.isDisabled && props.disabledBackgroundColor) || props.backgroundColor}
        border={(props.isDisabled && props.disabledBorder) || props.border}
        borderRadius={props.borderRadius}
        boxSizing={'border-box'}
        color={(props.isDisabled && props.disabledColor) || props.color}
        cursor={'pointer'}
        flex={props.flex}
        height={props.height}
        hoverBackgroundColor={props.hoverBackgroundColor}
        hoverBorder={props.hoverBorder}
        hoverColor={props.hoverColor}
        justifyContent={props.justifyContent}
        maxHeight={props.maxHeight}
        maxWidth={props.maxWidth}
        minHeight={props.minHeight}
        minWidth={props.minWidth}
        onClick={onClick}
        padding={props.padding}
        width={props.width}
        pointerEvents={props.isDisabled ? 'none' : null}
      >

        {props.iconPosition === 'left' &&

          <Icon
            padding={'0 1vw 3px 0'}
            fontSize={props.iconFontSize}
            color={props.iconColor || 'inherit'}
          />
        }

        {props.isLoading
          ?
          <Spinner width={'2vh'} height={'2vh'} />
          :
          <Text
            textTransform={props.textTransform}
            text={props.text}
            whiteSpace={props.whiteSpace}
          />
        }

        {props.iconPosition === 'right' &&

          <Icon
            padding={'0 1vw 3px 0'}
            fontSize={props.iconFontSize}
            color={props.iconColor || 'inherit'}
          />
        }

        {SecondaryIcon &&

          <SecondaryIcon
            padding={'0 1vw 3px 0'}
            fontSize={props.iconFontSize}
            color={props.iconColor || 'inherit'}
          />
        }

      </Container>

    </Container>
  );
};

Button.propTypes = {
  alignItems: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  disabledBackgroundColor: PropTypes.string,
  disabledBorder: PropTypes.string,
  disabledColor: PropTypes.string,
  flex: PropTypes.string,
  formFactorProps: PropTypes.object,
  height: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  hoverBorder: PropTypes.string,
  hoverColor: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  justifyContent: PropTypes.string,
  margin: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  onClickArgs: PropTypes.any,
  padding: PropTypes.string,
  iconPosition: PropTypes.string,
  iconColor: PropTypes.string,
  icon: PropTypes.func,
  iconFontSize: PropTypes.object,
  text: PropTypes.string,
  textTransform: PropTypes.string,
  width: PropTypes.string,
  whiteSpace: PropTypes.string,
  secondaryIcon: PropTypes.func,
};

Button.defaultProps = {
  alignItems: 'center',
  backgroundColor: '#00EFFF',
  border: null,
  borderRadius: '3px',
  color: '#FFFFFF',
  disabledBackgroundColor: '#00EFFF77',
  disabledBorder: null,
  disabledColor: null,
  flex: null,
  formFactorProps: null,
  height: null,
  hoverBackgroundColor: '#0000FF',
  hoverBorder: null,
  hoverColor: null,
  id: 'unknown-button',
  isDisabled: false,
  isLoading: false,
  justifyContent: 'center',
  margin: null,
  maxHeight: null,
  maxWidth: null,
  minHeight: null,
  minWidth: null,
  name: 'unknown-button',
  onClick: null,
  onClickArgs: null,
  padding: '19px 19px 16px',
  iconPosition: null,
  iconColor: null,
  icon: null,
  iconFontSize: null,
  text: '',
  textTransform: 'uppercase',
  width: null,
  whiteSpace: null,
  secondaryIcon: null,
};
