"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

interface Task {
  label: string;
  progress: number;
}

interface TaskProp {
  column: string;
  tasks: Task[];
}

interface Group {
  TaskProps: TaskProp[];
}

const TaskCard = ({ label, progress }: Task) => {
  return (
    <div className="bg-[--white] px-4 py-6 rounded-lg border-[1px] border-[--lines-light]">
      <b className="text-base text-[--black]">{label}</b>
      <p className="text-sm font-semibold text-[--medium-grey] mt-2">
        {progress} of 3 substasks
      </p>
    </div>
  );
};

export default function Content({ TaskProps }: Group) {
  // modal handler
  const [isOpen, setIsOpen] = useState(false);
  //untuk render column dan tasknya ||render column and it's children
  const RenderTask = () => {
    return TaskProps.map((value, index) => (
      <div key={index} className="min-w-[280px] h-full">
        <div className="flex gap-3 items-center mb-4">
          <div className="w-4 h-4 bg-[#49C4E5] rounded-full"></div>
          <p className="font-bold tracking-widest text-sm text-[--medium-grey] uppercase">
            {value.column} ( {value.tasks.length} )
          </p>
        </div>
        <div className="grid gap-y-4 pb-6">
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          {value.tasks.map((value, index) => (
            <TaskCard
              key={index}
              label={value.label}
              progress={value.progress}
            />
          ))}
        </div>
      </div>
    ));
  };
  return (
    <div
      className="bg-[--light-grey-bg] p-6 overflow-x-auto"
      style={{ height: "calc(100vh - 85px)" }}
    >
      {TaskProps.length > 0 ? (
        <div className="flex gap-6 h-full w-fit">
          <RenderTask />
          <button className="flex gap-2 items-center h-fit font-semibold text-md text-[--main-purple]" onClick={()=>alert("Add new column modal")}>
            <PlusIcon className="size-6" />
            Add new column
          </button>
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}

const Empty = () => {
  return (
    <div className="inline-flex flex-col gap-8 justify-center items-center w-full h-full">
      <p className="text-lg font-bold text-[--medium-grey] text-center">
        This board is empty. Create a new column to get started.
      </p>
      <Button
        label="Add New Column"
        onClick={() => alert("Header")}
        icon={<PlusIcon className="size-6" />}
      />
    </div>
  );
};
