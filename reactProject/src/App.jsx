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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route index element={<Homepages />} />
      <Route path="/jobs" element={<JobsScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
      <Route path="/jobs/:id" element={<JobScreen />} loader={jobLoader} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
