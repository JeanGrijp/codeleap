import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { LoginContainer, Button, Form } from './Login.style';

import style from './Login.module.css';
import { UserContext } from '../../context/UserContext';

export default function Login() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const { userName, setUserName } = useContext(UserContext);

  return (
    <LoginContainer>
      <Button onClick={() => setIsOpen(true)}>
        CodeLeap
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        className={style.customStylesModal}
        overlayClassName={style.overlay}
      >
        <Form disb={userName.length > 0}>
          <div className="step1">
            <h5>Welcome to CodeLeap network!</h5>
          </div>
          <div className="step2">
            <label htmlFor="login">
              Please enter your username
              <input id="login" onChange={(e) => setUserName(e.target.value)} value={userName} type="text" placeholder="Enter your username" />
            </label>
          </div>
          <div className="step3">
            <button type="submit">ENTER</button>
          </div>
        </Form>
      </Modal>
    </LoginContainer>
  );
}
