import Header from './components/Header';
import './App.css';
import AvatarList from './components/AvatarList';
import Post from './components/Post';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
        <Header/>
        <AvatarList/>
        <Post/>
        <Navigation/>
    </div>
  );
}

export default App;
