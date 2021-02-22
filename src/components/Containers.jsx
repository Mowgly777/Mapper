import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => props.display || 'flex'};

  ${props => props.alignSelf && `align-self: ${props.alignSelf};`}
  ${props => props.alignItems && `align-items: ${props.alignItems};`}
  ${props => props.background && `background: ${props.background};`}
  ${props => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  ${props => props.backgroundImage && `background-image: ${props.backgroundImage};`}
  ${props => props.border && `border: ${props.border};`}
  ${props => props.borderBottom && `border-bottom: ${props.borderBottom};`}
  ${props => props.borderLeft && `border-left: ${props.borderLeft};`}
  ${props => props.borderRadius && `border-radius: ${props.borderRadius};`}
  ${props => props.borderRight && `border-right: ${props.borderRight};`}
  ${props => props.borderTop && `border-top: ${props.borderTop};`}
  ${props => props.bottom && `bottom: ${props.bottom};`}
  ${props => props.boxShadow && `box-shadow: ${props.boxShadow};`}
  ${props => props.boxSizing && `box-sizing: ${props.boxSizing};`}
  ${props => props.color && `color: ${props.color};`}
  ${props => props.cursor && `cursor: ${props.cursor};`}
  ${props => props.flex && `flex: ${props.flex};`}
  ${props => props.flexGrow && `flex-grow: ${props.flexGrow};`}
  ${props => props.flexWrap && `flex-wrap: ${props.flexWrap};`}
  ${props => props.flexDirection && `flex-direction: ${props.flexDirection};`}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${props => props.justifySelf && `justify-self: ${props.justifySelf};`}
  ${props => props.left && `left: ${props.left};`}
  ${props => props.margin && `margin: ${props.margin};`}
  ${props => props.maxHeight && `max-height: ${props.maxHeight};`}
  ${props => props.maxWidth && `max-width: ${props.maxWidth};`}
  ${props => props.minHeight && `min-height: ${props.minHeight};`}
  ${props => props.minWidth && `min-width: ${props.minWidth};`}
  ${props => props.opacity && `opacity: ${props.opacity};`}
  ${props => props.overflow && `overflow: ${props.overflow};`}
  ${props => props.overflowWrap && `overflow-wrap: ${props.overflowWrap};`}
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.pointerEvents && `pointer-events: ${props.pointerEvents};`}
  ${props => props.position && `position: ${props.position};`}
  ${props => props.right && `right: ${props.right};`}
  ${props => props.textTransform && `text-transform: ${props.textTransform};`}
  ${props => props.textOverflow && `text-overflow: ${props.textOverflow};`}
  ${props => props.top && `top: ${props.top};`}
  ${props => props.transform && `transform: ${props.transform};`}
  ${props => props.transition && `transition: ${props.transition};`}
  ${props => props.userSelect && `user-select: ${props.userSelect};`}
  ${props => props.whiteSpace && `white-space: ${props.whiteSpace};`}
  ${props => props.wordWrap && `word-wrap: ${props.wordWrap};`}
  ${props => props.wordBreak && `word-break: ${props.wordBreak};`}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.zIndex && `z-index: ${props.zIndex};`}

  :hover {
    ${props => props.hoverAlignItems && `align-items: ${props.hoverAlignItems};`}
    ${props => props.hoverBackground && `background: ${props.hoverBackground};`}
    ${props => props.hoverBackgroundColor && `background-color: ${props.hoverBackgroundColor};`}
    ${props => props.hoverBackgroundImage && `background-image: ${props.hoverBackgroundImage};`}
    ${props => props.hoverBorder && `border: ${props.hoverBorder};`}
    ${props => props.hoverBorderBottom && `border-bottom: ${props.hoverBorderBottom};`}
    ${props => props.hoverBorderLeft && `border-left: ${props.hoverBorderLeft};`}
    ${props => props.hoverBorderRadius && `border-radius: ${props.hoverBorderRadius};`}
    ${props => props.hoverBorderRight && `border-right: ${props.hoverBorderRight};`}
    ${props => props.hoverBorderRadius && `border-radius: ${props.hoverBorderRadius};`}
    ${props => props.hoverBoxShadow && `box-shadow: ${props.hoverBoxShadow};`}
    ${props => props.hoverColor && `color: ${props.hoverColor};`}
    ${props => props.hoverCursor && `cursor: ${props.hoverCursor};`}
    ${props => props.hoverFlex && `flex: ${props.hoverFlex};`}
    ${props => props.hoverFlexDirection && `flex-direction: ${props.hoverFlexDirection};`}
    ${props => props.hoverHeight && `height: ${props.hoverHeight};`}
    ${props => props.hoverJustifyContent && `justify-content: ${props.hoverJustifyContent};`}
    ${props => props.hoverMargin && `margin: ${props.hoverMargin};`}
    ${props => props.hoverOverflow && `overflow: ${props.hoverOverflow};`}
    ${props => props.hoverPadding && `padding: ${props.hoverPadding};`}
    ${props => props.hoverWidth && `width: ${props.hoverWidth};`}
  }
`;

export const ContainerV = styled(Container)`
  align-items: center;
`;

export const ContainerH = styled(Container)`
  justify-content: center;
`;

export const ContainerVH = styled(Container)`
  align-items: center;
  justify-content: center;
`;

export const VContainer = styled(Container)`
  flex-direction: column;
`;

export const VContainerV = styled(VContainer)`
  justify-content: center;
`;

export const VContainerH = styled(VContainer)`
  align-items: center;
`;

export const VContainerVH = styled(VContainer)`
  align-items: center;
  justify-content: center;
`;

export const ScrollContainer = styled(Container)`
  display: block;
  max-height: ${props => props.maxHeight || '100%'};
  overflow: ${props => props.overflow || 'auto'};

  ${props => props.hideScroll && `
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    ::-webkit-scrollbar {
      display: none;
    }
  `}
`;
