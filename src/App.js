import './App.css';
import { useSelector } from 'react-redux';
import PostList from './feature/post/postList';
import { selectAllList } from './feature/List';
import AddPostFrom from './feature/post/addPostFrom';

function App() {
  console.log(useSelector(selectAllList))
  return (
    <div className="App">
      <AddPostFrom/>
      <PostList/>


    </div>
  );
}

export default App;
