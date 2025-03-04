import React from "react";
import { useUser } from "../../../../store/store";
import CommunityIcon from "../../../../svg/Community";
import StoryIcon from "../../../../svg/Story";
import ChatIcon from "../../../../svg/Chat";

const btn =
  "w-[40px] h-[40px] rounded-full flex items-center justify-center active:bg-dark_hover_1";

function SidebarHeader() {
  const { user } = useUser();

  // console.log("user = ", user);
  return (
    <div className="h-[50px] dark:bg-dark_bg_2 flex items-center p16">
      {/* container */}
      <div className="w-full flex items-center justify-between">
        {/*user image*/}
        <button className={btn}>
          <img
            src={user.picture}
            alt={user.username}
            className="w-full h-full rounded-full object-cover"
          />
        </button>
        {/*user icons*/}
        <ul className="flex items-center gap-x-2 5">
          <li>
            <button className={btn}>
              <CommunityIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
          <li>
            <button className={btn}>
              <StoryIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
          <li>
            <button className={btn}>
              <ChatIcon className="dark:fill-dark_svg_1" />
            </button>
          </li>
          {/* <li className="relative" onClick={() => setShowMenu((prev) => !prev)}>
            <button className={`btn ${showMenu ? "bg-dark_hover_1" : ""}`}>
              <DotsIcon className="dark:fill-dark_svg_1" />
            </button>
            {showMenu ? <Menu /> : null}
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default SidebarHeader;
