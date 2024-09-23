import Main from "./Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "./sections/NavSection/Nav";
import Home from "./sections/HomeSection/Home";
import Accomodation from "./sections/HomeSection/accomodation";
import Dining from "./sections/DinningSection/Dining";
import GallerySection from "./sections/GalarySection/Gallary";
import ReviewsSection from "./sections/reviews/Reviews";
import ContactUsSection from "./sections/ContactSection/contactus";
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Nav/>}>
                  <Route index element={<Home/>}/>
                  <Route path={"rooms"} element={<Accomodation/>}/>
                  <Route path={"dining"} element={<Dining/>}/>
                  <Route path={""} element={<GallerySection/>}/>
                  <Route path={""} element={<ReviewsSection/>}/>
                  <Route path={"contact"} element={<ContactUsSection/>}/>
              </Route>
          </Routes>
          <Main/>
      </BrowserRouter>
  );
}

export default App;
