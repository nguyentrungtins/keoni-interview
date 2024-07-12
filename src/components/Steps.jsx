import classNames from 'classnames';

const steps = [
  { name1: 'About', name2: 'You', status: 'completed' },
  { name1: 'Inspirations', name2: 'You', status: 'completed' },
  { name1: 'Brand', name2: 'Voice', status: 'current' },
  { name1: 'Knowledge', name2: 'Base', status: 'upcoming' },
];

export default function Steps() {
  return (
    <ol className="flex items-center w-full px-2  text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      {steps.map((step, index) => (
        <Step key={index} {...step} stepIndex={index} />
      ))}
    </ol>
  );
}
// upcoming , completed , current
function Step({ stepIndex, status, name1, name2 }) {
  return (
    <li
      className={classNames('flex md:w-full items-center  ', {
        'text-indigo-600 dark:text-indigo-600 after:border-indigo-600 dark:after:border-indigo-600 ':
          status === 'completed' || status === 'current',
        'text-gray-200 dark:text-gray-500 after:border-gray-200 dark:after:border-gray-500':
          status === 'upcoming',
        "sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-indigo-600 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-indigo-600":
          stepIndex !== 3,
      })}
    >
      <span
        className={classNames('flex items-center gap-2', {
          'text-indigo-600  ': status === 'completed' || status === 'current',
          'text-indigo-600 dark:text-gray-500 ': status === 'upcoming',
          "after:content-['/'] sm:after:hidden after:mx-2 after:text-text-indigo-600 dark:after:text-gray-500 ":
            stepIndex !== 3,
        })}
      >
        {status === 'completed' && (
          <svg
            className="size-8  me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        )}
        {status === 'current' && (
          <div className=" size-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
            {stepIndex + 1}
          </div>
        )}
        {status === 'upcoming' && (
          <div className=" size-8 bg-white border border-gray-400 text-gray-400 rounded-full flex items-center justify-center">
            4
          </div>
        )}
        {name1} <span className="hidden sm:inline-flex sm:ms-2">{name2}</span>
      </span>
    </li>
  );
}
