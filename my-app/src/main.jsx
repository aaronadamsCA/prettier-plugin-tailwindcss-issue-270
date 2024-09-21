import "#tailwind.css";

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      className="py-16 px-8 font-bold data-bounce:animate-bounce"
      data-bounce
    >
      Hello world
    </div>
  </React.StrictMode>,
);
