import AuthForm from "../components/AuthForm";
import { redirect } from "react-router-dom";
import { getAuthToken } from "../util/auth";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  // fetch authData from the form action
  const searchParameters = new URL(request.url).searchParams;
  const mode = searchParameters.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw new Error('Unsupported mode. Please use either "login" or "signup". State: 422');
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password")
  };

  // send creation request to backend with authorization set in header
  const authToken = await getAuthToken(authData);
  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(authData)
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Error("Could not authenticate user. Please try again later. State: 500");
  }

  // token handling for authentication -> for persistence, store it in the local storage
  const responseData = await response.json();
  const token = responseData.token;
  localStorage.setItem("token", token);

  return redirect("/");
}
