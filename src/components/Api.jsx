import { useState, useEffect } from "react";
import "./../components_css/Api.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setUsers(data.slice(0, 20)); // Limiting to 20 users for display
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-2 rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-full h-auto rounded-full" />
            <p className="mt-2 text-sm text-center font-semibold">{user.login}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs text-center block">View Profile</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Api;

  // github users fetch karne ke liye         : https://api.github.com/users
  // random type ke texts fetch karne ke liye : https://jsonplaceholder.typicode.com/photos