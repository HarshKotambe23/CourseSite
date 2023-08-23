import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import CourseCategories from './pages/CourseCategories'
import PopularCourses from './pages/PopularCourses'
import Testimonial from './pages/Testimonial'
import TeamMembers from './pages/TeamMembers'
import WhyChooseUs from './pages/WhyChooseUs'
import Search from './pages/Search'
import BlogAndNews from './pages/BlogAndNews'
import Contact from './pages/Contact'

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <CourseCategories />
      <PopularCourses />
      <Testimonial />
      <TeamMembers />
      <WhyChooseUs />
      <Search />
      <BlogAndNews />
      <Contact />
      {/* <Routes>
        <Route />
      </Routes> */}
    </BrowserRouter>
  </>
}

export default App