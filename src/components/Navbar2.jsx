import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MenuIcon, X } from 'lucide-react'

const Navbar = () => {
    const location = useLocation()
    const pathName = location.pathname
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Movies", path: "/movies" },
        { name: "TV Shows", path: "/tvSearies" },
        { name: "Search", path: "/search" },
    ]

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md"
        >
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-extrabold text-red-500"
                >
                    TvTender
                </motion.div>

                <div className="hidden md:flex gap-6 items-center">
                    {navLinks.map(({ name, path }) => (
                        <Link
                            key={name}
                            to={path}
                            className={`text-lg capitalize transition duration-300 hover:text-red-500 ${pathName === path ? 'text-red-500' : ''
                                }`}
                        >
                            {name}
                        </Link>
                    ))}
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <MenuIcon />}
                </button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="md:hidden bg-[#111] px-4 py-4 flex flex-col gap-4"
                >
                    {navLinks.map(({ name, path }) => (
                        <Link
                            key={name}
                            to={path}
                            onClick={() => setIsOpen(false)}
                            className={`text-lg capitalize transition duration-300 hover:text-red-500 ${pathName === path ? 'text-red-500' : ''
                                }`}
                        >
                            {name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    )
}

export default Navbar
