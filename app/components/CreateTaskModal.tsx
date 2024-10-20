'use client';

import { useState } from 'react';

export default function CreateTaskModal() {
  // State untuk mengontrol apakah modal terbuka atau tidak
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk membuka modal
  const openModal = () => setIsOpen(true);

  // Fungsi untuk menutup modal
  const closeModal = () => setIsOpen(false);

  // Fungsi untuk submit form
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logika untuk submit form, seperti memanggil API
    console.log('Task created');
    closeModal(); // Tutup modal setelah submit
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={openModal}
      >
        Create Task
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
          {/* Overlay Background */}
          <div className="fixed inset-0 bg-black opacity-50"></div>

          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg z-10 w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Create Task</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Task Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Due Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
