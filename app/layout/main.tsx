import { Outlet } from "react-router";

import ThemeToggle from "@/components/ThemeToggle";

export default function Layout() {
  return (
    <main className="flex h-screen flex-col">
      <h1>Header</h1>
      <ThemeToggle />
      <Outlet />
    </main>
  );
}
