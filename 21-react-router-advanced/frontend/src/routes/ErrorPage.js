import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  let title = "An error occurred!";
  let message = "Something went wrong!";
  const error = useRouteError();

  if (error.status === 500) {
    title = "A server error occurred!";
    try {
      message = JSON.parse(error.data).message;
    } catch {
      message = error.data || "Something went wrong!";
    }
  }

  if (error.status === 404) {
    title = "Page not found!";
    try {
      message = JSON.parse(error.data).message;
    } catch {
      message = error.data || "Page not found!";
    }
  }


  return (
    <>
      <MainNavigation />
      <PageContent title={title} >
        <p>{message}</p>
      </PageContent>
    </>
  )
}
