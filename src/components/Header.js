import React from 'react'
import projector from '../assets/projector.png';
import menu from '../assets/menu.png'

const Header = () => {
    return (

       
                    <div class='rounded-4xl  bg-white-800  mx-4 mt-4 '>
                <nav class=' relative container mx-auto p-6'>
                    <div class='flex items-center justify-between'>

                        <div class='pt-2 flex flex-row items-center'>
                            <img src={projector} width={'70px'} alt=''></img>
                            <h1 class=' italic font-bold text-2xl '>Movie-Search.</h1>
                        </div>
                        <div class='flex space-x-8'>
                            <button class='hover:text-black hover:bg-white text-white bg-black rounded-full p-1 px-4 font-semibold'>Contact us</button>
                            <img src={menu} width={'35px'} alt='' ></img>
                        </div>
                    </div>
                </nav>

            </div>
       

       



    )
}

export default Header

