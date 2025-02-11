import { useState, useEffect } from "react";
import "./Api.css";

const Api = () => {
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
      setUsers(data.slice(0, 20)); // Limiting to 20 users
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
    <div className="container">
      <h1>GitHub Users</h1>

      {loading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

      <div className="user-gallery">
        {
          users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar_url} alt={user.login} className="avatar" />
              <p className="user-name">{user.login}</p>
              <a href={user.html_url} target="_blank" className="profile-link">
                View Profile
              </a>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Api;



  // github users fetch karne ke liye         : https://api.github.com/users
  // random type ke texts fetch karne ke liye : https://jsonplaceholder.typicode.com/photos