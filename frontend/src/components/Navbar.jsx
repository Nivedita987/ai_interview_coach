// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-blue-600 tracking-tight">AI Coach</h2>

//         <div className="flex gap-8 text-lg font-medium">
//           <Link to="/" className="hover:text-blue-600 transition">Home</Link>
//           <Link to="/practice" className="hover:text-blue-600 transition">Practice</Link>
//           <Link to="/dashboard" className="hover:text-blue-600 transition">Dashboard</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">AI Coach</h1>

      {/* Menu */}
      <div className="flex gap-6 text-lg font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/practice" className="hover:text-blue-600">Practice</Link>
        <Link to="/feedback" className="hover:text-blue-600">Feedback</Link>
        <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
      </div>
    </nav>
  );
}
