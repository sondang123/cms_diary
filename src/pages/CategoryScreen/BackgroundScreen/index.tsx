import { TableBackgroundCategory } from "~/components/FeatureComponent/CategoryComponent/TableBackgroundCategory";
import DefaultLayout from "../../../layout/DefaultLayout";

export const BackGroundScreen: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <p className="typo-s36-w700">Category</p>
        <TableBackgroundCategory />
      </div>
    </DefaultLayout>
  );
};
