import { useEffect, useState } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "./common/Loader";
import { Dashboard } from "./pages/Dashboard";
import { ThemeScreen } from "./pages/ThemeScreen";
import { IconModScreen } from "./pages/IconMoodScreen";
import { AddThemeScreen } from "./pages/ThemeScreen/AddThemeScreen";
import { CategoryScreen } from "./pages/CategoryScreen";
import { AddIconMoodScreen } from "./pages/IconMoodScreen/AddIconMoodScreen";
import { EditIconMoodScreen } from "./pages/IconMoodScreen/EditIconMoodScreen";
import { BackgroundScreenRouter } from "./pages/BackgroundScreen";
import { StickerScreenRouter } from "./pages/StickerScreen";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppToast } from "./components/AppComponent/AppToast";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return loading ? (
    <Loader />
  ) : (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/theme" element={<ThemeScreen />} />
          <Route path="/theme/add" element={<AddThemeScreen />} />
          <Route
            path="/theme/edit/:id"
            element={<AddThemeScreen title="Edit Theme" isEdit={true} />}
          />
          <Route path="/icon-mood/add" element={<AddIconMoodScreen />} />
          <Route path="/icon-mood/edit/:id" element={<EditIconMoodScreen />} />
          <Route path="/icon-mood" element={<IconModScreen />} />
          <Route path="/category/*" element={<CategoryScreen />} />
          <Route path="/background/*" element={<BackgroundScreenRouter />} />
          <Route path="/sticker/*" element={<StickerScreenRouter />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
        <AppToast />
      </QueryClientProvider>
    </>
  );
}

export default App;
