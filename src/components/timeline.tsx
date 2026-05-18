"use client";

import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";

type Props = { name: string; time: string; detail: string; current?: boolean };

export function Timeline_Component({ name, time, detail }: Props) {
  return (
    <Timeline>
      <TimelineItem>
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent>
          <TimelineTime>{time}</TimelineTime>
          <TimelineTitle>{name}</TimelineTitle>
          <TimelineBody>{detail}</TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export function Timeline2_Component({ name, time, detail, current }: Props) {
  return (
    <ol className="relative border-s-2">
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-green-50 rounded-full -inset-s-3 ring-5 ring-orange-200">
          <IoCalendarOutline className="text-green-700" />
        </span>
        <time className="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">
          {time}
        </time>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-heading my-2">
          {name}
          {current && (
            <span className="ms-2 bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded">
              currently
            </span>
          )}
        </h3>
        <p className="mb-4 text-body max-w-5xl">{detail}</p>
      </li>
    </ol>
  );
}
