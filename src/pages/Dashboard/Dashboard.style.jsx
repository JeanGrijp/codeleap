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
    
    div.sup {
      width: 100%;
      height: 8vh;
      background-color: #000;
      color: #FFF;
      font-size: 0.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;
    }
    
  }
  
  ${media.desktopMiddle} {
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
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;
    }
  }

  ${media.desktop} {
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
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;
    }
  }
`;

export const CreatePost = styled.form`

  ${media.mobile} {
    margin: 5% 0;
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
    border: 1px solid #000;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    box-shadow: 0px 0px 13px 1px rgba(0,0,0,0.75);

    div.post-title {
      background-color: #000;
      color: #FFF;
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2% 5%;
      word-break: break-all;
    }
    
    div.post-content {

      width: 100%;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding: 5%;
      word-break: break-all;
      font-size: 0.8rem;


      div.meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 5%;

        p {
          color: #c4c4c4;
        }
      }
    }
  }

  ${media.desktopMiddle} {
    margin: 2% 0;
    width: 90%;
    border: 1px solid #000;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    box-shadow: 0px 0px 13px 1px rgba(0,0,0,0.75);

    div.post-title {
      background-color: #000;
      color: #FFF;
      width: 100%;
      height: 10%;
      max-height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1% 5%;
      font-size: 1.2rem;
      word-break: break-all;

    }
    
    div.post-content {
      width: 100%;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding: 2% 5%;
      word-break: break-all;

      div.meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 5%;

        p {
          color: #c4c4c4;
        }
      }

    }
  }

  ${media.desktop} {
    margin: 2% 0;
    width: 90%;
    border: 1px solid #000;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    box-shadow: 0px 0px 13px 1px rgba(0,0,0,0.75);

    div.post-title {
      background-color: #000;
      color: #FFF;
      width: 100%;
      height: 10%;
      max-height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5% 5%;
      font-size: 1.3rem;
      word-break: break-all;

    }
    
    div.post-content {
      width: 100%;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding: 2% 5%;
      word-break: break-all;

      div.meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 5%;

        p {
          color: #c4c4c4;
        }
      }

    }
  }
`;

export const FormEdit = styled.form`

${media.mobile} {
    width: 90%;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    padding: 1% 2%;

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
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    padding: 1% 2%;

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
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;


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

export const FormDelete = styled.form`

  ${media.mobile} {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 2% 5%;

    h4 {
      font-size: 1.1rem;
    }

    div.btn {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      button {
        margin: 0 25px;
        width: 100px;
        height: 30px;
        background-color: #000;
        color: #FFF;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
          background-color: #464646;
          transition: 0.5s;
        }
      }
    }
  }

  ${media.desktopMiddle} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 2% 5%;

    h4 {
      font-size: 1.1rem;
    }

    div.btn {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      button {
        margin: 0 25px;
        width: 100px;
        height: 30px;
        background-color: #000;
        color: #FFF;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
          background-color: #464646;
          transition: 0.5s;
        }
      }
    }

  }

  ${media.desktop} {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 2% 5%;

    h4 {
      font-size: 1.1rem;
    }

    div.btn {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      button {
        margin: 0 25px;
        width: 100px;
        height: 30px;
        background-color: #000;
        color: #FFF;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
          background-color: #464646;
          transition: 0.5s;
        }
      }
    }
  }
    
    

  
`;
