import styles from '../styles/ChatWidget.module.css'
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';
import { CHAT_TITLE, CHAT_WELCOME_MESSAGE } from '../constants/strings';
import { useState } from 'react';
import { sendMessage } from '../network/controllers/aiAssistant'
import { Choice } from '../../types'
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

interface props {
  onChange: Function
  foundProducts: any
}

export default function ChatWidget({ onChange, foundProducts }: props) {
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

  const getTagType = (item: string)=> {
    const falg = foundProducts?.filter((product: any)=> {
      return product.name === item
    })
    return falg.length !== 0 ? 'greenTag' : 'redTag'
  }

  const getAssistantMessage = (item: any, index: number)=> {
    return <div id='dialogBox' key={index}>
    {item.message.content?.replace(/['"]+/g, '').split(',').map((item: any, index: number) =>
      <div className={`ingredientTag ${getTagType(item)}`} key={index}>
        {index === 1 ? <CloseIcon fontSize="small" /> : <DoneIcon fontSize="small" />} {item}
      </div>)}
  </div>
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
            if (""=== "") {
              return getAssistantMessage(item, index)
            } else {
              return <div id={styles.leftDialogBoxContainer} key={index}>
                <div id={styles.dialogBox}>
                  {'gouht, chees, chees, chees, chees, chees, chees'?.split(',').map((item, index) =>
                    <div key={index} style={{ backgroundColor: index === 1 ? '#ffcccb' : '#e8fce8', border: 'solid', borderWidth: 1, margin: 2, padding: 4, borderRadius: 10, display: 'flex' }}>
                      {index === 1 ? <CloseIcon fontSize="small" /> : <DoneIcon fontSize="small"  />} {item}
                    </div>)}
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
        <div id={styles.inActiveChatHint}>Need help finding the ingredients? <div id={styles.hintArrow} /></div>
        <div id={styles.inActiveChatcontainerButton} >
          <MessageIcon />
        </div>
      </div>
  )
}
