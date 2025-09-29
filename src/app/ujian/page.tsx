import React from "react";
import Ujian from "@/app/ujian/Ujian/ujian_544241073"
import Box from "@/app/box/page"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col gap-10 justify-center items-center bg-black">
        <Ujian />
      <h1 className="text-3xl font-bold">ADNEY JECONIA</h1>
      
      <div className="flex gap-10">
        <div className="w-72 h-48 p-6 rounded-2xl bg-blue-900 border-4 border-cyan-400 text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,1)] transition duration-300 flex flex-col justify-between">
        </div>

        <div className="w-72 h-48 p-6 rounded-2xl bg-amber-50 border-4 border-cyan-400 text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,1)] transition duration-300 flex flex-col justify-between">
          <h3 className="text-xl font-bold">Card 2</h3>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="w-72 h-48 p-6 rounded-2xl bg-amber-50 border-4 border-cyan-400 text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,1)] transition duration-300 flex flex-col justify-between">
          <h3 className="text-xl font-bold">Card 3</h3>
        </div>

        <div className="w-72 h-48 p-6 rounded-2xl bg-amber-50 border-4 border-cyan-400 text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,1)] transition duration-300 flex flex-col justify-between">
          <h3 className="text-xl font-bold">Card 4</h3>
        </div>

        <div className="w-72 h-48 p-6 rounded-2xl bg-amber-50 border-4 border-cyan-400 text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,1)] transition duration-300 flex flex-col justify-between">
          <h3 className="text-xl font-bold">Card 5</h3>
        </div>
      </div>
    </div>
  );
}
