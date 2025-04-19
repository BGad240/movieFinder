import React from 'react'
import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'

const Card = ({ mv }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.85, rotate: -3 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 40, scale: 0.9, rotate: 2 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                damping: 12
            }}
            whileHover={{
                transition: { duration: 0.4, ease: "easeOut" }
            }}

            className='relative rounded-[20px] overflow-hidden shadow-lg group cursor-pointer'>
            <img src={`https://image.tmdb.org/t/p/w780${mv.backdrop_path}`} alt="none" className="w-full h-[300px] object-cover rounded-xl" />
            <div className=''>
                <div className='absolute bottom-0 left-0 z-20 w-[100%] h-[100%]
                    flex flex-col justify-between 
                text-white group-hover:bg-gradient-to-t from-black/80 via-black/40 to-transparent'>
                    <p className='bg-gradient-to-t from-transparent via-black/40 to-black/80 pl-[15px] pb-[10px] pt-[10px] translate-y-[-5000%] group-hover:translate-y-[0] transition-all ease-in-out duration-500'>
                        {Math.floor(mv.vote_average)}/10
                    </p>
                    <div className="relative group w-[100%] h-[60px] flex items-center justify-center">
                        <PlayCircle
                            size={0}
                            className="absolute text-slate-400 opacity-0 group-hover:opacity-100 group-hover:size-[60px] transition-all duration-300"
                        />
                    </div>
                    <div className='ml-[10px] mb-[10px] translate-y-[5000%] group-hover:translate-y-[-10px] transition-all ease-in-out duration-500'>
                        <p className='text-gray-400 text-[14px]'>{mv.release_date}</p>
                    </div>

                </div>
            </div>
            <p className='text-white ml-[10px] text-[18px]'>{mv.title || mv.name}</p>
        </motion.div>
    )
}

export default Card