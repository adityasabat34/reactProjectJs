import { useEffect, useState } from 'react';
import JobListing from './JobListing';
import Loader from './Loader';
import PropTypes from 'prop-types';

const JobListings = ({ isHomeScreen = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiDataURL = isHomeScreen ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        const res = await fetch(apiDataURL);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
        setError('');
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="bg-teal-200 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <Loader />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-teal-200 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <p className="text-red-700 text-center"> {error}</p>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-teal-100 px-4 py-10 ">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          {isHomeScreen ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

JobListings.propTypes = {
  isHomeScreen: PropTypes.bool,
};

export default JobListings;
