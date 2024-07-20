const Contact = () => {
  return (
    <section className='bg-template-purple text-white py-20 dark:bg-gray-700' id="contact">
      <div className='container'>
        <div className='sm:w-3/4 lg:w-1/2 mx-auto'>
         
          <h1 className='text-2xl text-center'>
            Stay informed with the latest news and updates.
          </h1>
          <div className='flex flex-col sm:flex-row gap-6 mt-8'>
            <input
              type='text'
              placeholder='Enter your email address'
              className='focus:outline-none text-center flex-1 px-2 py-3 rounded-md text-black'
            />
            <button
              type='button'
              className='btn bg-template-red hover:bg-template-white hover:text-black flex items-center gap-4'
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
