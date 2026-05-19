"use client";

type Props = { name: string };

const ProjectIndicator = ({ name }: Props) => {
  return (
    <span className="inline-flex items-start bg-gray-800 border border-orange-300 text-orange-300 text-[11px] font-medium px-1.5 py-0.5 rounded-sm">
      {name}
    </span>
  );
};

export default ProjectIndicator;
