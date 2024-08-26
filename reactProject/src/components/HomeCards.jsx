import Card from './Card';
import { Link as RouterLink } from 'react-router-dom';

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            <RouterLink
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-teal-800"
            >
              Browse Jobs
            </RouterLink>
          </Card>
          <Card bg="bg-teal-200">
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <RouterLink
              to="/add-job"
              className="inline-block bg-teal-800 text-white rounded-lg px-4 py-2  hover:bg-black"
            >
              Add Job
            </RouterLink>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
