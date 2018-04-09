import React from 'react'
import './index.css'
const Footer = () => {
  return (
    <div className='tabars'>
      <div className='tab'>
        <div className='tab-item'>
          <a>
            <div className='tab-icon'>
              <i className='iconfont icon-shouye-copy' />
            </div>
            <div className='tab-text'>首页</div>
          </a>
        </div>
        <div className='tab-item'>
          <a>
            <div className='tab-icon'>
              <i className='iconfont icon-fabu' />
            </div>
            <div className='tab-text'>发布</div>
          </a>
        </div>
        <div className='tab-item'>
          <a>
            <div className='tab-icon'>
              <i className='iconfont icon-xiaoxi' />
            </div>
            <div className='tab-text'>消息</div>
          </a>
        </div>
        <div className='tab-item'>
          <a>
            <div className='tab-icon'>
              <i className='iconfont icon-home' />
            </div>
            <div className='tab-text'>我的</div>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Footer
