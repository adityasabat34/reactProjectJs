import { Link as RouterLink } from 'react-router-dom';
const ViewAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        className="block bg-black text-white text-center py-4 px-6 rounded-lg hover:bg-slate-500  "
      >
        View All Jobs
      </RouterLink>
    </section>
  );
};

export default ViewAllJobs;
