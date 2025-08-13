import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { FollowerPointerCard } from './components/FollowingPointer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   {/* <FollowerPointerCard title='Nehan Ahmed'>
    
    </FollowerPointerCard>  */}
    <App />
    </BrowserRouter>
  </StrictMode>,
)
