import AddUrls from './components/AddUrls';
import Steps from './components/Steps';
import React, { useState } from 'react';
function App() {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="min-h-screen bg-[#F9FAFC]">
      <div className="max-w-7xl mx-auto p-10 space-y-12">
        <div>
          <h1 className="text-4xl font-bold ">Welcome onboard, Jordan!</h1>
          <h3 className="text-[#737373] text-lg">
            Help Keoni.ai create personalized content for you (&#60;5 min)
          </h3>
        </div>
        <Steps />
        <div className="bg-white pt-10 px-12 space-y-10">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold ">Brand Voice</h1>
            <p className="text-[#737373]">
              Tailor the content to your brand voice. Simply input your
              company’s landing page URL. You can add additional brand voices
              later in the configure screen
            </p>
          </div>
          <div className="flex-1 rounded-lg border-[0.5px] border-[#8F47FF] bg-[#F1ECFE] p-4">
            <p className="text-gray-700">
              This is the text in the fourth section. It has a border of #8F47FF
              and 0.5px thickness.
            </p>
          </div>
          {/* Radio choose */}
          <div className="bg-gray-100  ">
            <div className="flex space-x-4">
              <div className="flex-1 rounded-lg border-[0.5px] border-[#8F47FF] bg-[#F9FAFC] p-4">
                <div className="flex items-center">
                  <div className="mr-4">
                    <input
                      type="radio"
                      name="cardOption"
                      value="option1"
                      checked={selectedOption === 'option1'}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="form-radio h-5 w-5 rounded-full border-gray-300 caret-indigo-600"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-700">
                      This is the text on the right side of the card. You can
                      add more text here as needed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 rounded-lg border-[0.5px] border-[#8F47FF] bg-[#F9FAFC] p-4">
                <div className="flex items-center">
                  <div className="mr-4">
                    <input
                      type="radio"
                      name="cardOption"
                      value="option2"
                      checked={selectedOption === 'option2'}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="form-radio h-5 w-5 rounded-full border-gray-300 caret-indigo-600"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-700">
                      This is the text on the right side of the card. You can
                      add more text here as needed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 rounded-lg border-[0.5px] border-[#8F47FF] bg-[#F9FAFC] p-4">
                <div className="flex items-center">
                  <div className="mr-4">
                    <input
                      type="radio"
                      name="cardOption"
                      value="option3"
                      checked={selectedOption === 'option3'}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="form-radio h-5 w-5 rounded-full border-gray-300 "
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-700">
                      This is the text on the right side of the card. You can
                      add more text here as needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="font-medium text-[#434343] ">Business references</p>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

          {/* URL chia component */}
          <AddUrls />

          {/* AI */}
          <div className="bg-purple-50 text-center p-6 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">
              Preview Keonis Brand Voice Suggestion
            </h2>
            <div className=" border border-dashed border-purple-300 p-8 rounded-md">
              <p className="text-gray-600 mb-6">
                Fill out all the fields, and well craft the perfect brand voice
                for you!
              </p>
              <a
                href="#"
                className="text-purple-500 font-semibold hover:underline"
              >
                Generate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
