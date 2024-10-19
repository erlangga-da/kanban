import { Squares2X2Icon, SquaresPlusIcon } from "@heroicons/react/24/outline";

interface Link {
  label: string;
  active: boolean;
}

interface MenuProps {
  Links: Link[];
}

export default function Sidebar({ Links }: MenuProps) {
  return (
    <div className="bg-[--white] border-r border-[--lines-light] w-[300px]">
      <div className="h-[85px] px-6 py-4 grid items-center">
        <img src="/images/logo-dark.svg" alt="Example SVG" width="150" />
      </div>
      <p className="px-6 pb-4 text-xs text-[--medium-grey] font-semibold tracking-[2.4px]">
        ALL BOARDS (3)
      </p>
      <div className="pr-6 pb-6 overflow-y-scroll" style={{ height: "calc(100vh - (85px + 32px))" }}>
        {Links.map((value, index) => (
          <a
            href="#"
            className={`flex gap-4 px-6 py-3 ${
              value.active
                ? "bg-[--main-purple] text-[--white]"
                : "text-[--medium-grey]"
            } rounded-r-full`}
          >
            <Squares2X2Icon className="size-6" />
            <p
              className="font-semibold text-md whitespace-nowrap text-ellipsis overflow-hidden"
              style={{ width: "calc(100% - 24px)" }}
            >
              {value.label}
            </p>
          </a>
        ))}
        <a
          href="#"
          className="flex gap-4 px-6 py-3 text-[--main-purple] rounded-r-full"
        >
          <SquaresPlusIcon className="size-6" />
          <p
            className="font-semibold text-md whitespace-nowrap text-ellipsis overflow-hidden"
            style={{ width: "calc(100% - 24px)" }}
          >
            Add new Board
          </p>
        </a>
      </div>
    </div>
  );
}
