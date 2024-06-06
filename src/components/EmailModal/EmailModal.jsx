import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { IoMdClose } from "react-icons/io";

export const EmailModal = ({ setModalIsOpen }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_v9enk4r", "template_njg66qe", form.current, {
        publicKey: "mnYsam3gcxofzv_JE",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="absolute z-10 h-screen w-screen bg-dark bg-opacity-55 flex items-center">
      <form
        onSubmit={sendEmail}
        ref={form}
        method="post"
        action="#"
        className="w-11/12 mx-auto bg-dark p-8 rounded-lg shadow-md flex flex-col text-beige"
      >
        <div className="mb-4 flex justify-between">
          <h2 className="text-2xl font-CormorantGaramond font-normal tracking-wider mb-6">
            Contact Form
          </h2>
          <IoMdClose
            className="text-3xl hover:text-4xl cursor-pointer"
            onClick={() => setModalIsOpen(false)}
          />
        </div>

        <div className="mb-4">
          <label
            className="text-xs w-full leading-6 tracking-[1px] "
            htmlFor="user_name"
          >
            Full Name
          </label>
          <input
            className="mt-1 p-2 w-full border rounded-md bg-beige text-dark text-xs leading-6 tracking-[1px] font-Montserrat"
            type="text"
            name="user_name"
          />
        </div>

        <div className="mb-4">
          <label
            className="text-xs w-full leading-6 tracking-[1px]"
            htmlFor="user_email"
          >
            Email Address
          </label>
          <input
            className="mt-1 p-2 w-full border rounded-md bg-beige text-dark text-xs leading-6 tracking-[1px] font-Montserrat"
            type="email"
            name="user_email"
          />
        </div>

        <div className="mb-4">
          <label
            className="text-xs w-full leading-6 tracking-[1px]"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="mt-1 p-2 w-full border rounded-md bg-beige text-dark text-xs leading-6 tracking-[1px] font-Montserrat"
            rows="3"
            name="message"
          ></textarea>
        </div>

        <button
          className="bg-beige text-dark px-4 py-2 font-bold rounded-full hover:opacity-80 text-base tracking-[1px] font-CormorantGaramond mt-4"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};
