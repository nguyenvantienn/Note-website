import {useDispatch} from 'react-redux'

import './App.css';
import HomePage from './container/HomePage';
import * as actions from './redux/actions'

function App() {
  const dispatch = useDispatch()
  dispatch(actions.getPosts.getPostsRepuest());
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
