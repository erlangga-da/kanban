"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

export default function Content() {
  return (
    <div
      className="bg-[--light-grey-bg] p-6"
      style={{ height: "calc(100vh - 85px)" }}
    >
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
    </div>
  );
}
