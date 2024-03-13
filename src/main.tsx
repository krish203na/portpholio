import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home/Home.tsx'
import About from './About/About.tsx'
import Contact from './Contact/Contact.tsx'
import Github from './Github/Github.tsx'
import Projects from './Projects/Projects.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/portpholio/" element={<App />}>
        <Route path="/portpholio/" element={<Home />} />
        <Route path="project" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="github" element={<Github />} />
      </Route>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
