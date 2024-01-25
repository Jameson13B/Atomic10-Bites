import React from "react"
import { getColor } from "./App"

export const Guide = (props) => {
  return (
    <div className={`rounded border-2 ${getColor("border", props.theme)}`}>
      {props.data.map((el, i) => (
        <div
          className={`py-[10px] px-[16px] ${
            i !== 0 && `border-t-2 ${getColor("border", props.theme)}`
          }`}
          key={i}
        >
          {i !== 0 && `0${i} |`} {el.name}
        </div>
      ))}
    </div>
  )
}
