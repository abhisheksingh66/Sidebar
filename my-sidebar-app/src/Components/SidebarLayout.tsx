import { useState } from "react";
import "./SidebarLayout.scss";

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="layout">
      {/* HEADER */}
      <header className="header">
        <button
          className="menu-btn"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰ {isOpen ? "CLOSE" : "OPEN"}
        </button>
      </header>

      {/* BODY */}
      <div className="body">
        {/* SIDEBAR */}
        <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
          <h3>Sidebar content</h3>
          <p>Click the button to close the Sidebar.</p>

          <button
            className="close-btn"
            onClick={() => setIsOpen(false)}
          >
            CLOSE SIDEBAR
          </button>
        </aside>

        {/* MAIN CONTENT */}
        <main className="main">
          <h2>Main content</h2>
          <p>content goes here.</p>
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
