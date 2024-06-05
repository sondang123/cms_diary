import { TableStickerCategory } from "~/components/FeatureComponent/CategoryComponent/TableStickerCategory";
import DefaultLayout from "../../../layout/DefaultLayout";

export const CategoryStickerScreen: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <p className="typo-s36-w700 text-ui-textTitle">Category</p>
        <TableStickerCategory />
      </div>
    </DefaultLayout>
  );
};
