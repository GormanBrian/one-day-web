import SidebarLink from "./Link";
import "./index.css";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <h1>OneDay</h1>
      <div>
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search skills"
            placeholder="Ex. Juggling"
            type="search"
            name="q"
          />
          <div className="sr-only" aria-live="polite"></div>
        </form>
        <form method="get">
          <button type="submit">Search</button>
        </form>
      </div>
      <nav>
        <ul className="p-0 m-0 list-none">
          <SidebarLink title="Skill 1" path={`skill/1`} />
          <SidebarLink title="Skill 2" path={`skill/2`} />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
