import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Modal from 'react-modal';
import { BiExit } from 'react-icons/bi';
import moment from 'moment';
import { UserContext } from '../../context/UserContext';
import {
  CreatePost, DashboardContainer, FormDelete, FormEdit, Posts,
} from './Dashboard.style';

import style from './Dashboard.module.css';
import useFetch from '../../Hooks/useFetch';

export default function Dashboard() {
  const navigate = useNavigate();
  const { userName, setUserName } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [titleEdit, setTitleEdit] = useState('');
  const [contentEdit, setContentEdit] = useState('');
  const [indexEdit, setIndexEdit] = useState(0);
  const [modalEditIsVisible, setModalEditIsVisible] = useState(false);
  const [modalDeleteIsVisible, setModalDeleteIsVisible] = useState(false);
  // const [timeToRerender, setTimeToRerender] = useState(0);

  moment.locale('pt-br');

  if (userName.length === 0) {
    navigate('/');
  }

  // setInterval(() => {
  //   setTimeToRerender(timeToRerender + 1);
  // }, 1000 * 60);

  useEffect(() => {
    try {
      const postsUpdate = localStorage.getItem('posts');
      if (postsUpdate === null) {
        localStorage.setItem('posts', posts);
      } else {
        const newArray = JSON.parse(postsUpdate);
        setPosts(newArray);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { data: dataPost, isFetching: loadPost } = useFetch('posts');
  const { data: dataUsers, isFetching: loadUsers } = useFetch('users');

  // const handleClickPost = (num) => {
  //   const { data: dataPost, load } = useQuery('posts', async () => {
  //     const response = await api.get(`posts/${num}`);
  //     return response.data;
  //   }, {
  //     refetchOnWindowFocus: true,
  //     staleTime: 1000 * 60,
  //   });

  //   return { dataPost, load };
  // };

  console.log(dataPost);
  console.log(loadPost);
  console.log(dataUsers);
  console.log(loadUsers);

  console.log('renderizou');

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
                [titleEdit, contentEdit, moment().format(), userName],
                ...posts.slice(indexEdit + 1),
              ]);
              setModalEditIsVisible(false);
              setTitleEdit('');
              setContentEdit('');
              localStorage.setItem('posts', JSON.stringify(posts));
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
              data-testid="titleEdit"
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
              data-testid="contentEdit"
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
            localStorage.setItem('posts', posts);
          }}
          disb={userName.length > 0}
        >
          <h4>Are you sure you want to delete this item?</h4>

          <div className="btn">
            <button
              onClick={() => setModalDeleteIsVisible(false)}
              data-testid="buttonDeletePost"
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
        <div>

          <h5 data-testid="userName">
            Olá
            {' '}
            {userName}
            {' '}
            😊
          </h5>
          <BiExit
            style={{ cursor: 'pointer' }}
            data-testid="exitButton"
            onClick={() => {
              setUserName('');
              navigate('/');
            }}
          />
        </div>
      </div>
      <CreatePost
        disb={title.length > 0 && content.length > 0}
        onSubmit={(e) => {
          e.preventDefault();
          if (title.length > 0 && content.length > 0) {
            const aux = [[title, content, moment().format(), userName], ...posts];
            setPosts(aux);
            setTitle('');
            setContent('');
            localStorage.setItem('posts', JSON.stringify(aux));
          }
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
            max={500}
            data-testid="title"
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
            max={50000}
            data-testid="content"

          />
        </label>
        <div className="btn">
          <button
            disabled={!(title.length > 0 && content.length > 0)}
            type="submit"
            data-testid="CREATE"

          >
            CREATE
            {' '}

          </button>
        </div>
      </CreatePost>
      { posts.map((element, index) => (

        <Posts key={`${element}`}>
          <div className="post-title">
            <h4>{element[0]}</h4>
            {element[3] === userName

              ? (
                <div>
                  <FaEdit
                    data-testid="editModalPostButton"
                    onClick={() => {
                      setIndexEdit(index);
                      setTitleEdit(element[0]);
                      setContentEdit(element[1]);
                      setModalEditIsVisible(true);
                    }}
                    style={{ margin: '0 5px', cursor: 'pointer' }}
                  />
                  <FaTrashAlt
                    data-testid="deleteModalPostButton"
                    onClick={() => {
                      setIndexEdit(index);
                      setModalDeleteIsVisible(true);
                    }}
                    style={{ margin: '0 5px', cursor: 'pointer' }}
                  />
                </div>
              )
              : <div />}
          </div>
          <div className="post-content">
            <div className="meta">
              <p data-testid="userNamePost">{`@${element[3]}`}</p>
              <p>
                {' '}
                {moment(element[2]).fromNow()}
              </p>

            </div>
            <p>{element[1]}</p>
          </div>
        </Posts>

      )) }

      {
        dataPost
          ? dataPost.map((element) => (
            <Posts
              key={`${element.id}`}
              onClick={() => {
                console.log({ ...dataPost, ...dataUsers });
              }}
            >
              <div className="post-title">
                <h4>{element.title}</h4>

                {/* <div>
                  <FaEdit
                    data-testid="editModalPostButton"
                    style={{ margin: '0 5px', cursor: 'pointer' }}
                  />
                  <FaTrashAlt
                    data-testid="deleteModalPostButton"
                    style={{ margin: '0 5px', cursor: 'pointer' }}
                  />
                </div> */}

              </div>
              <div className="post-content">
                <div className="meta">
                  <p data-testid="userNamePost">{`@${element.id}`}</p>
                  <p>
                    {' '}
                    {moment(element[2]).fromNow()}
                  </p>

                </div>
                <p>{element.body}</p>
              </div>
            </Posts>
          )) : <div />
      }
    </DashboardContainer>
  );
}
