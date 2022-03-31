import styled from "styled-components";
import media from "../../utils/media";

export const HomeContainer = styled.main`

  @keyframes logoFade {

    0% {
      display: flex;
    }
    100% {
      display: none;
    }
  }

  ${media.mobile} {
    width: 100%;
    height: 100vh;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      width: 80%;
      animation: logoFade 3s ease-in-out 2s initial alternate;
    }

  }
  ${media.desktopMiddle} {
    width: 100%;
    height: 100vh;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50%;
    }
  }
  ${media.desktop} {
    width: 100%;
    height: 100vh;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 20%;
    }
  }


`;
