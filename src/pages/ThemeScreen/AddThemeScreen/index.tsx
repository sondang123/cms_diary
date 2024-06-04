import { useNavigate } from "react-router-dom";
import DefaultLayout from "../../../layout/DefaultLayout";

export const AddThemeScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <div>
        <div className="rounded-xl bg-white p-5 pt-8">
          <div className="flex items-center border-b border-neutral-100 pb-3.5">
            <div
              className="p-2 border border-neutral-200 rounded-1.5 mr-4 cursor-pointer hover:opacity-80"
              onClick={() => {
                navigate("/theme");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10.0005 13.1659C9.8725 13.1659 9.74448 13.1172 9.64715 13.0192L4.98048 8.35256C4.78515 8.15722 4.78515 7.84053 4.98048 7.6452L9.64715 2.97853C9.84248 2.7832 10.1592 2.7832 10.3545 2.97853C10.5498 3.17386 10.5498 3.49055 10.3545 3.68589L6.04119 7.9992L10.3545 12.3125C10.5498 12.5078 10.5498 12.8245 10.3545 13.0199C10.2565 13.1172 10.1285 13.1659 10.0005 13.1659Z"
                  fill="#4B5563"
                />
              </svg>
            </div>
            <p className="typo-s18-w600 text-neutral-900">Add Theme</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
