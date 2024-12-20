import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Routines from "./routes/Routines";
import Analytics from "./routes/Analytics";
import Settings from "./routes/Settings";
import Quote from "./components/Quote";
import TimerApp from "./components/TimerApp";

//need to donwload react-router-dom from dependencies

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>This is Home Page</h2>} />
        // {/* Catch all route that begin with '/a' */}
        {/* <Route path="/b" element={<Routines theVar={variable} />} />
            <Route path="/a/*" element={<Analytics theVar={variable} />} />
            <Route path="/c" element={<Settings theVar={variable} />} /> */}
        <Route index element={<Home />} />
        <Route path="/a" element={<Routines />} />
        <Route path="/b" element={<Analytics />} />
        <Route path="/c" element={<Settings />} />
      </Routes>
      //{" "}
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//   return (
//     <BrowserRouter>
//     <Router>
//       <div>
//         <h1>Welcome to Journal! </h1>
//         <h2>Variable has the value {variable}</h2>
//         <button onClick={changeVar}>Increment Variable</button>

//         <p>Route Layer 1 - Home/Routines/Analytics/Settings</p>
//         <ul>
//           <li>
//             <Link to="/"> Home Page</Link>
//           </li>
//           <li>
//             <Link to="/b"> Routines </Link>
//           </li>
//           <li>
//             <Link to="/a"> Analytics </Link>
//           </li>
//           <li>
//             <Link to="/c"> Settings </Link>
//           </li>
//         </ul>
//         <Routes>
//           <Route path="/" element={<h2>This is Home Page</h2>} />
//           {/* Catch all route that begin with '/a' */}

//           <Route path="/b" element={<Routines theVar={variable} />} />
//           <Route path="/a/*" element={<Analytics theVar={variable} />} />
//           <Route path="/c" element={<Settings theVar={variable} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// // Before you run the project, remember to install Router
// // [npm install react-router-dom]
