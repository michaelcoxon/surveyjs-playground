import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
//import { Survey } from 'survey-react-ui';

const SurveyComponent = lazy(() => import("./Survey"));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SurveyComponent  />
  </StrictMode>,
)
