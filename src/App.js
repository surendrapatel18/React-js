import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './homePage/homePage';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import AboutPage from './aboutPage/aboutPage';
import BlogsPage from './blogsPage/blogsPage';
import HelpPage from './helpPage/helpPage';
import TermsPage from './termsPage/termsPage';
import PrivacyPage from './privacyPage/privacyPage';
import ErrorPage from './errorPage/errorPage';
import Scroll from './scoll/scroll';


function App() {
  return (
    <>
 
      <BrowserRouter>
      <Scroll/>
      <Routes>
        <Route path="/" element={<><Navbar/><HomePage/><Footer/></>}></Route>
        <Route path="/about" element={<><Navbar/><AboutPage/><Footer/></>}></Route>
        <Route path="/blog" element={<><Navbar/><BlogsPage/><Footer/></>}></Route>
        <Route path="/help" element={<><Navbar/><HelpPage/><Footer/></>}></Route>
        <Route path="/terms" element={<><Navbar/><TermsPage/><Footer/></>}></Route>
        <Route path="/privacy" element={<><Navbar/><PrivacyPage/><Footer/></>}></Route>
        <Route path="" element={<><Navbar/><ErrorPage/><Footer/></>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
