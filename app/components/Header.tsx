"use client";
import {} from "@headlessui/react";
import { MoreMenu } from "./MoreMenu";

interface Props {
  title?: string
}

export default function Header({title}: Props) {
  return (
    <div className="bg-[--white] border-b border-[--lines-light] px-6 py-6 flex justify-between items-center">
      <h1 className="font-bold text-2xl self-center">{title}</h1>
      <MoreMenu
        items={[
          { label: "Edit Board", classname: "text-[--medium-grey]", link: "#" },
          { label: "Delete Board", classname: "text-[--red]", link: "#" },
        ]}
      />
    </div>
  );
}
