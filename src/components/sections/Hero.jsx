function Hero() {
  return (
    <section className="h-40 md:h-64 my-[1em]">
      <div className="h-full bg-[url('/assets/images/yokai.jpg')] bg-cover bg-center">
        <div className="max-w-4xl mx-auto h-full px-5 flex flex-col items-center justify-center z-50">
          <h1 className='w-full bg-white text-black uppercase text-base font-medium text-end px-1 md:hidden'>Elisha John D. Ragas</h1>
          <div className='text-white text-center'>
            <h1 className='uppercase font-black pl-2 text-[55px] md:text-[114px] lg:text-9xl'>
              <span className='tracking-[.2em]'>A<span className='text-[#39FF14]'><a href="/">E</a></span>RELIS</span>H
            </h1>
          </div>
          <h1 className='w-full bg-white text-black uppercase text-base font-medium px-1 md:hidden'>Software Developer</h1>
          <div className='hidden md:flex w-full bg-white text-black justify-between uppercase text-lg font-semibold tracking-widest px-2'>
            <h1>Elisha John D. Ragas</h1>
            <h1>Software Developer</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero