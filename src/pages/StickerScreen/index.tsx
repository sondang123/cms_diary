import { Route, Routes } from "react-router-dom";

import { AddStickerScreen } from "./AddStickerScreen";
import { StickerScreen } from "./StickerScreen";

export const StickerScreenRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <>
            <StickerScreen />
          </>
        }
      />
      <Route
        path="add"
        element={
          <>
            <AddStickerScreen title="Add Sticker " />
          </>
        }
      />
      <Route
        path="edit/:id"
        element={
          <>
            <AddStickerScreen title="Edit Sticker " />
          </>
        }
      />
    </Routes>
  );
};
