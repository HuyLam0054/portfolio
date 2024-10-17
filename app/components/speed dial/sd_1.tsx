"use client";
import * as React from "react";
import { ContactButton } from "../buttons/contact_button";
import { FaPhone } from "react-icons/fa";

export function SpeedDial_1() {
  const [isOpenSpeedDial, setIsOpenSpeedDial] = React.useState(false);
  return (
    <div className="fixed end-6 bottom-6 group">
      {isOpenSpeedDial && (
        <div className="flex flex-col items-center mb-4 space-y-2 duration-200">
          <ContactButton src="/Facebook_icon.svg" />
          <ContactButton src="/Facebook_icon.svg" />
          <ContactButton src="/Facebook_icon.svg" />
        </div>
      )}
      <button
        type="button"
        className="flex items-center justify-center text-white bg-yellow-700 rounded-full w-14 h-14 hover:bg-yellow-800 dark:bg-yellow-600 dark:hover:bg-yellow-700"
        onClick={() => {
          setIsOpenSpeedDial(!isOpenSpeedDial);
        }}
      >
        <FaPhone className="h-5 w-5" />
      </button>
    </div>
  );
}
