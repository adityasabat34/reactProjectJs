import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const Homepages = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHomeScreen={true} />
      <ViewAllJobs />
    </>
  );
};

export default Homepages;
