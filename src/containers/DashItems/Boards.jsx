import React, { Fragment } from "react";
import styled from "styled-components";
import { Header, Icon } from "semantic-ui-react";

const BoardItem = styled.div`
  height: fit-content;
  margin-bottom: 10px;
`;

const BoardCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  grid-gap: 10px;
  grid-auto-rows: 94px;
  padding: 10px;
`;
const BoardCard = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`;

function BoardItemTitle({ title, icon }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "40px",
        padding: "5px",
        margin: 0
      }}
    >
      <Icon
        name={icon}
        style={{
          alignSelf: "flex-end",
          marginTop: "auto",
          marginBottom: "auto",
          marginRight: "20px"
        }}
      />

      <div style={{ alignSelf: "flex-end" }}>
        <Header style={{ color: "#172b4d" }} as="h3">
          {title}
        </Header>
      </div>
    </div>
  );
}

function Boards() {
  return (
    <Fragment>
      <BoardItem>
        <BoardItemTitle icon="star outline" title="Starred Boards" />
        <BoardCardContainer>
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </BoardCardContainer>
      </BoardItem>
      <BoardItem>
        <BoardItemTitle icon="user" title="Personal Boards" />
        <div>hello</div>
      </BoardItem>
      <BoardItem>
        <BoardItemTitle icon="users" title="SIMS" />
        <div>hello</div>
      </BoardItem>
    </Fragment>
  );
}

export default Boards;
