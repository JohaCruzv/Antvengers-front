import { useState } from "react";
import { apiRequest, endpoints } from "../services/api";
import { successAlert, errorAlert } from "../helpers/alerts";
import { saveToken } from "../helpers/localStorage";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await apiRequest({
        endpoint: endpoints.login,
        method: "POST",
        data: { email, password },
      });

      saveToken(data.token);
      successAlert("Bienvenido");

    } catch (error) {
      errorAlert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button>Ingresar</button>
    </form>
  );
}

export default Login;