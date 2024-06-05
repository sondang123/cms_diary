import { TableSticker } from "~/components/FeatureComponent/StickerComponent/TableSticker";
import DefaultLayout from "~/layout/DefaultLayout";

export const StickerScreen: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <p className="typo-s36-w700 text-ui-textTitle">Sticker</p>
        <TableSticker />
      </div>
    </DefaultLayout>
  );
};
