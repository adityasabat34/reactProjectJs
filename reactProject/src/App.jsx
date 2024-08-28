import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import MainLayouts from './layouts/MainLayouts';
import Homepages from './screens/Homepages';
import JobsScreen from './screens/JobsScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import JobScreen, { jobLoader } from './screens/JobScreen';
import AddJobScreen from './screens/AddJobScreen';

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<Homepages />} />
        <Route path="/jobs" element={<JobsScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
        <Route path="/jobs/:id" element={<JobScreen />} loader={jobLoader} />
        <Route
          path="/add-job"
          element={<AddJobScreen addJobToSubmit={addJob} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
