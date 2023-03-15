import styled from "styled-components";

export const Nav = styled.div`
  padding: 0 120px;
  width: 100%;
  position: absolute;
  .nav {
    &-head {
      height: 120px;
      display: flex;
      align-items: center;
      width: 100%;
    }
    &-container {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
    &-logo {
      height: 100%;
    }
    &-icons {
      position: relative;
      right: 0;
      ul {
        display: flex;
        text-decoration: none;
        list-style-type: none;
        justify-content: space-around;
        height: 100%;
        > li {
          margin: auto 10px;
          padding: 10px;
          border-radius: 10px;
          height: 100%;
          font-weight: bold;
          color: white;
          cursor: pointer;
          :hover {
            transition: 0.3s;
            color: #ff4c29;
          }
        }
      }
    }
  }
`;

export default styled;
