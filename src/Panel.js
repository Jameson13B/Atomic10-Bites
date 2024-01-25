import React from "react"

import { getColor } from "./App"

export const Panel = (props) => {
  return (
    <div
      className={`panel flex flex-col items-center w-full sm:w-1/4 flex-grow-1 sm:h-full mt-[12px] sm:mt-0 sm:mt-0 sm:ml-[20px] p-[8px] sm:p-[12px] sm:p-[20px] border-4 rounded-2xl border-${
        props.theme === "reg" ? "hippie" : "starky"
      }`}
    >
      <button
        className={`border-2 border-${getColor(
          "text",
          props.theme
        )} font-extrabold rounded-full max-w-[150px] sm:max-w-[100px] w-full aspect-[initial] sm:aspect-square m-[12px] mb-[12px] sm:mb-[30px]`}
        onClick={() => {
          if (props.deviceOn) {
            props.setChannel(0)
          }
          props.setDeviceOn(!props.deviceOn)
        }}
      >
        Power
      </button>
      <button
        className={`border-l-[75px] border-l-[transparent] border-r-[75px] border-r-[transparent] border-b-[30px] sm:border-b-[60px] border-b-${getColor(
          "text",
          props.theme
        )} max-w-[150px] w-full h-0`}
        onClick={() => {
          if (!props.deviceOn || props.channel === 5) {
            return
          } else {
            return props.setChannel(props.channel + 1)
          }
        }}
      />
      <p>Ch +/-</p>
      <button
        className={`border-l-[75px] border-l-[transparent] border-r-[75px] border-r-[transparent] border-t-[30px] sm:border-t-[60px] border-t-${getColor(
          "text",
          props.theme
        )} max-w-[150px] w-full h-0`}
        onClick={() => {
          if (!props.deviceOn || props.channel === 0) {
            return
          } else {
            return props.setChannel(props.channel - 1)
          }
        }}
      />
      <h2
        className="mt-auto font-black text-[20px] font-Poppins cursor-pointer"
        onClick={() => props.setTheme(props.theme === "reg" ? "alt" : "reg")}
      >
        Atomic10 Bites
      </h2>
    </div>
  )
}
