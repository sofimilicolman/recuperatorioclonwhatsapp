import { useState, useEffect } from "react"
import Chat from "../components/Chat"
import Sidebar from "../components/Sidebar"
import { useChat, ChatProvider } from "../context/ChatContext"

const MobileChatView = () => {
  const { selectedUser } = useChat()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (isMobile) {
    return !selectedUser ? <Sidebar /> : <Chat />
  }

  return (
    <>
      <Sidebar />
      <Chat />
    </>
  )
}

export const Messages = () => (
  <div className="app">
    <ChatProvider>
      <MobileChatView />
    </ChatProvider>
  </div>
)