const Home = () => {

  return (
    <div className="flex items-center flex-col gap-y-[4rem]">
     
      <h1 className="text-4xl font-bold text-center">Bienvenido!</h1>

      <div className="flex flex-col text-center gap-y-[1rem]">
      <a
          className="cd-bg-blue-500 hover:cd-bg-blue-700 cd-text-white cd-font-bold cd-py-2 cd-px-4 cd-rounded"
          href="/form"
        >
          Ir a Form
        </a>
      </div>
    </div>
  );
};

export default Home;
