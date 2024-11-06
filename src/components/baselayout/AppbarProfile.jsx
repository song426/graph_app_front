import React from "react";
import { Images } from "./../../assets/images";
import { Icons } from "../../assets/icons";

const AppbarProfile = () => {
  return (
    <div className="appbar-profile profile-dropdown ml-6 cursor-pointer md:block hidden">
      <div className="drop-info flex items-center gap-x-4">
        <div className="drop-info-img w-11 h-11 overflow-hidden rounded-full">
          <img
            src={Images.ProfileImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="drop-info-text">
          <div className="text-group flex flex-col min-w-20 mt-2 justify-center leading-4">
            <span className="font-semibold overflow-hidden">Marshall</span>
            <span className="text-sm text-gray-400">Admin</span>
          </div>
        </div>
        <img
          src={Icons.ChevronDownDark}
          className="w-5 h-5 dark:invert-[1] dark:brightness-[100%]"
          alt=""
        />
      </div>
    </div>
  );
};

export default AppbarProfile;
