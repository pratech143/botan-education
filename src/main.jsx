import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, Aboutus, Contactus,IELTS,Australia,NewZealand,Japan,USA,UK,JLPT,SAT,CareerCounselling,VisaProcessing,ExamGuidance,LanguageTuition} from '../Index.jsx'
import './index.css';
import { DarkModeProvider } from './contexts/darkModeContext.jsx'
 import ScrollToTop from './components/ScrollToTop.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <ScrollToTop/>,
    <App />
    </>
    ) ,
    children: [{
      path: "/",
      element:<Home />
    },
    {
      path: "about",
      element: <Aboutus />
    },
    {
      path: "contact",
      element: <Contactus />
    },
    {
      path:"Australia",
      element:<Australia/>
    },
    {
      path:"NewZealand",
      element:<NewZealand/>
    },
    {
      path:"Japan",
      element:<Japan/>
    },
    {
      path:"USA",
      element:<USA/>
    },
    {
      path:"United Kingdom",
      element:<UK/>
    },
    {
      path:"IELTS",
      element:<IELTS/>
    },
    {
      path:"JLPT",
      element:<JLPT/>
    },
    {
      path:"SAT",
      element:<SAT/>
    },
    {
      path:"Career Counselling",
      element:<CareerCounselling/>
    },
    {
      path:"Language Tuition",
      element:<LanguageTuition/>
    },
    {
      path:"Visa Processing",
      element:<VisaProcessing/>
    },
    {
      path:"Exam Guidance",
      element:<ExamGuidance/>
    }
  ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} >
      <ScrollToTop/>
        </RouterProvider>
      
    </DarkModeProvider>
  </StrictMode >,
)
