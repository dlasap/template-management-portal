import styled from "styled-components";

const ninja = require("../assets/imgs/background-landing.png");
const gradient = require("../assets/imgs/gradient-bg.png");
const mountains = require("../assets/imgs/mountain.png");
const trees = require("../assets/imgs/trees.png");
const temple = require("../assets/imgs/temple.png");
export const LandingContainer = styled.div`
  background: url(${ninja}), url(${trees}), url(${temple}), url(${mountains}),
    url(${gradient});
  background-size: cover;
  background-repeat: no-repeat;
`;

export default styled;
