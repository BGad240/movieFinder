import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
    return (
        <motion.div
            className="h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.h1
                className="text-7xl font-bold text-red-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
                404
            </motion.h1>

            <motion.h2
                className="text-2xl mt-4 font-semibold"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Page Not Found
            </motion.h2>

            <motion.p
                className="mt-2 text-gray-400"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                It seems you looking for another page
            </motion.p>

            <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <Link
                    to="/"
                    className="bg-red-500 hover:bg-red-600 transition px-6 py-2 rounded-full text-white font-medium"
                >
                    Back To Home Page
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default NotFound
