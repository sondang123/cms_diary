import { TableBackground } from "~/components/FeatureComponent/BackgroundComponent/TableBackground";
import DefaultLayout from "~/layout/DefaultLayout";

export const BackGroundScreen: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <p className="typo-s36-w700 text-ui-textTitle">Background</p>
        <TableBackground />
      </div>
    </DefaultLayout>
  );
};
