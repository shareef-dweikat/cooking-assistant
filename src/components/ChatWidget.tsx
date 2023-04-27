import styles from '../styles/ChatWidget.module.css'
import { Lemonada } from 'next/font/google'
import SendIcon from '@mui/icons-material/Send';
import { CHAT_TITLE, CHAT_WELCOME_MESSAGE, IN_ACTIVE_CHAT_SUB_TITLE, IN_ACTIVE_CHAT_TITLE } from '@/constants/strings';
import { useState } from 'react';

const lemonada = Lemonada({
  weight: '700',
  subsets: ['latin'],
})

const lemonadaRegular = Lemonada({
  weight: '400',
  subsets: ['latin'],
})

interface props {
  pageTitle?: string
}

export default function ChatWidget() {
  const [active, setActive] = useState(false)
  return (
    active ?
      <div id={styles.container} onClick={()=> setActive(false)}>
        <div id={styles.header}>
          <div>
            <div style={{ fontSize: 22 }}>{CHAT_TITLE}</div>
            <div style={{ fontSize: 12, textAlign: 'center' }}>Type your dish name</div>
          </div>
        </div>
        <div id={styles.conversationBox}>
          <div id={styles.dialogBox}>
            {CHAT_WELCOME_MESSAGE}
          </div>

          <div id={styles.leftDialogBoxContainer}>
            <div id={styles.dialogBox}>
              Pizza
            </div>
          </div>

          <div id={styles.dialogBox}>
            -Cheese
            -Tomato
            -Cheese
            -Peper
          </div>
        </div>
        <div id={styles.messageBox}>
          <input placeholder='Type.....' />
          <SendIcon />
        </div>
      </div>
      : <div id={styles.inActiveChatcontainer} onClick={()=> setActive(true)}>
        <div>
          <div id={styles.inActiveChatTitle}>{IN_ACTIVE_CHAT_TITLE}</div>
          <div id={styles.inActiveChatSubTitle}>{IN_ACTIVE_CHAT_SUB_TITLE}</div>
        </div>
      </div>
  )
}
