const Features = () => {
  return (
    <section className='bg-template-white dark:bg-gray-800 py-20 mt-20 lg:mt-60' id="feature">
      {/* Heading */}
      <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
        <h1 className='text-3xl text-center text-template-blue dark:text-white'>
          Our Exclusive Features
        </h1>
        <p className='text-center text-template-grey mt-4'>
          Discover the unique features that make our platform stand out and help you achieve your goals effortlessly.
        </p>
      </div>
      {/* Feature #1 */}
      <div className='relative mt-20 lg:mt-40'>
        <div className='container flex flex-col lg:flex-row items-center justify-center gap-x-24'>
          <div className='flex flex-1 justify-center z-10 mb-10 lg:mb-0'>
            <img
              className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full'
              src='./img/features-tab-1.png'
              alt='Feature 1'
            />
          </div>
          <div className='flex flex-1 flex-col items-center lg:items-start'>
            <h1 className='text-3xl text-template-blue dark:text-template-purple'>
              One-Click Fork
            </h1>
            <p className='text-template-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
              Easily organize your project with a single click. Our intuitive interface ensures you have complete control over your content.
            </p>
            <button type='button' className='btn btn-purple hover:border-[1px] hover:border-cyan-400'>
              Learn More
            </button>
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className='hidden lg:block overflow-hidden bg-template-purple rounded-r-full absolute h-80 w-1/2 -bottom-24 -left-36'></div>
      </div>

      {/* Feature #2 */}
      <div className='relative mt-20 lg:mt-40'>
        <div className='container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24'>
          <div className='flex flex-1 justify-center z-10 mb-10 lg:mb-0'>
            <img
              className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full'
              src='./img/features-tab-2.png'
              alt='Feature 2'
            />
          </div>
          <div className='flex flex-1 flex-col items-center lg:items-start '>
            <h1 className='text-3xl text-template-blue dark:text-template-purple'>
              Customizable Options
            </h1>
            <p className='text-template-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
              Tailor the platform to suit your needs with our user-friendly customization options using TailwindCSS and Next.js.
            </p>
            <button type='button' className='btn btn-purple hover:border-[1px] hover:border-cyan-400'>
              Learn More
            </button>
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className='hidden lg:block overflow-hidden bg-template-purple rounded-full absolute h-80 w-1/2 top-32 right-0 lg:-bottom-28 lg:right-20'></div>
      </div>
    </section>
  );
};

export default Features;
