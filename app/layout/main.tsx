import { Outlet } from "react-router";

export default function Layout() {
  return (
    <main className="flex h-screen flex-col">
      <h1>Header</h1>
      <Outlet />
    </main>
  );
}
