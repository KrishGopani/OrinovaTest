
// PREVIOUS⭐⭐⭐⭐⭐
// import "./styles.css";
// // dont forget to import
// import Navbar from "./components/Navbar";
// // to use "Link" you need to import "Routes"
// import { Route, Routes } from "react-router-dom";

// //importing other pages
// import Home from "./routes/Home";
// import Contact from "./routes/Career";
// import Service from "./routes/Business_Brand";
// import About from "./routes/About";

// export default function App() {
//   return (
//     <div className="App">
//       {/* <h1>Hello CodeSandbox</h1> */}
//       {/* if using link then need to put Navbar under Routes */}
//       {/* if not using "Link" and using "a" then no need to wrap under "Routes" */}
//       {/* <Routes>
//         <Navbar />
//       </Routes> */}

//       {/* when clicked on nav bar link then this will take us to another page/ */}
//       {/* basically creating different routes for different pages */}
//       <Routes>
//         {/* jo "url" JSON me hai vo aayega in "path" */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       <Navbar />
//     </div>
//   );
// }


import "./index.css";
// dont forget to import
import Navbar from "./components/Navbar";
// to use "Link" you need to import "Routes"
import { Route, Routes } from "react-router-dom";

//importing other pages
import Home from "./routes/Home";
import About from "./routes/About";
import Business_Brand from "./routes/Business_Brand";
import News_Media from "./routes/News_Media";
import Career from "./routes/Career";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1> */}
      {/* if using link then need to put Navbar under Routes */}
      {/* if not using "Link" and using "a" then no need to wrap under "Routes" */}
      {/* <Routes>
        <Navbar />
      </Routes> */}

      {/* when clicked on nav bar link then this will take us to another page/ */}
      {/* basically creating different routes for different pages */}
      <Routes>
        {/* jo "url" JSON me hai vo aayega in "path" */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business&brand" element={<Business_Brand />} />
        <Route path="/news&media" element={<News_Media />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Navbar />
    </div>
  );
}

