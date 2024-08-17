import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import MainLayouts from './layouts/MainLayouts';
import Homepages from './screens/Homepages';
import JobsScreen from './screens/JobsScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route index element={<Homepages />} />
      <Route path="/jobs" element={<JobsScreen />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
