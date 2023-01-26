import React from 'react'
import { Link } from "react-router-dom";

function Hero() {
    return (
        
        <div class="bg-slate-100 py-12 md:pb-0">
        <div class="container  px-6 mx-auto">       
          <div class="box-border flex flex-wrap  items-center justify-between">
            <hero-content class="w-full md:w-3/6 bg-slate-100 "> 
              <h2 class="text-3xl font-bold text-black-700 mb-4">Stop selling, start helping !</h2>
              <h2 class="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-pink-400" >Bantu UMKM Gapai Sukses Digital</h2>
               <button class="bg-indigo-500 text-white font-bold text-md py-4 px-4 my-8 rounded hover:bg-blue-700" ><a href="https://wa.me/6281220077333">Bahas Kebutuhan Digital Kamu Sekarang !</a></button>
              
            </hero-content> 
            <div class="w-full md:w-3/6 bg-slate-100 py-6"> 
              <img src={require('../assets/profil-porto-arya.webp')} alt="" />
            </div> 
          </div>
        </div>
      </div>
    )
}

export default Hero;


  
