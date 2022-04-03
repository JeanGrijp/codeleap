import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { UserContext } from '../../context/UserContext';
import { CreatePost, DashboardContainer, Posts } from './Dashboard.style';

export default function Dashboard() {
  const navigate = useNavigate();
  const { userName } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  if (userName.length === 0) {
    navigate('/');
  }

  return (
    <DashboardContainer>
      <div className="sup">
        <h1>CodeLeap Network</h1>
      </div>
      <CreatePost
        disb={title.length > 0 && content.length > 0}
        onSubmit={(e) => {
          e.preventDefault();
          if (title.length > 0 && content.length > 0) {
            setPosts([...posts, [title, content]]);
            setTitle('');
            setContent('');
          }
        }}
      >
        <h4>What’s on your mind?</h4>
        <label htmlFor="title">
          Title
          <input value={title} onChange={(e) => setTitle(e.target.value)} id="title" type="text" placeholder="Hello World" />
        </label>
        <label htmlFor="content">
          Content
          <textarea value={content} onChange={(e) => setContent(e.target.value)} id="content" type="text" placeholder="Content here" />
        </label>
        <div className="btn">
          <button type="submit">CREATE</button>
        </div>
      </CreatePost>
      {posts.map((element) => (

        <Posts>
          <div className="post-title">
            <h4>{element[0]}</h4>
            <div>
              <FaEdit style={{ margin: '0 5px' }} />
              <FaTrashAlt style={{ margin: '0 5px' }} />
            </div>
          </div>
          <div className="post-content">
            <p>{element[1]}</p>
          </div>
        </Posts>

      ))}
    </DashboardContainer>
  );
}
