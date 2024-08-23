import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';

const JobScreen = () => {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleJobDetails = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        console.log('code reaches here');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setJob(data);
      } catch (error) {
        console.log('HTTP req error', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleJobDetails();
  }, []);

  return (
    <div>
      <>
        {loading ? <Loader /> : <h2 className="text-center"> {job.title}</h2>}
      </>
    </div>
  );
};

export default JobScreen;
