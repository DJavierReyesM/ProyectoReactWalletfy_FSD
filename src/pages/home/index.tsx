
const Home = () => {
  
  return (

    
    
    <div className="flex items-center flex-col gap-y-[4rem]">
     
      <h1 className="text-4xl font-bold text-center">Bienvenido!</h1>

      <div className="flex flex-col text-center gap-y-[1rem]">
      <a
          className="w-full bg-violet-600 py-3 px-4 border border-gray-300 rounded-md text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none cursor-pointer"
          href="/form"
        >
          Ir a Form
        
        </a>
        
        
      </div>
      
    </div>
    
  );
};

export default Home;
