"use client";

import { motion } from "framer-motion";

export default function FloatingDust(){

return(

<>

{Array.from({length:18}).map((_,i)=>(

<motion.div

key={i}

animate={{

y:[0,-25,0],

opacity:[.15,.5,.15],

}}

transition={{

duration:5+i,

repeat:Infinity,

delay:i*.4,

}}

className="absolute rounded-full bg-[#D7B179]/40"

style={{

width:4+Math.random()*5,

height:4+Math.random()*5,

left:`${Math.random()*100}%`,

top:`${Math.random()*100}%`,

}}

 />

))}

</>

)

}