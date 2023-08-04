import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Beta from "./pages/Beta";
import Beta2 from "./pages/Beta2";
import Login from "./pages/Login";
import ImageReview from "./pages/ImageReview";
import Communities from "./pages/Communities";
// import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="" element={<Beta2 />} />
      <Route path="beta" element={<Beta />} />
      
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/">
        <Route element={<Navbar />}>
          <Route path="feed" element={<Feed />} />
          <Route path="profile" element={<Profile />} />
          <Route path="communities" element={<Communities />} />
          <Route path="/image/:imageUrl" element={<ImageReview />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
