import { Link as RouterLink } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
const NotFoundScreen = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4 " />
      <h1 className="text-6xl font-bold mb-4 bg-yellow-200 rounded-md p-3 border-2 border-solid border-black">
        404 Not Found
      </h1>
      <p className="text-xl mb-5 font-bold">This page does not exist</p>
      <RouterLink
        to="/"
        className=" bg-teal-200 text-black hover:bg-teal-600 hover:text-white rounded-md p-2 border-2 border-solid border-black mt-4 px-3"
      >
        Go Back
      </RouterLink>
    </section>
  );
};

export default NotFoundScreen;
