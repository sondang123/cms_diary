import React from "react";
import { BaseTextSearch } from "../AppComponent/BaseTextSearch";
import { ButtonFullBg } from "../AppComponent/AppButton/ButtonFullBg";
export const Header: React.FC = () => {
  return (
    <div className="flex justify-between py-4 px-10 bg-white ml-1">
      <div className="w-[30%]">
        <BaseTextSearch
          placeholder="Search or type a command"
          className="p-2"
        />
      </div>
      <div className="flex gap-3">
        <ButtonFullBg className="py-3 px-5 rounded-3 bg-neutral-1 text-neutral-7">
          <p className="typo-s15-w700">Sign in</p>
        </ButtonFullBg>
        <ButtonFullBg className="py-3 px-5 bg-primary-main rounded-3">
          <p className="typo-s15-w700"> Sign up</p>
        </ButtonFullBg>
      </div>
    </div>
  );
};
