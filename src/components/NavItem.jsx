import React from "react";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";
import Color from "color";

const StyledButton = styled(Button)`
  background-color: #599ac3 !important;
  border: none !important;
  box-shadow: 0 !important;
  text-transform: capitalize !important;
  width: ${props =>
    !props.ismobile === "true" && props.name === "search" && "200px"};
  display: ${props =>
    !props.ismobile === "true" && props.name === "search" && "flex"} !important;
  justify-content: ${props =>
    !props.ismobile === "true" &&
    props.name === "search" &&
    "flex-end"} !important;
  cursor: ${props =>
    !props.ismobile === "true" && props.name === "search" && "text"} !important;

  &:hover {
    background-color: ${Color("#599ac3")
      .darken(0.1)
      .hex()} !important;
  }
`;

function NavItem({ isMobile, icon, color, name, onClick, showText, hide }) {
  if (showText && !isMobile) {
    return (
      <StyledButton
        icon
        color={color}
        name={name}
        labelPosition="left"
        onClick={onClick}
        ismobile={isMobile.toString()}
      >
        <Icon name={icon} />
        {name}
      </StyledButton>
    );
  }

  if (hide) {
    return null;
  }

  return (
    <StyledButton
      icon={icon}
      color={color}
      name={name}
      onClick={() => onClick()}
      ismobile={isMobile.toString()}
    />
  );
}

export { NavItem };
