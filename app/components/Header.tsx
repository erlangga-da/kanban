"use client";
import {} from "@headlessui/react";
import { MoreMenu } from "./MoreMenu";

export default function Header() {
  return (
    <div className="bg-[--white] border-b border-[--lines-light] px-6 py-6 flex justify-between items-center">
      <h1 className="font-bold text-2xl self-center">Platform Launch</h1>
      <MoreMenu
        items={[
          { label: "Edit Board", classname: "text-[--medium-grey]", link: "#" },
          { label: "Delete Board", classname: "text-[--red]", link: "#" },
        ]}
      />
    </div>
  );
}
