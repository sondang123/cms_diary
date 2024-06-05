import React from "react";
import { cn } from "~/lib/utils";
interface IProps {
  onNextPage: React.MouseEventHandler<HTMLElement>;
  onPreviousPage: React.MouseEventHandler<HTMLElement>;
  disabledNextPage: boolean;
  disabledPreviousPage: boolean;
}
export const AppPagination: React.FC<IProps> = ({
  onNextPage,
  onPreviousPage,
  disabledNextPage = false,
  disabledPreviousPage = false,
}) => {
  return (
    <div className="flex justify-center border-t border-neutral-3 pt-3">
      <div className="flex gap-2 items-center">
        <div
          className={cn(
            "p-2",
            disabledPreviousPage
              ? ""
              : "border-2 border-neutral-3 rounded-full hover:opacity-80 cursor-pointer"
          )}
          aria-disabled={disabledPreviousPage}
          onClick={onPreviousPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill={disabledPreviousPage ? "#6F767E" : "#111315"}
          >
            <path d="M10.707 17.7929C11.0975 18.1834 11.0975 18.8166 10.707 19.2071C10.3164 19.5976 9.68327 19.5976 9.29274 19.2071L3.49985 13.4142C2.7188 12.6332 2.7188 11.3668 3.49985 10.5858L9.29274 4.79289C9.68327 4.40237 10.3164 4.40237 10.707 4.79289C11.0975 5.18342 11.0975 5.81658 10.707 6.20711L5.91406 11H19.9998C20.5521 11 20.9998 11.4477 20.9998 12C20.9998 12.5523 20.5521 13 19.9998 13H5.91406L10.707 17.7929Z" />
          </svg>
        </div>
        <div
          className={cn(
            "p-2",
            disabledNextPage
              ? ""
              : "border-2 border-neutral-3 rounded-full hover:opacity-80 cursor-pointer"
          )}
          aria-disabled={disabledNextPage}
          onClick={onNextPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill={disabledNextPage ? "#6F767E" : "#111315"}
          >
            <path d="M13.2929 17.7929C12.9024 18.1834 12.9024 18.8166 13.2929 19.2071C13.6834 19.5976 14.3166 19.5976 14.7071 19.2071L20.5 13.4142C21.281 12.6332 21.281 11.3668 20.5 10.5858L14.7071 4.79289C14.3166 4.40237 13.6834 4.40237 13.2929 4.79289C12.9024 5.18342 12.9024 5.81658 13.2929 6.20711L18.0858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H18.0858L13.2929 17.7929Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
