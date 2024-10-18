"use client";
import {} from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { MoreMenu } from "./MoreMenu";

export default function Header() {
  return (
    <div className="bg-[--white] border-b border-[--lines-light] px-6 py-4 flex justify-between">
      <h1 className="font-bold text-2xl self-center">Platform Launch</h1>
      <div className="flex items-center gap-4">
        <Button
          label="Add New Task"
          onClick={() => alert("Header")}
          icon={<PlusIcon className="size-6" />}
          disabled={true}
        />
        <MoreMenu
          items={[
            { label: "Edit Board", classname: "text-[--medium-grey]", link: "#" },
            { label: "Delete Board", classname: "text-[--red]", link: "#" },
          ]}
        />
      </div>
    </div>
  );
}
