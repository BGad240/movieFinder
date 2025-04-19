import bg from '../assets/footer-bg.jpg'
import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: ` url(${bg}) `, marginTop: "100px" }}
      className='relative min-h-[430px] md:min-h-[40vh]'
    >
      <div className='flex items-center flex-col sm:max-w-[90%] md:max-w-[70%] mx-auto gap-[30px] px-[20px] text-center'>
        <div className='social max-h-[100px] flex flex-col items-center md:flex-row lg:flex-row text-center '>
          <a href="https://github.com/BGad240" target='blank'>
            <div className=' flex items-center justify-between bg-transparent hover:bg-purple-800 px-[10px] py-[5px] transition-all duration-[1s] ease-in rounded-lg w-[50px] overflow-hidden bg-black hover:w-fit hover  m-[20px] cursor-pointer group'>
              <div>
                <FaSquareGithub className='icon text-purple-800 group-hover:text-white  mr-[6px]' />
              </div>
              <div className="animate flex items-center justify-between translate-y-[-300px] transition-all duration-[3s] ease-in-out group-hover:translate-y-[0]  text-[20px] text-white gap-[10px]">
                Github
                <FaLongArrowAltRight className='transition-all duration-500 transform group-hover:translate-x-2 group-hover:animate-bounceX arrow text-[25px]' />
              </div>

            </div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100086199903613" target='blank'>
            <div className=' flex items-center justify-between bg-transparent hover:bg-blue-700 px-[10px] py-[5px] transition-all duration-[1s] ease-in rounded-lg w-[50px] overflow-hidden bg-black hover:w-fit hover  m-[20px] cursor-pointer group'>
              <div>
                <FaFacebookSquare className='icon text-blue-700 group-hover:text-white  mr-[6px]' />
              </div>
              <div className="animate flex items-center justify-between translate-y-[-300px] transition-all duration-[3s] ease-in-out group-hover:translate-y-[0]  text-[20px] text-white gap-[10px]">
                Facebook
                <FaLongArrowAltRight className='transition-all duration-500 transform group-hover:translate-x-2 group-hover:animate-bounceX arrow text-[25px]' />
              </div>

            </div>
          </a>
          <a href="https://www.linkedin.com/in/basil-gad-581650273/" target='blank'>
            <div className=' flex items-center justify-between bg-transparent hover:bg-white px-[10px] py-[5px] transition-all duration-[1s] ease-in rounded-lg w-[50px] overflow-hidden bg-black hover:w-fit hover  m-[20px] cursor-pointer group'>
              <div>
                <FaLinkedin className='icon text-white group-hover:text-blue-600 mr-[6px]' />
              </div>
              <div className="animate flex items-center justify-between translate-y-[-300px] transition-all duration-[3s] ease-in-out group-hover:translate-y-[0]  text-[20px] text-black gap-[10px]">
                Linkedin
                <FaLongArrowAltRight className='transition-all duration-500 transform group-hover:translate-x-2 group-hover:animate-bounceX arrow text-[25px]' />
              </div>

            </div>
          </a>
        </div>
        <div className='text-white text-center mt-[70px] absolute bottom-[30px] max-w-[600px]'>
          <p>© 2025 CineZone. All rights reserved.

            Designed with ❤️ for movie lovers.

            Terms & Conditions | Privacy Policy

            Follow us on social media for updates and new releases.

            Your gateway to the world of cinema.

          </p>
        </div>
        <div></div>

      </div>
    </div>
  )
}

export default Footer