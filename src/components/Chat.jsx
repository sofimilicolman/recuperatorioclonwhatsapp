import { useState } from "react"
import { useChat } from "../context/ChatContext."
import { useTheme } from "../context/ThemecontextS"
import { useNavigate } from "react-router-dom"


export default function Chat() {
  const [msg, setMsg] = useState("")
  const [showPopup, setshowPopup] = useState(false)

  const { users, selectedUser, setUsers, setSelectedUser } = useChat()

  const { Theme, actualizarTema } = useTheme()
  const navigate = useNavigate()
  const user = users.find(u => u.id === selectedUser)


  console.log(user)

  if (!user) {
    return (
      <div className="user-not-found">
        <p>No hay usuario seleccionado...</p>
      </div>
    )
  }

  const handleChange = (event) => {
    setMsg(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
    const updateUsers = users.map((u) => {
      if (u.id === user.id) {
        // Si el usuario es el mismo que el seleccionado, devolvemos una copia de su objeto con los msj actualizados.
        return {
          ...u,
          messages: [...u.messages, newMessage]
        }
      } else {
        // Si no es el usuario seleccionado, lo devolvemos tal cual.
        return u
      }
    })
    setUsers(updateUsers)
    setMsg("")
  }

  const handleShowPopup = () => {
    setshowPopup(true)
  }
  const handleClosePopup = () => {
    setshowPopup(false)
  }
  const handleHelpClick = () => {
    navigate("/help")
  }

  const handleGoBack = () => {
    setSelectedUser(null) // Esto deselecciona el usuario
  }


  return (
    <>
      {
        showPopup === true && <section className="cont-popup">
          <div className="popup">
            <h2> ⚙ Configuración</h2>
            <hr />
            <button className="theme-button" onClick={() => actualizarTema("claro")}>💡Light</button>
            <button className="theme-button" onClick={() => actualizarTema("oscuro")}>🌜 Dark</button>
            <hr />
            <button onClick={handleClosePopup}>🚪 Cerrar</button>
          </div>
        </section>
      }
      <div className="chat">

        <header className="chat-header">
          <div className="chat-info">
            <button onClick={handleGoBack} className="back-button" title="Volver a contactos">
              ⬅
            </button>

            <div className="chat-user">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                alt="Aiden Chavez"
                className="chat-avatar"
              />
              <strong>{user.name}</strong>
              {user.lastSeen !== "" && <span className="last-seen">Last seen: {user.lastSeen}</span>}
            </div>
          </div>

          <div className="chat-actions">
            <button title="Camera">📷</button>
            <button title="Gallery">🖼️</button>
            <button title="Settings" onClick={handleShowPopup}>⚙️</button>
            <button onClick={handleHelpClick} title="Help">❓</button>
          </div>
        </header>


        <section className="chat-messages">
          {
            user.messages.map((message) => <div className="message" key={message.id}>
              <p>{message.text}</p>
              <span className="time">{message.time}</span>
            </div>)
          }
        </section>

        <footer className="chat-footer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter text here..."
              onChange={handleChange}
              value={msg}
            />
            <button>➤</button>
          </form>
        </footer>
      </div>

    </>
  )
}