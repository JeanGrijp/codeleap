import styled from 'styled-components';
import media from '../../utils/media';

const HomeContainer = styled.main`
  ${media.mobile} {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      width: 80%;
    }
  }
  ${media.desktopMiddle} {
    width: 100%;
    height: 100vh;
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
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 20%;
    }
  }
`;

export default HomeContainer;
