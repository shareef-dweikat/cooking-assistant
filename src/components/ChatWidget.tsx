import styles from '../styles/ChatWidget.module.css'
import { Lemonada } from 'next/font/google'
import SendIcon from '@mui/icons-material/Send';

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
  return (
    <div id={styles.container}>
      <div id={styles.header}>
        <div>
          <div style={{ fontSize: 22 }}>Poll</div>
          <div style={{ fontSize: 12, textAlign: 'center' }}>Poll</div>
        </div>
      </div>
      <div id={styles.conversationBox}>
        <div style={{ backgroundColor: '#f4f7f9', lineBreak: 'anywhere', height: 'fit-content', width: '80%', display: 'flex', alignItems: 'center', padding: 8, borderRadius: 10, marginTop: 4 }}>
          sssddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </div>
        <div style={{ backgroundColor: '#f4f7f9', lineBreak: 'anywhere', height: 'fit-content', width: '80%', display: 'flex', alignItems: 'center', padding: 8, borderRadius: 10, marginTop: 4 }}>
          sssddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </div>
      </div>
      <div id={styles.messageBox}>
        <input placeholder='Type.....' />
        <SendIcon />
      </div>
    </div>
  )
}
