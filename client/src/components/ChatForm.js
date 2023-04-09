import { useState } from 'react'
import styles from './styles.module.css'
import { sendMessage } from "../socketApi";
import { useChat } from "../context/ChatContext";



function ChatForm() {
    const [message, setMessage] = useState('')

    const { setMessages } = useChat();

    const handleSubmit = (e) => {
        e.preventDefault(); // normal davranıştan kaçınmak için kullanılır.sayfa yenilenmez
        console.log(message);



        setMessages((prevState) => [...prevState, { message, fromMe: true }]) // useChattan tüm mesajları aldık

        sendMessage(message); //socketApi den (new-message emit edildi)
        setMessage(''); // form gönderildiği anda inputun boş olması 
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >


                <input placeholder='Bir mesaj yazınız..' className={styles.textInput} value={message} onChange={(e) => setMessage(e.target.value)} />

            </form>
        </div>
    )
}

export default ChatForm