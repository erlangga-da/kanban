"use client";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
// import { useState } from "react";

interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export default function Modal({ isOpen, setIsOpen }: ModalProps) {
  //   const handleSubmit = (event: React.FormEvent) => {
  //     event.preventDefault();
  //     console.log("Task created");
  //     closeModal();
  //   };
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex bg-[--white] border-[1px] border-[--lines-light] min-w-[280px] rounded-lg items-center justify-center font-semibold text-sm text-[--main-purple] py-3 gap-1 duration-300"
      >
        <PlusIcon className="size-5" />
        Add New Task
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
          {/* Overlay Background */}
          <div className="fixed inset-0 bg-black opacity-50"></div>

          {/* Modal Content */}
          <div className="flex flex-col bg-white p-6 pr-0 rounded-lg z-10 w-full max-h-[90vh] max-w-lg mx-auto">
            <div className="flex items-center justify-between mb-4 mr-6">
              <h2 className="text-lg font-bold">Add New Task</h2>
              <button onClick={() => setIsOpen(false)}>
                <XMarkIcon className="size-6" />
              </button>
            </div>
            <div className="overflow-y-auto">
              <form
                className="overflow-auto mr-6"
                style={{ height: "calc(100% - 45px)" }}
              >
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-[--medium-grey] mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full py-2 px-4 border border-[--lines-light] font-medium rounded  placeholder:text-[--black] placeholder:opacity-[25%]"
                    placeholder="e.g. Take coffee break"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-[--medium-grey] mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full py-2 px-4 border border-[--lines-light] font-medium rounded  placeholder:text-[--black] placeholder:opacity-[25%] h-[112px] resize-none"
                    maxLength={255}
                    placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
                    required
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-[--medium-grey] mb-2">
                    Subtasks
                  </label>
                  <div className="flex mb-4 gap-4 items-center">
                    <input
                      type="text"
                      className="w-full py-2 px-4 border border-[--lines-light] font-medium rounded  placeholder:text-[--black] placeholder:opacity-[25%]"
                      placeholder="e.g. Drink coffee & smile"
                      required
                    />
                    <button onClick={() => setIsOpen(false)}>
                      <XMarkIcon className="size-6 text-[--medium-grey]" />
                    </button>
                  </div>
                  <Button
                    label="Add New Subtask"
                    onClick={() => alert("test")}
                    fullWidth={true}
                    style={
                      "bg-[#EFEFF9] text-[--main-purple] hover:bg-[#D8D7F1]"
                    }
                    icon={<PlusIcon className="size-6" />}
                  />
                </div>

                <Button
                  label="Create Task"
                  onClick={() => alert("test")}
                  fullWidth={true}
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
