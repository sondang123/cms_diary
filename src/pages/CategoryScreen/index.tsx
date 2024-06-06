import { Navigate, Route, Routes } from "react-router-dom";
import { BackGroundScreen } from "./BackgroundScreen";
import { CategoryStickerScreen } from "./CategoryStickerScreen";
import { AddCategoryBackground } from "./BackgroundScreen/AddCategoryBackground";
import { AddBackgroundSticker } from "./CategoryStickerScreen/AddBackgroundSticker";

export const CategoryScreen: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="background-cate" />} />
      <Route
        path="background-cate"
        element={
          <>
            <BackGroundScreen />
          </>
        }
      />
      <Route
        path="background-cate/add"
        element={
          <>
            <AddCategoryBackground title="Add Background Category" />
          </>
        }
      />
      <Route
        path="background-cate/edit/:id"
        element={
          <>
            <AddCategoryBackground title="Edit Background Category" />
          </>
        }
      />
      <Route
        path="sticker-cate"
        element={
          <>
            <CategoryStickerScreen />
          </>
        }
      />
      <Route
        path="sticker-cate/add"
        element={
          <>
            <AddBackgroundSticker title="Add Background Sticker" />
          </>
        }
      />
      <Route
        path="sticker-cate/edit/:id"
        element={
          <>
            <AddBackgroundSticker title="Edit Background Sticker" />
          </>
        }
      />
    </Routes>
  );
};
