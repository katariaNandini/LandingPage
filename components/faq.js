import { Accordion } from './accordian';

const FAQ = () => {
  return (
    <section className='bg-template-white py-20 dark:bg-gray-800 dark:text-gray-400'>
      <div className='container'>
        {/* Heading */}
        <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
          <h1 className='text-3xl text-center text-template-blue dark:text-template-purple'>
            Frequently Asked Questions
          </h1>
          <p className='text-center text-template-grey mt-4'>
            Here are some of our most common questions. If you have others, feel free to reach out to us.
          </p>
        </div>
        {/* FAQ Items */}
        <Accordion 
          title='How can I start using this platform?' 
          content='You can start by signing up for a free account and exploring our features.' 
        />
        <Accordion 
          title='Is there a trial period?' 
          content='Yes, we offer a 14-day free trial for new users to experience all the features.' 
        />
        <Accordion 
          title='Can I customize the templates?' 
          content='Absolutely! Our templates are fully customizable to suit your needs.' 
        />
      </div>
    </section>
  );
};

export default FAQ;
