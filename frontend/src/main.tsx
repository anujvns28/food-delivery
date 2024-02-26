import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Auth0Provider
    domain="dev-xsm2vdi5eoxlxas0.us.auth0.com"
    clientId="kLqQLTz5KJLutNIKX9glj0es1QIsxsIx"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </BrowserRouter>
)
