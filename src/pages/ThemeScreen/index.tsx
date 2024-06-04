import { TableTheme } from "~/components/FeatureComponent/ThemeComponent/TableTheme";
import DefaultLayout from "../../layout/DefaultLayout";

export const ThemeScreen: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <p className="typo-s36-w700">Theme</p>
        <TableTheme />
      </div>
    </DefaultLayout>
  );
};
