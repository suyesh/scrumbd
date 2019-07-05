import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { Header, Icon } from "semantic-ui-react";
import axios from "axios";

const unsplashAPi =
  "aab800b211a279fa2ebc14a6c1c3e16f470a2d8dcf3e73ec8d0e7d162af4c0b2";

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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.image});
  cursor: pointer;
  border-radius: 3px;
  -webkit-box-shadow: 1px 1px 5px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 5px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 5px -2px rgba(0, 0, 0, 0.75);

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${props => props.image});
  }
`;

const BoardItemTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  padding: 5px;
  margin: 0;
`;

const StyledIcon = styled(Icon)`
  align-self: flex-end !important;
  margin-top: auto !important;
  margin-bottom: auto !important;
  margin-right: 15px !important;
`;

const HeaderContainer = styled.div`
  align-self: flex-end;
`;

const StyledHeader = styled(Header)`
  color: #172b4d !important;
`;

function BoardItemTitle({ title, icon }) {
  return (
    <BoardItemTitleContainer>
      <StyledIcon name={icon} />
      <HeaderContainer>
        <StyledHeader as="h3">{title}</StyledHeader>
      </HeaderContainer>
    </BoardItemTitleContainer>
  );
}

function BoardCards({ images }) {
  return images.map((image, index) => <BoardCard key={index} image={image} />);
}

function Boards() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          client_id: unsplashAPi,
          query: "mountains"
        }
      })
      .then(res => {
        setImages(res.data.results.map(image => image.urls.regular));
      });
  }, []);
  return (
    <Fragment>
      <BoardItem>
        <BoardItemTitle icon="star outline" title="Starred Boards" />
        <BoardCardContainer>
          <BoardCards images={images} />
        </BoardCardContainer>
      </BoardItem>
      <BoardItem>
        <BoardItemTitle icon="user" title="Personal Boards" />
        <BoardCardContainer>
          <BoardCards images={images} />
        </BoardCardContainer>
      </BoardItem>
      <BoardItem>
        <BoardItemTitle icon="users" title="SIMS" />
        <BoardCardContainer>
          <BoardCards images={images} />
        </BoardCardContainer>
      </BoardItem>
    </Fragment>
  );
}

export default Boards;
