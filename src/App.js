import { Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Creat from "./Creat";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
function App() {
  return (        
    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/creat" element={<Creat/>}/>
          <Route path="/blog/:id" element={<BlogDetails/>}/>
          <Route path="*" element={<NotFound/>}/>          
        </Routes>
      </div>
    </div>   
  );
}
export default App;
