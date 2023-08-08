import { Link } from "react-router-dom";

type Props = {
  title: string;
  path: string;
};

const SidebarLink = ({ title, path }: Props) => (
  <li className="my-1">
    <Link className="sidebar-link bg-slate-900" to={path}>
      {title}
    </Link>
  </li>
);

export default SidebarLink;
