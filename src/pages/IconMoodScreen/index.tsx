import { TableIconMood } from "~/components/FeatureComponent/IconMoodComponent/TableIconMood";
import DefaultLayout from "../../layout/DefaultLayout";

export const IconModScreen: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <p className="typo-s36-w700 text-ui-textTitle">Icon Mood</p>
        <TableIconMood />
      </div>
    </DefaultLayout>
  );
};
