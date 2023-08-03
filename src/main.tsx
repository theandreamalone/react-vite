import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//import reportWebVitals from "./reportWebVitals"; need?


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  )*/