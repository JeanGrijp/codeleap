import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Modal from 'react-modal';

import moment from 'moment';
import { UserContext } from '../../context/UserContext';
import {
  CreatePost, DashboardContainer, FormDelete, FormEdit, Posts,
} from './Dashboard.style';

import style from './Dashboard.module.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const { userName } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [titleEdit, setTitleEdit] = useState('');
  const [contentEdit, setContentEdit] = useState('');
  const [indexEdit, setIndexEdit] = useState(0);
  const [modalEditIsVisible, setModalEditIsVisible] = useState(false);
  const [modalDeleteIsVisible, setModalDeleteIsVisible] = useState(false);
  const [timeToRerender, setTimeToRerender] = useState(0);

  moment.locale('pt-br');

  if (userName.length === 0) {
    navigate('/');
  }

  setInterval(() => {
    setTimeToRerender(timeToRerender + 1);
  }, 1000 * 30);

  return (
    <DashboardContainer>

      <Modal
        isOpen={modalEditIsVisible}
        onRequestClose={() => {
          setModalEditIsVisible(false);
        }}
        className={style.customStylesModal}
        overlayClassName={style.overlay}
      >
        <FormEdit
          onSubmit={(e) => {
            e.preventDefault();
            if (titleEdit.length > 0 && contentEdit.length > 0) {
              setPosts([
                ...posts.slice(0, indexEdit),
                [titleEdit, contentEdit, moment().format()],
                ...posts.slice(indexEdit + 1),
              ]);
              setModalEditIsVisible(false);
              setTitleEdit('');
              setContentEdit('');
            }
          }}
          disb={titleEdit.length > 0 && contentEdit.length > 0}
        >
          <h4>Edit item</h4>
          <label htmlFor="title">
            Title
            <input
              value={titleEdit}
              onChange={(e) => setTitleEdit(e.target.value)}
              id="title"
              type="text"
              placeholder="Hello World"
            />
          </label>
          <label htmlFor="content">
            Content
            <textarea
              value={contentEdit}
              onChange={(e) => setContentEdit(e.target.value)}
              id="content"
              type="text"
              placeholder="Content here"
            />
          </label>
          <div className="btn">
            <button type="submit">SAVE</button>
          </div>
        </FormEdit>
      </Modal>

      <Modal
        isOpen={modalDeleteIsVisible}
        onRequestClose={() => setModalDeleteIsVisible(false)}
        className={style.customStylesModal}
        overlayClassName={style.overlay}
      >
        <FormDelete
          onSubmit={(e) => {
            e.preventDefault();
            setPosts([
              ...posts.slice(0, indexEdit),
              ...posts.slice(indexEdit + 1),
            ]);
            setModalDeleteIsVisible(false);
          }}
          disb={userName.length > 0}
        >
          <h4>Are you sure you want to delete this item?</h4>

          <div className="btn">
            <button
              onClick={() => setModalDeleteIsVisible(false)}
              type="button"
            >
              Cancel

            </button>
            <button type="submit">OK</button>
          </div>
        </FormDelete>
      </Modal>

      <div className="sup">
        <h1>CodeLeap Network</h1>
        <h5>
          Olá
          {' '}
          {userName}
          {' '}
          😊
        </h5>
      </div>
      <CreatePost
        disb={title.length > 0 && content.length > 0}
        onSubmit={(e) => {
          e.preventDefault();
          if (title.length > 0 && content.length > 0) {
            setPosts([...posts, [title, content, moment().format()]]);
            setTitle('');
            setContent('');
          }
          console.log(posts);
        }}
      >
        <h4>What’s on your mind?</h4>
        <label htmlFor="title">
          Title
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            placeholder="Hello World"
          />
        </label>
        <label htmlFor="content">
          Content
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            id="content"
            type="text"
            placeholder="Content here"
          />
        </label>
        <div className="btn">
          <button type="submit">CREATE</button>
        </div>
      </CreatePost>
      {posts.map((element, index) => (

        <Posts key={`${element}`}>
          <div className="post-title">
            <h4>{element[0]}</h4>
            <div>
              <FaEdit
                onClick={() => {
                  setIndexEdit(index);
                  setModalEditIsVisible(true);
                }}
                style={{ margin: '0 5px', cursor: 'pointer' }}
              />
              <FaTrashAlt
                onClick={() => {
                  setIndexEdit(index);
                  setModalDeleteIsVisible(true);
                }}
                style={{ margin: '0 5px', cursor: 'pointer' }}
              />
            </div>
          </div>
          <div className="post-content">
            <div className="meta">
              <p>{`@${userName}`}</p>
              <p>
                {' '}
                {moment(element[2]).fromNow()}
              </p>

            </div>
            <p>{element[1]}</p>
          </div>
        </Posts>

      ))}
    </DashboardContainer>
  );
}
