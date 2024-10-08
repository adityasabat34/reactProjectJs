import Loader from '../components/Loader';
import { useLoaderData, Link as RouterLink } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';

const JobScreen = () => {
  const job = useLoaderData();

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <RouterLink
            to="/jobs"
            className="flex items-center text-teal-700 hover:text-teal-900"
          >
            <FaArrowLeft className="mr-2" />
            <button className="bg-teal-200 px-4 py-2 border border-black rounded-md">
              Back
            </button>
          </RouterLink>
        </div>
      </section>

      <section className="bg-teal-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <label className="mr-2 text-gray-500">Job Type - </label>
                <div className="text-gray-500 mb-4 inline-block">
                  {job.type}
                </div>
                <div className="text-3xl font-bold mb-4">{job.title}</div>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-800 mr-1" />
                  <div className="text-orange-600">{job.location}</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-teal-800 text-lg font-bold mb-6">
                  Job Description
                </h3>
                <p className="mb-4">{job.description}</p>
                <h3 className="text-teal-800 text-lg font-bold mb-2">Salary</h3>
                <p className="mb-4">{job.salary} / Year</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                <h2 className="text-3xl bg-teal-200 border-2 border-black inline-block p-2 rounded-md mb-2">
                  {job.company.name}
                </h2>
                <p className="my-2">{job.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>
                <p className="my-2 bg-teal-100 p-2 shadow-md font-bold">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>
                <p className="my-2 bg-teal-100 shadow-md p-2 font-bold">
                  {job.company.contactPhone}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <RouterLink
                  to={`/jobs/edit/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </RouterLink>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  try {
    const res = await fetch(`/api/jobs/${params.id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch job data');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // This will be handled by React Router's error handling
  }
};

export { JobScreen as default, jobLoader };
