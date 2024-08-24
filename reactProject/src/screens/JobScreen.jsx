import Loader from '../components/Loader';
import { useParams, useLoaderData } from 'react-router-dom';

const JobScreen = () => {
  const { id } = useParams();
  const job = useLoaderData();
  console.log(job);

  return <></>;
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = res.json();
  return data;
};

export { JobScreen as default, jobLoader };
