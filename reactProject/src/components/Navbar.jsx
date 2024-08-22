import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const acitveStatus = ({ isActive }) =>
    isActive
      ? 'bg-black text-white font-serif hover:bg-gray-900 hover:text-white  rounded-md px-3 py-2'
      : 'text-white font-serif hover:bg-gray-900 hover:text-white  rounded-md px-3 py-2';

  return (
    <>
      <nav className="bg-teal-800 border-b border-black">
        <div className="mx-auto max-w-7xl px-2 sm:px-8">
          <div className="flex h-20 justify-between items-center">
            <div className="flex flex-1  justify-center md:items-stretch md:justify-start">
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  <span className="bg-blue-900 rounded-md border-b-2 px-0.5">
                    Dev
                  </span>
                  eloper Portal
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={acitveStatus}>
                    Home
                  </NavLink>
                  <NavLink to="/jobs" className={acitveStatus}>
                    Jobs
                  </NavLink>
                  <NavLink to="/add-job" className={acitveStatus}>
                    Add Job
                  </NavLink>
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
