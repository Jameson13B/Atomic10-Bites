/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react"
import { getColor } from "./App"
import { Guide } from "./Guide"
import { Menu } from "./channels/Menu"
import { What } from "./channels/What"
import { Where } from "./channels/Where"
import { Invite } from "./channels/Invite"

export const Screen = (props) => {
  const data = [
    { name: "Channel Guide", component: <h1>Test</h1> },
    { name: "What", component: <What /> },
    { name: "Where", component: <Where /> },
    { name: "When", component: <h1>When - TBD</h1> },
    { name: "Menu", component: <Menu /> },
    { name: "Invite", component: <Invite /> },
  ]

  return (
    <div
      className={`screen w-full sm:w-3/4 flex-grow-[4] sm:h-full p-[12px] sm:p-[20px] border-4 rounded-2xl ${getColor(
        "border",
        props.theme
      )} relative`}
    >
      {/* Actual Screen Content */}
      {props.deviceOn && (
        <React.Fragment>
          {props.channel === 0 ? (
            <Guide data={data} theme={props.theme} />
          ) : (
            data[props.channel].component
          )}

          {/* Channel Indicator */}
          <p
            className={`absolute top-[1px] right-[1px] font-bold rounded-3xl p-[6px] ${getColor(
              "bg",
              props.theme
            )}`}
          >
            {props.channel === 0 ? "GUIDE" : `0${props.channel}`}
          </p>

          {/* Bottom Marquee */}
          <marquee
            behavior="scroll"
            direction="left"
            className={`absolute bottom-0 left-0 text-sm text-center w-full py-[6px] ${
              props.theme === "reg"
                ? "bg-hippie text-starky"
                : "bg-starky text-hippie"
            }`}
          >
            <span className="mr-[125px]">
              Change theme by clicking Atomic10 Bites logo in panel
            </span>
            <span className="mr-[125px]">
              Change theme by clicking Atomic10 Bites logo in panel
            </span>
            <span className="mr-[125px]">
              Change theme by clicking Atomic10 Bites logo in panel
            </span>
            <span className="mr-[125px]">
              Change theme by clicking Atomic10 Bites logo in panel
            </span>
            <span>Change theme by clicking Atomic10 Bites logo in panel</span>
          </marquee>
        </React.Fragment>
      )}
    </div>
  )
}
