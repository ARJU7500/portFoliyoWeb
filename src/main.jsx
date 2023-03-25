import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './Context';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-7hqdmlsjh2updmdq.us.auth0.com"
  clientId="bLpB9gEPP1ceqd9OE1YIaxYmv5tW7Vmo"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <AppProvider>
    <App />
  </AppProvider>
  </Auth0Provider>,
)
