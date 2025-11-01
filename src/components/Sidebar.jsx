import { useState, useEffect } from "react"
import { useChat } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

export default function Sidebar() {
  const { users, setSelectedUser } = useChat()
  const [usersToRender, setUsersToRender] = useState(users)
  // Cada vez que cambien los usuarios glóbales, actualizamos la lista a renderizar
  const navigate = useNavigate()
  useEffect(() => {
    setUsersToRender(users)
  }, [users])

  const handleChange = (event) => {
    const result = users.filter((user) => user.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setUsersToRender(result)
  }
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    navigate("/")

  }

  return (
    <div className="sidebar">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={handleChange}
      />
      {
        usersToRender.length === 0 && <p className="search-result">No search found...</p>
      }
      <ul className="user-list">
        {
          usersToRender.map(user => <li key={user.id} onClick={() => setSelectedUser(user.id)} className="user">
            <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s" alt=""/>
            <div></div>
            <div className="user-info">
              <strong>
                <span style={{ color: user.status === "online" ? "green" : "red", marginRight: "3px" }}>•</span>{user.name}
              </strong>
              <small>{user.status === "offline" ? user.lastSeen : "online"}</small>
            </div>
          </li>)
        }
      </ul>

      <button
        onClick={handleLogout}
        className="logout-button"
      >🚪 Cerrar Sesión</button>

    </div>
  )
}