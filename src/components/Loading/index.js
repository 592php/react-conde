import React from 'react'
import './index.css'
let Loading = (props) => {
  return (
    <div className="loading">
    {props.loading?<div
      data-v-09ed86b6=""
      className="vue-loading"
      style={{fill: 'rgb(90, 193, 221)', width: '60px', height: '60px'}}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32 32"
        style={{enableBackground: 'new 0 0 50 50'}}
        xmlSpace="preserve"
      >
        <circle cx="16" cy="3" r="1.75498">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0.14229">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.125s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.25s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.375s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0.0917909">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.5s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0.841769">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.625s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(270 16 16)" cx="16" cy="3" r="2.30062">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.75s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(315 16 16)" cx="16" cy="3" r="2.72174">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.875s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0.0917909">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.5s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
      </svg>
    </div>:''}  
    </div>
  )
}
export default Loading
