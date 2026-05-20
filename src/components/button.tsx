"use client";

import { useRouter } from "next/navigation";

type GroupButtonProps = { name: string; url: string; groupName?: string[] };

type ButtonProps = {
  icon?: React.ReactNode;
  color?: string;
  name: string;
  url: string;
};

const IconButton = ({ icon, color, name, url }: ButtonProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`${url}`)}
      className={`${color ? color : "bg-orange-300"} hover:bg-orange-500 cursor-pointer inline-flex items-center text-body border hover:text-heading shadow-xs font-medium leading-5 rounded-sm text-sm px-4 py-2.5`}
    >
      {icon}
      <span>{name}</span>
    </button>
  );
};

const IconGroupButton = ({ name, url }: GroupButtonProps) => {
  return (
    <>
      <div className="inline-flex rounded-base -space-x-px" role="group">
        <button
          type="button"
          className="inline-flex items-center text-heading bg-neutral-primary border border-dark-strong hover:bg-dark hover:text-white focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none"
        >
          <svg
            className="w-4 h-4 me-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          Profile
        </button>
        <button
          type="button"
          className="inline-flex items-center text-heading bg-neutral-primary border border-dark-strong hover:bg-dark hover:text-white focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none"
        >
          <svg
            className="w-4 h-4 me-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"
            />
          </svg>
          Settings
        </button>
        <button
          type="button"
          className="inline-flex items-center text-heading bg-neutral-primary border border-dark-strong hover:bg-dark hover:text-white focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none"
        >
          <svg
            className="w-4 h-4 me-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"
            />
          </svg>
          Messages
        </button>
      </div>
    </>
  );
};

const GroupButton = ({ name, url }: GroupButtonProps) => {
  return (
    <div className="inline-flex rounded-base -space-x-px" role="group">
      <button
        type="button"
        className="text-heading bg-neutral-primary border border-dark-strong hover:bg-dark hover:text-white focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none"
      >
        Profile
      </button>
      <button
        type="button"
        className="text-heading bg-neutral-primary border border-dark-strong hover:bg-dark hover:text-white focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none"
      >
        Settings
      </button>
      <button
        type="button"
        className="text-heading bg-neutral-primary border border-dark-strong hover:bg-dark hover:text-white focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none"
      >
        Downloads
      </button>
    </div>
  );
};

export { IconGroupButton, GroupButton, IconButton };
