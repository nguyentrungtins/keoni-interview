import { useState } from 'react';

export default function AddUrls() {
  const [showUrl, setShowUrl] = useState(false);
  const [listUrl, setListUrl] = useState([]);
  const [currentUrl, setCurrentUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    if (currentUrl.trim()) {
      // Check if the input is not just whitespace
      setListUrl((prevUrls) => [...prevUrls, currentUrl]);
      setCurrentUrl(''); // Reset input field after submission
    }
  };
  const handleDelete = (indexToDelete) => {
    setListUrl((currentList) =>
      currentList.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <>
      {showUrl && (
        <form onSubmit={handleSubmit} className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500">https://</span>
            </div>
            <input
              type="text"
              id="simple-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-16 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search branch name..."
              required
              value={currentUrl}
              onChange={(e) => setCurrentUrl(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="ml-2 rounded-lg p-2.5 text-sm font-medium text-red-700 hover:border-red-800 hover:text-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            <svg
              className="h-4 w-4 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
            </svg>
            <span className="sr-only">Clear Search</span>
          </button>
        </form>
      )}
      <div className="flex justify-end">
        <button
          className="flex items-center text-purple-500 font-semibold hover:underline "
          onClick={() => {
            setShowUrl((prev) => !prev);
          }}
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          Add more URLs
        </button>
      </div>
      {/* Render list of URLs */}
      <ul>
        {listUrl.map((url, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-gray-700 mt-2"
          >
            {url}
            <button
              onClick={() => handleDelete(index)}
              className="ml-4 rounded-lg p-1 text-sm font-medium text-red-700 hover:bg-red-100"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
