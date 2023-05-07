import styles from '../styles/ChatWidget.module.css'
import SendIcon from '@mui/icons-material/Send';
import { CHAT_TITLE, CHAT_WELCOME_MESSAGE, IN_ACTIVE_CHAT_SUB_TITLE, IN_ACTIVE_CHAT_TITLE } from '../constants/strings';
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
    const message = userMessage
    const messageTemplate = `What are the ingredients of ${message}. Please make it in a JS string seperated by commas`

    setUserMessage('')
    setMessages((choices: Choice[]) => [...choices, { message: { content: message, role: 'user' } }])
    setIswriting(true)

    const data = await sendMessage(messageTemplate)

    const choices = data.getChoices()
    const createdAt = data.getCreatedAt()

    setIswriting(false)
    setMessages((oldChoices: Choice[]) => [...oldChoices, ...choices])

    onChange(choices[0]?.message.content)
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
        </div>
        {isWriting && <div id={styles.AIIsWriting}>AI assistant is writing.....</div>}
        <div id={styles.messageBox}>
          <input placeholder='Type only name of the dish'
            onChange={(input) => setUserMessage(input.target.value)}
            value={userMessage}
          />
          <div onClick={handleSend}> <SendIcon />
          </div>
        </div>
      </div>
      : <div id={styles.inActiveChatcontainer} onClick={() => setActive(true)}>
        <div>
          <div id={styles.inActiveChatTitle}>{IN_ACTIVE_CHAT_TITLE}</div>
          <div id={styles.inActiveChatSubTitle}>{IN_ACTIVE_CHAT_SUB_TITLE}</div>
        </div>
      </div>
  )
}
