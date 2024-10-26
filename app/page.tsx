"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="inline-flex flex-col gap-8 justify-center items-center w-full h-full">
      <p className="text-lg font-bold text-[--medium-grey] text-center">
        To get started. Select available board or add new board.
      </p>
      <Button
        label="Add New Board"
        onClick={() => alert("Header")}
        icon={<PlusIcon className="size-6" />}
      />
    </div>
  );
}
