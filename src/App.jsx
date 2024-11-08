import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonial/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return ( <> 
    <Navbar />
    <Hero />
    <div className='contanier'>
      <Title subTitle='Our Program ' title=' What We Offer' />
    <Programs />
    <About />
    <Title subTitle='Gallery' title='Campus Photo' />
    < Campus />
    <Title subTitle='TESTIMOnIALS' title='What Student Says' />
    <Testimonials />
    <Title subTitle='Contact Us' title='Get In Touch' />
    <Contact />
    <Footer />
    </div>
   
   
    </>
  )
}

export default App