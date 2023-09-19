import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Main from './components/Main/MainContainer';
import book2 from './img/book-2.jpg'
import book3 from './img/book-3.jpg'



function App() {
  return (
    <>
  <Navbar />
  <ItemListContainer 
  img={book3}
  title="Jane Austen collection"
  
  />
  <ItemListContainer
  img={book2}
  title="It ends with us"
  />
  <Main/>
    </>

  );
}

export default App;
