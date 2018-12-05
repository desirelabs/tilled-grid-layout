import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "First" "Second" "Third" "Fourth" "Fifth" "Sixth" "Seventh";
  grid-gap: 30px;
  grid-rows-gap: 30px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: "First Second" "Third Third" "Third Third" "Fourth Fifth" "Sixth Seventh";
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: "First Second Second" "Third Third Fourth" "Third Third Fifth" "Sixth Seventh Seventh";
  }
`;

const GridItem = styled.div``;

const First = styled(GridItem).attrs({
  className: "First"
})`
  grid-area: First;
  background: url(https://lorempicsum.com/futurama/600/400/1) no-repeat 50% /
    cover;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const Second = styled(GridItem).attrs({
  className: "Second"
})`
  grid-area: Second;
  background: url(https://lorempicsum.com/futurama/600/400/2) no-repeat 50% /
    cover;
`;

const Third = styled(GridItem).attrs({
  className: "Third"
})`
  grid-area: Third;
  background: url(https://lorempicsum.com/futurama/600/400/3) no-repeat 50% /
    cover;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const Fourth = styled(GridItem).attrs({
  className: "Fourth"
})`
  grid-area: Fourth;
  background: url(https://lorempicsum.com/futurama/600/400/4) no-repeat 50% /
    cover;
`;

const Fifth = styled(GridItem).attrs({
  className: "Fifth"
})`
  grid-area: Fifth;
  background: url(https://lorempicsum.com/futurama/600/400/5) no-repeat 50% /
    cover;
`;

const Sixth = styled(GridItem).attrs({
  className: "Sixth"
})`
  grid-area: Sixth;
  background: url(https://lorempicsum.com/futurama/600/400/6) no-repeat 50% /
    cover;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const Seventh = styled(GridItem).attrs({
  className: "Seventh"
})`
  grid-area: Seventh;
  background: url(https://lorempicsum.com/futurama/600/400/7) no-repeat 50% /
    cover;
`;

const App = () => (
  <Grid>
    <First />
    <Second />
    <Third />
    <Fourth />
    <Fifth />
    <Sixth />
    <Seventh />
  </Grid>
);

export default App;
