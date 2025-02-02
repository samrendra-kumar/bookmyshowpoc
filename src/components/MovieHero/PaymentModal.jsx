import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const PaymentModal = ({ isOpen, setIsOpen, amount }) => {
  const closeModal = () => setIsOpen(false);

  // Razorpay Payment Handler
  const handlePayment = async () => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY, // Replace with your Razorpay test key
      amount: amount * 100, // Convert to paise
      currency: "INR",
      name: "Movie Booking",
      description: "Purchase Movie",
      handler: (response) => {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        setIsOpen(false); // Close modal after successful payment
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#f97316", // Customize button color
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <Transition.Child
            as={Fragment}
            enter="transition duration-300 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
              <Dialog.Title className="text-lg font-bold text-gray-900">
                Confirm Payment
              </Dialog.Title>
              <p className="mt-2 text-gray-700">
                Are you sure you want to buy this movie for <span className="font-bold">₹{amount}</span>?
              </p>
              <div className="mt-4 flex justify-end gap-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePayment}
                  className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Pay ₹{amount}
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PaymentModal;
