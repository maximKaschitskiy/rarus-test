import ReactDOM from 'react-dom/client'
import { Providers } from "./Providers.tsx"
import App from './App.tsx'
import "./styles/normalize.css"
import "./styles/fonts.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Providers>
      <App />
    </Providers>
  )
