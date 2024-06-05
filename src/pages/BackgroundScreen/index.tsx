import { Route, Routes } from "react-router-dom";
import { BackGroundScreen } from "./BackgroundScreen";
import { AddBackgroundScreen } from "./AddBackgroundScreen";

export const BackgroundScreenRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <>
            <BackGroundScreen />
          </>
        }
      />
      <Route
        path="add"
        element={
          <>
            <AddBackgroundScreen title="Add Background " />
          </>
        }
      />
      <Route
        path="edit/:id"
        element={
          <>
            <AddBackgroundScreen title="Edit Background " />
          </>
        }
      />
    </Routes>
  );
};
