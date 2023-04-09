import { createContext, useState, useContext, children } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([
        { message: 'Anıl hoşgeldin' }
    ]);


    const values = {
        messages,
        setMessages,
    };
    return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
}


export const useChat = () => useContext(ChatContext);

// export default ChatContext;  bunu useContext e tanımladık çünkü tek tek import işlemi yapmamak için 