import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirebaseProvider } from "./config/Firebase.jsx"
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './components/context/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <FirebaseProvider>
          <App />
        </FirebaseProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
