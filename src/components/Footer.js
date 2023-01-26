function Footer() {
    return (
      <footer class="bg-slate-800 py-8 sm:py-12 mt-12 px-6">
        <div class="container mx-auto">
          <div class="sm:flex sm:flex-wrap sm:mx-4 md:py-4">
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-4/6">
            <div class="flex">
                   <div class="flex-none">
                   <span class="fa fa-envelope text-white text-2xl mr-4"></span>
                  
                    </div>
                    <div>
                    <a href="mailto:kakayauya@gmail.com" class="text-2xl font-bold text-white mb-6">hello@aryakurniawan.io</a>
                    </div>
             </div>
             <div class="flex">
                   <div class="flex-none">
                   <span class="fa-brands fa-whatsapp text-white text-2xl mr-4"></span>
                  
                    </div>
                    <div>
                    <a href="https://wa.me//6281220077333" class="text-2xl font-bold text-white mb-6">081220077333</a>
                    </div>
             </div>
                {/* </div> */}
              
            </div>
            
            
            <div class="px-4 mt-4 sm:w-1/3 xl:w-2/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left text-white">Ikuti Media Sosial Saya</h5>
              <div class="flex sm:justify-center xl:justify-start">
                <a href="./" class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600">
                  <i class="fab fa-facebook"></i></a>
                <a href="./" class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-white hover:text-white hover:bg-blue-400 hover:border-blue-400">
                  <i class="fab fa-twitter"></i></a>
                <a href="./" class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-white hover:text-white hover:bg-red-600 hover:border-red-600">
                  <i class="fab fa-google-plus-g"></i></a>
              </div>
            </div>
          </div>
  
          <div class="sm:flex sm:flex-wrap sm:mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t py-8 text-white">
            <div class="px-4">
              &copy; Muhamad Arya Kurniawan
            </div>
          
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;