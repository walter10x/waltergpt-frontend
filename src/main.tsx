import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {WalterGPT} from './WalterGPT'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalterGPT />
  </StrictMode>,
)
