import { Link } from "react-router";

import { Route } from "./+types/home";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" }
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="text-2xl text-purple-800">This is the Home Page</div>
      <nav>
        <ul>
          <li>
            <Link to="waterproofing">Waterproofing</Link>
          </li>
          <li>
            <Link to="mold-remediation">Mold Remediation</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
