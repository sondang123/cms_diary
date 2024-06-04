import { Navigate, Route, Routes } from "react-router-dom";
import { BackGroundScreen } from "./BackgroundScreen";

export const CategoryScreen: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="background" />} />
      <Route
        path="background"
        element={
          <>
            <BackGroundScreen />
          </>
        }
      />
    </Routes>
  );
};
