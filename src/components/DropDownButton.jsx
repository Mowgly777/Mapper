import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Button';
import { VContainer } from 'components/Containers';

export const DropDownButton = props => {

  const MainButton = props.initialButton || Button;
  const moreRef = React.useRef(null);
  const [showMore, setShowMore] = React.useState(false);

  const onMouseDown = e => {

    if (moreRef.current && moreRef.current.contains(e.target)) {
      return;
    }

    typeof props.onClickOutside === 'function' && props.onClickOutside(false);
    props.showMore === null && setShowMore(false);
  };

  const onClick = () => {

    console.log('click', showMore)

    setShowMore(!showMore);
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
    }
  });

  return (
    <VContainer
      position={'relative'}
      ref={moreRef}
    >

      <MainButton
        {...props}
        id={`${props.id}-more`}
        text={props.text}
        onClick={onClick}
        secondaryIcon={props.secondaryIcon}
      />

      { showMore &&
        <VContainer
          position={'absolute'}
          background={'red'}
          zIndex={2}
          left={'0'}
          top={'100%'}
        >
          {props.dropDownItems}

        </VContainer>
      }

    </VContainer>
  );
};

DropDownButton.propTypes = {
  id: PropTypes.string,
  dropDownItems: PropTypes.array,
  text: PropTypes.string,
  onMoreClick: PropTypes.func,
  onClickOutside: PropTypes.func,
  onClick: PropTypes.func,
  showMore: PropTypes.bool,
  initialButton: PropTypes.func,
  secondaryIcon: PropTypes.func,
  width: PropTypes.string,
};

DropDownButton.defaultProps = {
  id: 'unknown-dropdownbutton',
  dropDownItems: null,
  text: null,
  onMoreClick: null,
  onClickOutside: () => {},
  onClick: () => {},
  showMore: null,
  initialButton: null,
  secondaryIcon: null,
  width: null,
};
