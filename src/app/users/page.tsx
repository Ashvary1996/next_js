type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function User() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  ////

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return (
    <div>
      {
        <>
          <h1> User page</h1>
          {data.map((user: User) => (
            <div key={user.id}>
              <h1>{user.id}</h1>
              <h4>{user.name}</h4>
              <h4>{user.username}</h4>
              <h4>{user.email}</h4>
              <h4>{user.phone}</h4>
            </div>
          ))}
        </>
      }
    </div>
  );
}
