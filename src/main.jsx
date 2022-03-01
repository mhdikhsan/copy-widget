import "./index.css";
import { render } from "preact";
import { useState, useCallback } from "preact/hooks";

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    try {
      setIsLoading(true);
      const formData = new FormData(event.target);
      const objData = Object.fromEntries(formData.entries());
      await sleep(2000);
      console.log(objData);
    } catch (error) {
    } finally {
      setIsLoading(false);
      setResult(
        `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
      );
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} class='pt-6 px-6 border rounded-md'>
      <main class='pt-8 relative z-0'>
        <header>
          <h3 class='text-lg leading-6 font-medium text-gray-900'>
            Property Information
          </h3>
          <p class='mt-1 text-sm text-gray-500'>
            These input will be used as parameters for our ML Algorithm
          </p>
        </header>

        <section class='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
          {/* Address */}
          <div class='sm:col-span-6'>
            <label
              htmlFor='address'
              class='block text-sm font-medium text-gray-700 capitalize'
            >
              address
            </label>
            <div class='mt-1'>
              <textarea
                name='address'
                rows={3}
                class='block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
            <p class='mt-2 text-sm text-gray-500'>
              Please make it as clear as possible.
            </p>
          </div>

          {/* Building Area */}
          <div class='sm:col-span-2'>
            <label
              htmlFor='building_area'
              class='block text-sm font-medium text-gray-700 capitalize'
            >
              Building Area
            </label>
            <div class='flex mt-1 rounded-md shadow-sm'>
              <input
                type='number'
                min={0}
                step={10}
                name='building_area'
                class='flex-1 block w-full min-w-0 border-gray-300 rounded-none focus:ring-indigo-500 focus:border-indigo-500 rounded-l-md sm:text-sm'
              />
              <span class='inline-flex items-center px-3 text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 sm:text-sm'>
                m2
              </span>
            </div>
          </div>

          {/* Land Area */}
          <div class='sm:col-span-2'>
            <label
              htmlFor='land_area'
              class='block text-sm font-medium text-gray-700 capitalize'
            >
              Land Area
            </label>
            <div class='flex mt-1 rounded-md shadow-sm'>
              <input
                type='number'
                min={0}
                step={10}
                name='land_area'
                class='flex-1 block w-full min-w-0 border-gray-300 rounded-none focus:ring-indigo-500 focus:border-indigo-500 rounded-l-md sm:text-sm'
              />
              <span class='inline-flex items-center px-3 text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 sm:text-sm'>
                m2
              </span>
            </div>
          </div>

          {/* Electrical Power */}
          <div class='sm:col-span-2'>
            <label
              htmlFor='electrical_power'
              class='block text-sm font-medium text-gray-700 capitalize'
            >
              Electrical Power
            </label>
            <div class='flex mt-1 rounded-md shadow-sm'>
              <input
                type='number'
                min={0}
                step={100}
                name='electrical_power'
                class='flex-1 block w-full min-w-0 border-gray-300 rounded-none focus:ring-indigo-500 focus:border-indigo-500 rounded-l-md sm:text-sm'
              />
              <span class='inline-flex items-center px-3 text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 sm:text-sm'>
                watt
              </span>
            </div>
          </div>

          {/* bedroom */}
          <div class='sm:col-span-2'>
            <label
              htmlFor='bedroom'
              class='block text-sm font-medium text-gray-700 capitalize'
            >
              bedroom
            </label>
            <div class='mt-1'>
              <select
                name='bedroom'
                class='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
          </div>

          {/* bathroom */}
          <div class='sm:col-span-2'>
            <label
              htmlFor='bathroom'
              class='block text-sm font-medium text-gray-700 capitalize'
            >
              bathroom
            </label>
            <div class='mt-1'>
              <select
                name='bathroom'
                class='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
          </div>

          {/* floor */}
          <div class='sm:col-span-2'>
            <label
              htmlFor='floor'
              class='block text-sm font-medium text-gray-700 capitalize'
            >
              floor
            </label>
            <div class='mt-1'>
              <select
                name='floor'
                class='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
          </div>

          {/* Additional Info */}
          <div class='sm:col-span-6'>
            <label
              htmlFor='additional_info'
              class='block text-sm font-medium text-gray-700 capitalize'
            >
              additional info
            </label>
            <div class='mt-1'>
              <textarea
                name='additional_info'
                rows={5}
                class='block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
          </div>
        </section>
      </main>

      <footer class='pt-5 relative z-0'>
        <div class='flex justify-center'>
          <button
            type='submit'
            class='ml-3 w-24 inline-flex justify-center items-center py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            {isLoading ? (
              <svg
                class='animate-spin h-5 w-5 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  class='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  stroke-width='4'
                ></circle>
                <path
                  class='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
            ) : (
              "Generate"
            )}
          </button>
        </div>
      </footer>

      <textarea
        className={`relative border-2 border-gray-300 rounded-md p-6 text-gray-800 w-full transition-all duration-500 origin-top h-64 mb-6 ${
          result ? "opacity-100 z-0 mt-6" : "opacity-0 -z-30 -mt-64"
        }`}
        onClick={(event) => {
          event.target.select();
          document.execCommand("copy");
        }}
        value={result}
      />
    </form>
  );
}

render(<App />, document.getElementById("copy-widget"));
