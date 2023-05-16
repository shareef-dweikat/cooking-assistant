import styles from '../styles/ChatWidget.module.css'
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';
import { CHAT_TITLE, CHAT_WELCOME_MESSAGE } from '../constants/strings';
import { useState } from 'react';
import { sendMessage } from '../network/controllers/aiAssistant'
import { Choice } from '../../types'

interface props {
  onChange: Function
}

export default function ChatWidget({ onChange }: props) {
  const [active, setActive] = useState(false)
  const [messages, setMessages] = useState<Choice[]>([])
  const [userMessage, setUserMessage] = useState('')
  const [isWriting, setIswriting] = useState(false)

  const handleSend = async () => {

    setUserMessage('')
    setMessages((choices: Choice[]) => [...choices, { message: { content: userMessage, role: 'user' } }])
    setIswriting(true)

    const data = await sendMessage(userMessage)

    const choices = data.getChoices()
    const createdAt = data.getCreatedAt()

    setIswriting(false)
    setMessages((oldChoices: Choice[]) => [...oldChoices, ...choices])

    onChange(choices[0]?.message.content)
  }

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === 'Enter') {
      handleSend()
    }
  }

  return (
    active ?
      <div id={styles.container}>
        <div id={styles.header} onClick={() => setActive(false)}>
          <div>
            <div style={{ fontSize: 22 }}>{CHAT_TITLE}</div>
            <div style={{ fontSize: 12, textAlign: 'center' }}>Type your dish name</div>
          </div>
        </div>
        <div id={styles.conversationBox}>
          <div id={styles.dialogBox}>
            {CHAT_WELCOME_MESSAGE}
          </div>
          {messages?.map((item: Choice, index: number) => {
            if (item.message.role === "assistant") {
              return <div id={styles.dialogBox} key={index}>{item.message.content}</div>
            } else {
              return <div id={styles.leftDialogBoxContainer} key={index}>
                <div id={styles.dialogBox}>
                  {item.message.content}
                </div>
              </div>
            }
          })}
          {isWriting && <div id={styles.AIIsWriting}>AI assistant is writing.....</div>}
        </div>
        <div id={styles.messageBox}>
          <input placeholder='Type only name of the dish'
            onChange={(input) => setUserMessage(input.target.value)}
            value={userMessage}
            onKeyUp={handleKeyPress}
          />
          <div onClick={handleSend}> <SendIcon />
          </div>
        </div>
      </div>
      : <div id={styles.inActiveChatcontainer} onClick={() => setActive(true)}>
        <div id={styles.inActiveChatHint}>Need help finding the ingredients? <div id={styles.hintArrow}/></div>
        <div  id={styles.inActiveChatcontainerButton} >
          <MessageIcon />
        </div>
      </div>
  )
}
