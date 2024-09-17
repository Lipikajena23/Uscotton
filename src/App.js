import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsannouncementPage from './Component/Newsannouncement';
import Landingpage from './Component/Landingpage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Growers , {newsData} from './Component/Growers';
import NewsDetail from './Component/NewsDetails';

function App() {
  return (
    <div className="App">
  
   <Router>
    <Routes>
      <Route path="/" element={ <Landingpage/>}/>
      <Route path="/news&announcement" element={<NewsannouncementPage/> }/>
      <Route path="/grower-information" element={<Growers/>}/>
      <Route 
            path="/news/:id" 
            element={<NewsDetail newsData={newsData} />}  // Pass newsData via props
          />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
