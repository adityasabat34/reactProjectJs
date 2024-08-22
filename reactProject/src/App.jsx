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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route index element={<Homepages />} />
      <Route path="/jobs" element={<JobsScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
