import { useState, useCallback } from "preact/hooks";

export function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData(event.target);
      const objData = Object.fromEntries(formData.entries());
      console.log(objData);
      let descriptor = "These are property description. ";
      Object.keys(objData).forEach((key) => {
        let sentence = "";
        switch (key) {
          case "additional_info":
            sentence = "This is an additional info: " + objData[key] + ". ";
            break;
          case "address":
            sentence = "It is located in: " + objData[key] + ". ";
            break;
          case "bathroom":
            sentence = "It has " + objData[key] + " bathroom. ";
            break;
          case "bedroom":
            sentence = "It has " + objData[key] + " bedroom. ";
            break;
          case "building_area":
            sentence =
              "It has " + objData[key] + " square meter building area. ";
            break;
          case "electrical_power":
            sentence = "It has " + objData[key] + " Watt electrical power. ";
            break;
          case "floor":
            sentence = "It has " + objData[key] + " floor. ";
            break;
          case "land_area":
            sentence = "It has " + objData[key] + " square meter land area. ";
            break;
          default:
            break;
        }
        descriptor += sentence;
      });
      let res = await fetch("https://gpt-3-api.herokuapp.com/generate", {
        method: "PATCH",
        body: JSON.stringify({
          descriptor,
        }),
        headers: { "Content-Type": "application/json" },
      });
      res = await res.json();
      setResult(res.choices[0].text);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <main class='pt-6 px-6 border rounded-md'>
      <form id='copy-form' onSubmit={handleSubmit} class='pt-8 relative z-0'>
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
      </form>

      <footer class='pt-5 relative z-0 flex justify-center'>
        <button
          form='copy-form'
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
      </footer>

      <textarea
        id='copy-result'
        className={`relative border-2 border-gray-300 rounded-md p-6 text-gray-800 w-full transition-all duration-500 origin-top h-64 mb-6 ${
          result ? "opacity-100 z-0 mt-6" : "opacity-0 -z-30 -mt-64"
        }`}
        onClick={(event) => {
          event.target.select();
          document.execCommand("copy");
        }}
        value={result}
      />
    </main>
  );
}
