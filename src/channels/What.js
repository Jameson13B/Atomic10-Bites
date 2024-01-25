import React from "react"

export const What = (props) => {
  return (
    <div className="flex flex-col text-center max-w-[678px] mx-auto">
      <h2 className="text-4xl my-[20px] font-PlusJakarta">You are invited</h2>
      <h3 className="font-Poppins">
        To enjoy a 5 course small bites experience. Intentional and thoughtful
        bites crafted with passion for an experience and journey of flavors.
      </h3>
      <h3 className="mt-[14px] font-Poppins">
        An excuse to get cute, eat some delicous food, and socialize.
      </h3>
      <hr className="my-[32px] mx-auto w-1/3 border-t-[2px]" />
      <h3 className="font-Poppins">
        Brought to you by{" "}
        <a
          className="underline"
          href="https://atomic10.studio"
          target="_blanks"
        >
          Atomic10 Studios
        </a>
      </h3>
    </div>
  )
}
