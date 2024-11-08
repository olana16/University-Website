import React,{useRef} from 'react'

import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

const slider= useRef()
let tx=0
const slideForward= () =>{
    if(tx > -50){
        tx -=20
    }
    slider.current.style.transform = `translateX(${tx}%)`
    
}
const slideBackward= () =>{
      if(tx < 0){
        tx +=20
    }
    slider.current.style.transform = `translateX(${tx}%)`


}

  return (
    <div className='testimonial'>
        <img src= {next_icon} alt=""  className='next-icon' onClick={slideForward}/>
        <img src= {back_icon} alt=""  className='back-icon' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src= {user_1} alt="" />
                        
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, Ethiopia</span>
                        </div>
                        
                        </div>
                        <p>choosing edusity for my first degrre is the best descsion in my life becaus a got alot of 
                            expriances from it. all of the teacher are are user freiendly and i love them
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src= {user_2} alt="" />
                        
                        <div>
                            <h3>Olana Jackson</h3>
                            <span>Edusity, Ethiopia</span>
                        </div>
                        
                        </div>
                        <p>choosing edusity for my first degrre is the best descsion in my life becaus a got alot of 
                            expriances from it. all of the teacher are are user freiendly and i love them
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src= {user_3} alt="" />
                        
                        <div>
                            <h3>Mathewos Benti</h3>
                            <span>Edusity, Ethiopia</span>
                        </div>
                        
                        </div>
                        <p>choosing edusity for my first degrre is the best descsion in my life becaus a got alot of 
                            expriances from it. all of the teacher are are user freiendly and i love them
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src= {user_4} alt="" />
                        
                        <div>
                            <h3>Temesgen Gemechu</h3>
                            <span>Edusity, Ethiopia</span>
                        </div>
                        
                        </div>
                        <p>choosing edusity for my first degrre is the best descsion in my life becaus a got alot of 
                            expriances from it. all of the teacher are are user freiendly and i love them
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src= {user_1} alt="" />
                        
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, Ethiopia</span>
                        </div>
                        
                        </div>
                        <p>choosing edusity for my first degrre is the best descsion in my life becaus a got alot of 
                            expriances from it. all of the teacher are are user freiendly and i love them
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Testimonials