import React from "react";

export default function ContactCard() {
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md text-white">
      <h2 className="mb-4 text-4xl font-head tracking-tight font-extrabold text-center">
        Contact Us
      </h2>
      <p className="mb-8 lg:mb-16 font-light font-head text-center first-letter:sm:text-xl">
        Want to Discuss about some project reach out us by filling the below
        form
      </p>

      <form
        action="mailto:sheetalengg1@yahoo.co.in"
        method="post"
        enctype="text/plain"
        className="space-y-8 bg-gray-900 p-8 mb-10 rounded-xl"
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            name="email"
            required

          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"

          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
            placeholder="Let us know how we can help you"
            name="subject"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Leave a comment..."
            name="message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
        >
          Send message
        </button>
      </form>
      <p className="mb-8 lg:mb-16 font-light font-head text-center first-letter:sm:text-xl">
        We will get back to you within 24 hours.
      </p>
    </div>
  );
}
