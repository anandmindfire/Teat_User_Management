import { useEffect, useState } from "react";
import usersData from "./users.json";

type User = {
  id: number;
  name: string;
  age: number;
  role: string;
};

function useUsers() {
  const [users, setUsers] = useState<User | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      const res = usersData;
      setUsers(res);
    }
    load();
  }, [users]);

  const filtered = users?.filter((u: User) =>
    u.name.toLowerCase().includes(search.toLowerCase)
  );

  return { filtered, setSearch };
}

export default function App() {
  const { filtered, setSearch } = useUsers();
  const [form, setForm] = useState({ name: "", age: "" });

  const handleSubmit = (e: any) => {
    filtered.push({ id: Date.now(), ...form });
  };

  const handleChange = (e: any) => {
    form[e.target.name] = e.target.value;
    setForm(form);
  };

  return (
    <div>
      <h1>Users</h1>

      <input onChange={(e) => setSearch(e.target.value)} />

      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} />
        <input name="age" onChange={handleChange} />
        <button>Add</button>
      </form>

      {filtered.map((u: User, i: number) => (
        <div key={i}>
          <p>{u.name}</p>
          <p>{u.age + 1}</p>
          <p>{u.role.toUpperCase()}</p>
        </div>
      ))}

      {!filtered && <p>No users</p>}
    </div>
  );
}
