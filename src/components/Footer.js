function Footer() {
    return (
      <footer className="bg-slate-800 py-8 sm:py-12 mt-12 px-6">
        <div className="container mx-auto">
          <div className="sm:flex sm:flex-wrap sm:mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-4/6">
            <div className="flex">
                   <div className="flex-none">
                   <span className="fa fa-envelope text-white text-2xl mr-4"></span>
                  
                    </div>
                    <div>
                    <a href="mailto:kakayauya@gmail.com" className="text-2xl font-bold text-white mb-6">hello@aryakurniawan.io</a>
                    </div>
             </div>
             <div className="flex">
                   <div className="flex-none">
                   <span className="fa-brands fa-whatsapp text-white text-2xl mr-4"></span>
                  
                    </div>
                    <div>
                    <a href="https://wa.me//6281220077333" className="text-2xl font-bold text-white mb-6">081220077333</a>
                    </div>
             </div>
                {/* </div> */}
              
            </div>
            
            
            <div className="px-4 mt-4 sm:w-1/3 xl:w-2/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 className="text-xl font-bold mb-6 xl:text-left text-white">Ikuti Media Sosial Saya</h5>
              <div className="flex  xl:justify-start">
                <a href="./" className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600">
                  <i className="fab fa-facebook"></i></a>
                <a href="./" className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-white hover:text-white hover:bg-blue-400 hover:border-blue-400">
                  <i className="fab fa-twitter"></i></a>
                <a href="./" className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-white hover:text-white hover:bg-red-600 hover:border-red-600">
                  <i className="fab fa-google-plus-g"></i></a>
              </div>
            </div>
          </div>
  
          <div className="sm:flex sm:flex-wrap sm:mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t py-8 text-white">
            <div className="px-4">
              &copy; Muhamad Arya Kurniawan
            </div>
          
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;