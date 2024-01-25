import React, { useState } from "react"
import { Panel } from "./Panel"
import { Screen } from "./Screen"

function App() {
  const [theme, setTheme] = useState("reg")
  const [deviceOn, setDeviceOn] = useState(false)
  const [channel, setChannel] = useState(0)

  return (
    <div
      className={`h-screen w-screen p-[12px] sm:p-[30px] ${getColor(
        "bg",
        theme
      )} ${getColor("text", theme)}`}
    >
      <div
        className={`device p-[16px] h-full flex flex-col sm:flex-row border-4 rounded-lg border-${
          theme === "reg" ? "hippie" : "starky"
        }`}
      >
        <Screen theme={theme} deviceOn={deviceOn} channel={channel} />
        <Panel
          theme={theme}
          setTheme={setTheme}
          deviceOn={deviceOn}
          setDeviceOn={setDeviceOn}
          channel={channel}
          setChannel={setChannel}
        />
      </div>
    </div>
  )
}

export default App

export const getColor = (type, theme = "reg") => {
  if (type === "bg") {
    if (theme === "reg") {
      return "bg-starky"
    } else if (theme === "alt") {
      return "bg-hippie"
    }
  } else if (type === "text") {
    if (theme === "reg") {
      return "text-hippie"
    } else if (theme === "alt") {
      return "text-starky"
    }
  } else if (type === "border") {
    if (theme === "reg") {
      return "border-hippie"
    } else if (theme === "alt") {
      return "border-starky"
    }
  }
}
