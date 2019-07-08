import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { Header, Icon } from "semantic-ui-react";
import axios from "axios";
import { truncate } from "lodash";

const unsplashAPi =
  "aab800b211a279fa2ebc14a6c1c3e16f470a2d8dcf3e73ec8d0e7d162af4c0b2";

const BoardItem = styled.div`
  height: fit-content;
  margin-bottom: 0.714rem;
`;

const BoardCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13.571rem, 1fr));
  grid-gap: 0.714rem;
  grid-auto-rows: 6.714rem;
  padding: 0.714rem;
`;

const BoardCard = styled.div`
  background-color: #036aa7;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${props => props.image});
  cursor: pointer;
  border-radius: 0.214rem;
  color: white;
  padding: 0.714em 0.714em 0 0.714em;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${props => props.image});
  }
`;

const BoardItemTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2.857rem;
  padding: 0.357rem;
  margin: 0;
`;

const StyledIcon = styled(Icon)`
  align-self: flex-end !important;
  margin-top: auto !important;
  margin-bottom: auto !important;
  margin-right: 1.071rem !important;
`;

const HeaderContainer = styled.div`
  align-self: flex-end;
`;

const StyledHeader = styled(Header)`
  color: ${props => props.color} !important;
`;

const Star = styled(Icon)`
  align-self: flex-end !important;
  position: absolute !important;
  bottom: 0 !important;
  margin-bottom: 1.071em !important;
`;

function BoardItemTitle({ title, icon }) {
  return (
    <BoardItemTitleContainer>
      <StyledIcon name={icon} />
      <HeaderContainer>
        <StyledHeader as="h3" color="#172b4d">
          {title}
        </StyledHeader>
      </HeaderContainer>
    </BoardItemTitleContainer>
  );
}

function BoardCards({ images }) {
  const [star, showStar] = useState(null);
  return images.map((image, index) => (
    <BoardCard
      key={index}
      image={image}
      onMouseOver={() => showStar(index)}
      onMouseOut={() => showStar(null)}
    >
      <StyledHeader color="white">
        {truncate("Test Board Name dskfjds dsfsdfsadfsdaf sdgsadgasdg")}
      </StyledHeader>
      {star === index && <Star name="star outline" color="yellow" />}
    </BoardCard>
  ));
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
