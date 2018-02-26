import React from 'react'
// import { Button } from 'antd-mobile'
import './index.css'
import card from './images/card.png'
import photo from './images/default_photo.png'
import msg from './images/ic_index_msg_open.png'
import nav1 from './images/nav1.png'
const Home = (props) => {
  return (
    <div className='pages'>
      <header className='headtitle' >孕娘管家</header>
      <section>
        <img className='card' src={card} alt='卡片' />
        <div className='user'>
          <div className='username'>
            <img src={photo} alt='' className='head' />
            <div className='name'>
              <p>郭靖</p>
              <span>孕娘管家至尊会员</span>
            </div>
          </div>
          <div className='usermsg'>
            <img src={msg} alt='' />
            <span>消息中心</span>
          </div>
        </div>
        <div className='tit_tq'><span>私享特权</span></div>
        <div className='tq_items'>
          <div className='item'>
            <img src={nav1} alt='' />
            <p>更多特权</p>
          </div>
          <div className='item'>
            <img src={nav1} alt='' />
            <p>更多特权</p>
          </div>
          <div className='item'>
            <img src={nav1} alt='' />
            <p>更多特权</p>
          </div>
          <div className='item'>
            <img src={nav1} alt='' />
            <p>更多特权</p>
          </div>
          <div className='item'>
            <img src={nav1} alt='' />
            <p>更多特权</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
