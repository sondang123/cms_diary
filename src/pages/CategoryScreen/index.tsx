import { Navigate, Route, Routes } from "react-router-dom";
import { BackGroundScreen } from "./BackgroundScreen";
import { CategoryStickerScreen } from "./CategoryStickerScreen";
import { AddCategoryBackground } from "./BackgroundScreen/AddCategoryBackground";
import { AddBackgroundSticker } from "./CategoryStickerScreen/AddBackgroundSticker";

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
      <Route
        path="background/add"
        element={
          <>
            <AddCategoryBackground title="Add Background Category" />
          </>
        }
      />
      <Route
        path="background/edit/:id"
        element={
          <>
            <AddCategoryBackground title="Edit Background Category" />
          </>
        }
      />
      <Route
        path="sticker"
        element={
          <>
            <CategoryStickerScreen />
          </>
        }
      />
      <Route
        path="sticker/add"
        element={
          <>
            <AddBackgroundSticker title="Add Background Sticker" />
          </>
        }
      />
      <Route
        path="sticker/edit/:id"
        element={
          <>
            <AddBackgroundSticker title="Edit Background Sticker" />
          </>
        }
      />
    </Routes>
  );
};
