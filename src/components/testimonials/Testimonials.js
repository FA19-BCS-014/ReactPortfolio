import React from 'react'
import "./Testimonials.scss"
function Testimonials() {
  const data = [
    {
      id: 1,
      name: "ABC",
      title: "Senior Developer",
      img:
      'assets/civic.png',
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "DEF",
      title: "Co-Founder",
      img:
      'assets/civic.png',
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "GHI",
      title: "CEO ",
      img:
      'assets/civic.png',
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className='Testimonials' id='testimonials'>
      <h2>Testimonials</h2>
      <div className='container'>
        {data.map((d)=>(
        <div className={d.featured ? "card featured" : "card"}>
          <div className='top'>
            <img src='assets/right-arrow.png' className='left' alt=''></img>
            <img src={d.img} className='user' alt=''></img>
            <img src={d.icon} className='right' alt=''></img>
          </div>
          <div className='center'>{d.desc}</div>
          <div className='bottom'>
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
            <button className='btn'>Show More</button>
          </div>
        </div>
      ))}</div>
      
      
    </div>
  )
}

export default Testimonials
