import React from "react";
import styled from "styled-components";
import { Button, Icon, Image } from "semantic-ui-react";
import Color from "color";
import { media } from "../utils/deviceSizes";

const buttonColor = color =>
  Color(color)
    .lighten(0.2)
    .whiten(0.2)
    .hex();

const darkenColor = color =>
  Color(color)
    .darken(0.1)
    .hex();

const StyledButton = styled(Button)`
  background-color: ${props => buttonColor(props.navcolor)} !important;
  border: none !important;
  box-shadow: 0 !important;
  text-transform: capitalize !important;
  width: ${props =>
    props.ismobile === "false" && props.name === "search" && "14.286em"};
  display: ${props =>
    props.ismobile === "false" && props.name === "search" && "flex"} !important;
  justify-content: ${props =>
    props.ismobile === "false" &&
    props.name === "search" &&
    "flex-end"} !important;
  cursor: ${props =>
    props.ismobile === "false" && props.name === "search" && "text"} !important;

  &:hover {
    background-color: ${props =>
      darkenColor(buttonColor(props.navcolor))} !important;
  }
`;

const Avatar = styled(Image)`
  cursor: pointer;
  border: 0.143rem solid ${props => buttonColor(props.navcolor)};

  @media ${media.laptop} {
    margin-right: 1.429rem;
    margin-left: 0.714rem;
  }
`;

function NavItem({
  isMobile,
  icon,
  color,
  name,
  onClick,
  showText,
  hide,
  image,
  style,
  navColor
}) {
  if (showText && !isMobile) {
    return (
      <StyledButton
        icon
        color={color}
        name={name}
        navcolor={navColor}
        labelPosition="left"
        onClick={onClick}
        ismobile={isMobile.toString()}
        style={style || {}}
      >
        <Icon name={icon} />
        {name}
      </StyledButton>
    );
  }

  if (hide) {
    return null;
  }

  if (image) {
    return (
      <Avatar
        src={image}
        avatar
        size="mini"
        onClick={onClick}
        navcolor={navColor}
      />
    );
  }

  return (
    <StyledButton
      icon={icon}
      color={color}
      name={name}
      onClick={() => onClick()}
      ismobile={isMobile.toString()}
      style={style || {}}
      navcolor={navColor}
    />
  );
}

export { NavItem };
