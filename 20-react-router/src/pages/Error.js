import { Navigation } from "../components/Navigation";

export function ErrorPage() {
  return (
    <>
      <Navigation />
      <main>
        <h1>An error occured</h1>
        <p>This page does not exist</p>
      </main>
    </>
  );
}
