import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Container from "./components/Container";
import FormProvider from "./context/FormContexts";
import Plans from "./components/Plans";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Submitted from "./components/Submitted";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Container />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/addons" element={<AddOns />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/submitted" element={<Submitted />} />
      </>
    )
  );

  return (
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  );
};

export default App;
