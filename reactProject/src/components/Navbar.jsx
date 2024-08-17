import logo from '../assets/images/logo.png';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="bg-teal-800 border-b border-black">
        <div className="mx-auto max-w-7xl px-2 sm:px-8">
          <div className="flex h-20 justify-between items-center">
            <div className="flex flex-1  justify-center md:items-stretch md:justify-start">
              <RouterLink
                className="flex flex-shrink-0 items-center mr-4"
                to="/index.html"
              >
                <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  <span className="bg-blue-900 rounded-md border-b-2 px-0.5">
                    Dev
                  </span>
                  eloper Portal
                </span>
              </RouterLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <RouterLink
                    to="/index.html"
                    className="text-white bg-black font-serif hover:bg-gray-900 hover:text-white  rounded-md px-3 py-2 "
                  >
                    Home
                  </RouterLink>
                  <RouterLink
                    to="/jobs"
                    className="text-white font-serif hover:bg-gray-900 hover:text-white  hover:font-bold rounded-md px-3 py-2"
                  >
                    Jobs
                  </RouterLink>
                  <RouterLink
                    to="/add-job.html"
                    className="text-white hover:bg-gray-900 font-serif hover:text-white  hover:font-bold rounded-md px-3 py-2"
                  >
                    Add Job
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
