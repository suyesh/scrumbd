import React from "react";
import styled from "styled-components";
import { Button, Icon, Image } from "semantic-ui-react";
import Color from "color";

const StyledButton = styled(Button)`
  background-color: #599ac3 !important;
  border: none !important;
  box-shadow: 0 !important;
  text-transform: capitalize !important;
  width: ${props =>
    props.ismobile === "false" && props.name === "search" && "200px"};
  display: ${props =>
    props.ismobile === "false" && props.name === "search" && "flex"} !important;
  justify-content: ${props =>
    props.ismobile === "false" &&
    props.name === "search" &&
    "flex-end"} !important;
  cursor: ${props =>
    props.ismobile === "false" && props.name === "search" && "text"} !important;

  &:hover {
    background-color: ${Color("#599ac3")
      .darken(0.1)
      .hex()} !important;
  }
`;

const Avatar = styled(Image)`
  margin-right: 20px;
  margin-left: 10px;
  cursor: pointer;
  border: 2px solid #599ac3;
`;

function NavItem({
  isMobile,
  icon,
  color,
  name,
  onClick,
  showText,
  hide,
  image
}) {
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

  if (image) {
    return <Avatar src={image} avatar size="mini" onClick={onClick} />;
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
