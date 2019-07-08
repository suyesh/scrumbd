import React from "react";
import {
  BoardItemTitleContainer,
  StyledIcon,
  HeaderContainer,
  StyledHeader
} from "./index";

function icon(type) {
  if (type === "personal") {
    return "user";
  }
  if (type === "starred") {
    return "star";
  }

  return "users";
}

export function BoardItemTitle({ name, type }) {
  return (
    <BoardItemTitleContainer>
      <StyledIcon name={icon(type)} />
      <HeaderContainer>
        <StyledHeader as="h3" color="#172b4d">
          {name}
        </StyledHeader>
      </HeaderContainer>
    </BoardItemTitleContainer>
  );
}
