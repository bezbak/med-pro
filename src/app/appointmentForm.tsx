import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface AppointmentFormProps {
  onClose: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true); // Управление открытием/закрытием модального окна

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Запись отправлена:', { name, phone, email });
    onClose();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
        <div className="fixed inset-0 bg-black opacity-30"></div>
        <div className="min-h-screen px-4 text-center">
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative inline-block w-full max-w-[800px] h-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {/* Кнопка закрытия (крестик) */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray hover:text-gray-400"
              >
                &#10007;
              </button>

              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 mb-4">
                Запись на консультацию
              </Dialog.Title>

              {/* Форма с полями и кнопкой */}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-[20px]">
                  <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-400 px-3 py-2 w-full rounded-xl"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border border-gray-400 px-3 py-2 w-full rounded-xl"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-400 px-3 py-2 w-full rounded-xl"
                    required
                  />
                  <button
                    type="submit"
                    className="border border-gray-400 px-6 py-3 bg-lightBlue text-[24px] text-gilroy text-white rounded-full"
                  >
                    Записаться
                  </button>
                </div>
              </form>
              {/* Конец формы */}
            </div>
            {/* Конец стиля модального окна */}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AppointmentForm;
