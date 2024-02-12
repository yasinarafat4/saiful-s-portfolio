const Contact = () => {
  return (
    <div className="bg-slate-800 dark:bg-slate-900 text-white lg:grid grid-cols-3 gap-10 px-10 py-10">
      <div className="col-span-1">
        <h2 className="text-start lg:text-end text-2xl md:text-3xl font-semibold mb-4">
          GET A CALL BACK
        </h2>
        <p className="text-start lg:text-end mb-6 lg:mb-0">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          at corporis magnam voluptate voluptates ut blanditiis eveniet
          aspernatur repellendus reprehenderit.
        </p>
      </div>
      <div className="col-span-2">
        <form className="md:grid grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500 text-slate-800"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500 text-slate-800"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-1">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500 text-slate-800"
                required
              />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500 text-slate-800"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-1/3 bg-green-500 text-white py-2 px-4 rounded-sm hover:bg-green-600 transition-colors duration-300 font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
