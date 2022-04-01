import { useState } from 'react';
import Modal from 'react-modal';
import { LoginContainer, Button, Form } from './Login.style';

import style from './Login.module.css';

export default function Login() {
  const [modalIsOpen, setIsOpen] = useState(false);

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

        <Form>
          <div className="step1">
            <h5>Welcome to CodeLeap network!</h5>
          </div>
          <div className="step2">
            <label>Please enter your username</label>
            <input type="text" placeholder="Enter your best email..." />
          </div>
          <div className="step3">
            <button type="submit">ENTER</button>
          </div>
        </Form>

      </Modal>
    </LoginContainer>
  );
}
