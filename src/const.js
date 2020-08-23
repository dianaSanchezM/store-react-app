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
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk';
//  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM1NDJmYTc1MTI2YzAwNmQwOGJiMDYiLCJpYXQiOjE1OTczMjYwNzR9.31SDbCf2qkqMAB0ZENf7K8Z87jmNyK11_ODaHVYTl2c";

export async function fetchData({ data: { path, method }, body }) {
  console.log(path, method, body)
  let request = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  if (method === "POST") request = { ...request, body: JSON.stringify(body) };

  const response = await fetch(url + path, request);
  const data = await response.json();
  return data;
}

export const sortFactors = [
  'Lowest price',
  'Higest price'
]

export const filters = [
  {
    id: 'Any category',
    options: []
  },
  {
    id: 'Any price',
    options: ['0 - 500', '501 - 1000', '1001 - 1500', '1501 - 2000', '2001 - 2500']
  }
]

export const add_points_options = [
  1000, 5000, 7500
]