import DefaultLayout from "../../layout/DefaultLayout";

export const Dashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <div>
        <p className="typo-s36-w700 text-ui-textTitle">Hello Admin</p>
        <p className="typo-s14-w400 text-ui-text02">
          Wellcome to Diary CMS Dashboard
        </p>

        <div className="grid grid-cols-5 gap-6 pt-10">
          <div className="bg-red-200 p-10 rounded-5 shadow-md">
            <p>Total Theme</p>
            <p className="typo-s32-w700">4,423</p>
          </div>
          <div className="bg-blue-200 p-10 rounded-5 shadow-md">
            <p>Total Theme</p>
            <p className="typo-s32-w700">4,423</p>
          </div>
          <div className="bg-green-300 p-10 rounded-5 shadow-md">
            <p>Total Theme</p>
            <p className="typo-s32-w700">4,423</p>
          </div>
          <div className="bg-yellow-200 p-10 rounded-5 shadow-md">
            <p>Total Theme</p>
            <p className="typo-s32-w700">4,423</p>
          </div>
          <div className="bg-purple-200 p-10 rounded-5 shadow-md">
            <p>Total Theme</p>
            <p className="typo-s32-w700">4,423</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
