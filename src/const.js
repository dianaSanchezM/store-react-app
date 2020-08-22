export const pathsData = {
  load_user: {
    id: "profile",
    path: "/user/me",
    method: "GET",
  },
  products: {
    id: "products",
    path: "/products",
    method: "GET",
  },
  history: {
    id: "history",
    path: "/user/history",
    method: "GET",
  },
  redeem: {
    id: "redeem",
    path: "/redeem",
    method: "POST",
  },
  points: {
    id: "points",
    path: "/user/points",
    method: "POST",
  },
};

const url = "https://coding-challenge-api.aerolab.co";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM1NDJmYTc1MTI2YzAwNmQwOGJiMDYiLCJpYXQiOjE1OTczMjYwNzR9.31SDbCf2qkqMAB0ZENf7K8Z87jmNyK11_ODaHVYTl2c";

export async function fetchData({ data: { path, method }, body }) {
  let request = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  if (method === "POST") request = { ...request, body: body };

  const response = await fetch(url + path, request);
  const data = await response.json();
  return data;
}

export const sortFactors = [
  'Lowest price',
  'Higest price'
]