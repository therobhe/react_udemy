import AuthForm from '../components/AuthForm';
import { redirect } from 'react-router-dom';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  // fetch authData from the form action
  const searchParameters = new URL(request.url).searchParams;
  const mode = searchParameters.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw new Error('Unsupported mode. Please use either "login" or "signup". State: 422')
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  }

  // send creation request to backend
  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  })

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Error('Could not authenticate user. Please try again later. State: 500')
  }

  // token handling must happen here
  return redirect("/")
}