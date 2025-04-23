import './styles/App.css'; /* изменить путь */

import Navbar from './components/Navbar';
import Gallery from "./components/Gallery";
import Content from "./components/Content";
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar active='1'/>
      <Gallery/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;