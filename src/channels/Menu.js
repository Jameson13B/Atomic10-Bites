import React from "react"

export const Menu = () => {
  return (
    <div className="flex flex-col text-center overflow-auto max-w-[678px] mx-auto">
      <h2 className="text-4xl my-[14px] font-PlusJakarta">5 Course Menu</h2>

      <div className="mb-[12px]">
        <h3 className="text-lg font-bold text-center font-Poppins">
          1st - Green Berry Skins
        </h3>
        <h3 className="font-Poppins italic text-sm">
          Peas + Raspberries + Potato Skins
        </h3>
      </div>

      <div className="mb-[12px]">
        <h3 className="text-lg font-bold text-center font-Poppins">
          2nd - Sweet Corn Nigiri
        </h3>
        <h3 className="font-Poppins italic text-sm">
          Sweet Corn + Soy + Butter
        </h3>
      </div>

      <div className="mb-[12px]">
        <h3 className="text-lg font-bold text-center font-Poppins">
          3rd - Hot Chicken and Slaw
        </h3>
        <h3 className="font-Poppins italic text-sm">
          Fried Chicken + Hot Honey + Slaw
        </h3>
      </div>

      <div className="mb-[12px]">
        <h3 className="text-lg font-bold text-center font-Poppins">
          4th - The Black and Blue Main
        </h3>
        <h3 className="font-Poppins italic text-sm">
          Wagyu Steak + Gorgonzola + Balsamic
        </h3>
      </div>

      <div className="mb-[12px]">
        <h3 className="text-lg font-bold text-center font-Poppins">
          5th - Dessert Apple Cubes
        </h3>
        <h3 className="font-Poppins italic text-sm">
          Ricotta + Lemon Zest + Pistachios
        </h3>
        <h3 className="font-Poppins italic text-sm">
          Rum + Cinnamon + Brown Sugar
        </h3>
      </div>
    </div>
  )
}
