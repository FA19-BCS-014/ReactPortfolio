import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import "./Portfolio.scss"
import {featuredPortfolio, webPortfolio, mobilePortfolio, 
  designPortfolio, contentPortfolio} from '../../Data'

function Portfolio() {
  const [selected, setSelected] = useState ("featured")
  const [data, setData] = useState ([])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },

  ]
  useEffect(()=>{
    switch(selected){
      case "featured": setData(featuredPortfolio)
      break
      case "web": setData(webPortfolio)
      break
      case "mobile": setData(mobilePortfolio)
      break
      case "design": setData(designPortfolio)
      break
      case "content": setData(contentPortfolio)
      break
      default:setData(featuredPortfolio)
    }

  },[selected])
  return (
    <div className='Portfolio' id='portfolio'>
      <h2>Portfolio</h2>
      <ul>
        {list.map(item=>(
          <PortfolioList title={item.title} active = {selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>
      <div className='container'>
        {data.map(d=>(
        <div className='item'>
          <img src={d.img} alt=''></img>
          <h3>{d.title}</h3>  
        </div>
        ))}
      </div>

    </div>
  )
}

export default Portfolio
