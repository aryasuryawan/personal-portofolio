import React, { Component } from 'react';  
import { Link } from "react-router-dom";
import portofolio from '../portofolio.json'

class DaftarPortofolio extends Component {

    render(){
        return(
            <div class="container mx-auto my-3 py-14 px-6 ">
                <div class="py-7">
                    <h2 class="font-bold text-4xl mb-3 text-center">Portofolio saya </h2>
                    <p class="text-md text-slate-500 text-center">Berikut sebagian portofolio saya sebagai project manager, product manager dan digital marketing<br /> yang boleh diizinkan klien untuk ditampilkan</p>
                </div>
                <BoxPortofolio arrydata={portofolio} />
            </div>
        )
    }
}



var BoxPortofolio = function (props) {  
    // get data dari array 
    
    var portofolio = props.arrydata.map(function (data) {  
      return (
        <div class="text-md border-2 border-gray-200  rounded-md items-center align-middle center-center pb-6" key={data.id}>
             <div class="mb-6">
                <img src={(data.image)} class="rounded-md" alt="produk" /></div>
             <div class="font-bold text-xl px-4 my-2 ">
                <Link to={`/portofolio/${data.id}`}>{data.title}</Link>
            </div>
        </div>
      )
   });  
   console.log(portofolio);
    return (  
        <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {portofolio} 
        </div> 
        
    );  
  }  


var BoxPortofolioDetail = function (props) {  
    //ALl data arry  
    var portofolio = props.arrydata.map(function (data) {  
        
      return (
        <div class="text-md border-2 border-gray-200  rounded-md items-center align-middle center-center pb-6" key={data.id}>
             <div class="mb-6" >
                <img src={(data.image)} class="rounded-md" alt="produk" /></div>
             <div class="font-bold text-xl px-4 my-2 ">
                <Link to={`/portofolio/${data.id}`}>{data.title}</Link>
            </div>
        </div>
        
      )
      
   });  
    return (  
        <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {portofolio}
        </div> 
        
    );  
  }  

 export default DaftarPortofolio; 