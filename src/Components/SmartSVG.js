export default function smartGithubLogo (id, color='#fafafe', viewBox, data){
    /*<?xml version="1.0" encoding="UTF-8"?>*/
    return (
        <svg id={id} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
        <g fill={color}>
          <path d={data}/>
        </g>
      </svg>
    )
}