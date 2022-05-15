import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import NewHome from './NewHome';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 


function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<NewHome />} />
            <Route path="/create" element={<Create />} />             
            <Route path="/blogs/:id" element={<BlogDetails />} />           
            <Route path="*" element={<NotFound />} />          
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;