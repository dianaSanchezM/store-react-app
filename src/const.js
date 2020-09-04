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
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM1NDJmYTc1MTI2YzAwNmQwOGJiMDYiLCJpYXQiOjE1OTczMjYwNzR9.31SDbCf2qkqMAB0ZENf7K8Z87jmNyK11_ODaHVYTl2c";

export async function fetchData({ data: { path, method }, body }) {
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

export const sortFactors = {
  lowPrice:'Lowest price',
  hightPrice:'Higest price'
}

export const filters = {
  category: {
    id: 'Any category',
    options: []
  },
  price: {
    id: 'Any price',
    options: ['0 - 500', '501 - 1000', '1001 - 1500', '1501 - 2000', '2001 - 2500']
  }
}

export const add_points_options = [
  1000, 5000, 7500
]

export const itemsPerPage = 16;