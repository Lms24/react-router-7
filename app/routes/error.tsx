import type { Route } from "./+types/error";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  throw new Error("some error thrown in a loader");
}

export default function Error() {
  return <div>Loading this page will throw an error</div>;
}