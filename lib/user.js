export async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  console.log(res);

  return res.json();
}
