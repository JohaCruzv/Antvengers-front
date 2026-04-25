const BASE_URL = "http://localhost:3000";

export const endpoints = {
  login: "/auth/login",
  register: "/auth/register",
  gastos: "/gastos",
};

export const apiRequest = async ({ endpoint, method = "GET", data }) => {
  const response = await fetch(BASE_URL + endpoint, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  });

  const result = await response.json();

  if (!response.ok) throw new Error(result.message);

  return result;
};