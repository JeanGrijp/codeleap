import styled from 'styled-components';
import media from '../../utils/media';

export const DashboardContainer = styled.section`

  ${media.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid red;
    
    div.sup {
      width: 100%;
      height: 8vh;
      background-color: #000;
      color: #FFF;
      font-size: 0.8rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 5%;
    }
    
  }
  
  ${media.desktopMiddle} {
    border: 2px solid green;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    div.sup {
      width: 100%;
      height: 8vh;
      background-color: #000;
      color: #FFF;
      font-size: 0.8rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 5%;
    }
  }

  ${media.desktop} {
    border: 2px solid blue;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    div.sup {
      width: 100%;
      height: 8vh;
      background-color: #000;
      color: #FFF;
      font-size: 0.8rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 5%;
    }
  }
`;

export const CreatePost = styled.form`

  ${media.mobile} {
    margin: 10% 0;
    width: 90%;
    height: 50vh;
    border: 1px solid #000;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    padding: 5%;

    h4 {
      font-size: 1.5rem;
    }


      label {
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
      }
  
      input {
        width: 100%;
        height: 30px;
        border: 1px solid #000000;
        background-color: none;
        border-radius: 5px;
        margin-top: 5px;
        padding-left: 5px;
      }

      textarea {
        width: 100%;
        height: 60px;
        border: 1px solid #000000;
        background-color: none;
        border-radius: 5px;
        margin-top: 5px;
        padding-left: 5px;
      }

      div.btn {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        button {
          border-radius: 5px;
          width: 25%;
          max-width: 100px;
          height: 30px;
          background-color: ${(props) => (props.disb ? '#000000' : '#c4c4c4')};
          color: #ffffff;
          border: none;
          cursor: ${(props) => (props.disb ? 'pointer' : 'not-allowed')};
        }
      }
    

  }

  ${media.desktopMiddle} {
    margin: 3% 0;
    width: 90%;
    height: 50vh;
    border: 1px solid #000;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    padding: 5%;

    h4 {
      font-size: 1.5rem;
    }

      label {
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
      }
  
      input {
        width: 100%;
        height: 30px;
        border: 1px solid #000000;
        background-color: none;
        border-radius: 5px;
        margin-top: 5px;
        padding-left: 5px;
      }

      textarea {
        width: 100%;
        height: 60px;
        border: 1px solid #000000;
        background-color: none;
        border-radius: 5px;
        margin-top: 5px;
        padding-left: 5px;
      }

      div.btn {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        button {
          border-radius: 5px;
          width: 25%;
          max-width: 100px;
          height: 30px;
          background-color: ${(props) => (props.disb ? '#000000' : '#c4c4c4')};
          color: #ffffff;
          border: none;
          cursor: ${(props) => (props.disb ? 'pointer' : 'not-allowed')};
        }
      }

  }

  ${media.desktop} {
    margin: 2% 0;
    width: 90%;
    height: 60vh;
    border: 1px solid #000;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    padding: 5%;

    h4 {
      font-size: 1.5rem;
    }
    
      label {
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
      }
  
      input {
        width: 100%;
        height: 30px;
        border: 1px solid #000000;
        background-color: none;
        border-radius: 5px;
        margin-top: 5px;
        padding-left: 5px;
      }

      textarea {
        width: 100%;
        height: 60px;
        border: 1px solid #000000;
        background-color: none;
        border-radius: 5px;
        margin-top: 5px;
        padding-left: 5px;
      }

      div.btn {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        button {
          border-radius: 5px;
          width: 25%;
          max-width: 100px;
          height: 30px;
          background-color: ${(props) => (props.disb ? '#000000' : '#c4c4c4')};
          color: #ffffff;
          border: none;
          cursor: ${(props) => (props.disb ? 'pointer' : 'not-allowed')};
        }
      }
  }
`;

export const Posts = styled.article`

  ${media.mobile} {
    margin: 5% 0;
    width: 90%;
    min-height: 200px;
    border: 1px solid #000;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    div.post-title {
      background-color: #000;
      color: #FFF;
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5%;
      word-break: break-all;

    }
    
    div.post-content {
      width: 100%;
      height: 80%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 5%;
      word-break: break-all;
    }
  }

  ${media.desktopMiddle} {
    margin: 5% 0;
    width: 90%;
    min-height: 200px;
    border: 1px solid #000;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    div.post-title {
      background-color: #000;
      color: #FFF;
      width: 100%;
      height: 10%;
      max-height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5%;
      font-size: 1.5rem;
      word-break: break-all;

    }
    
    div.post-content {
      width: 100%;
      height: 80%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 5%;
      word-break: break-all;
    }
  }

  ${media.desktop} {
    margin: 5% 0;
    width: 90%;
    min-height: 200px;
    border: 1px solid #000;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    div.post-title {
      background-color: #000;
      color: #FFF;
      width: 100%;
      height: 10%;
      max-height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5%;
      font-size: 1.5rem;
      word-break: break-all;

    }
    
    div.post-content {
      width: 100%;
      height: 90%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 5%;
      word-break: break-all;
    }
  }
`;
