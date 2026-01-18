// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Practice from "./pages/Practice";
// import Feedback from "./pages/Feedback";
// import Dashboard from "./pages/Dashboard";

// export default function App() { 
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />

//       <div className="max-w-6xl mx-auto px-6 py-8">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/practice" element={<Practice />} />
//           <Route path="/feedback" element={<Feedback />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import TopicSelection from "./pages/TopicSelection";
// import Practice from "./pages/Practice";
// import Feedback from "./pages/Feedback";
// import Dashboard from "./pages/Dashboard";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />

//       <div className="max-w-6xl mx-auto px-6 py-10">
//         <Routes>

//           {/* Home Page */}
//           <Route path="/" element={<Home />} />

//           {/* Select interview type first */}
//           <Route path="/select-topic" element={<TopicSelection />} />

//           {/* Practice page containing recording + AI questions */}
//           <Route path="/practice" element={<Practice />} />

//           {/* Feedback & Dashboard */}
//           <Route path="/feedback" element={<Feedback />} />
//           <Route path="/dashboard" element={<Dashboard />} />
          
//         </Routes>
//       </div>
//     </div>
//   );
// }
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
// import SelectType from "./pages/SelectType";
// import SelectOptions from "./pages/SelectOptions";
// import Practice from "./pages/PracticeStart";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />

//       <div className="max-w-5xl mx-auto px-6 py-8">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/practice" element={<SelectType />} />
//           {/* <Route path="/practice/options" element={<SelectOptions />} /> */}
//           <Route path="/practice-start" element={<PracticeStart />} />
  
//         </Routes>
//       </div>
//     </div>
//   );
// }


import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import SelectType from "./pages/SelectType";
import PracticeStart from "./pages/PracticeStart";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<SelectType />} />
          <Route path="/PracticeStart" element={<PracticeStart />} />
        </Routes>
      </div>
    </div>
  );
}
