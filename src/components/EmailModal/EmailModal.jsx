import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { IoMdClose } from "react-icons/io";
import { useLanguage } from "../../context";

export const EmailModal = ({ setModalIsOpen }) => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { translations } = useLanguage();

  useEffect(() => {
    setButtonText(translations.contact.form.sendButton);
  }, [translations]);

  const sendEmail = async (data) => {
    console.log("Form Data: ", data);
    try {
      await emailjs.sendForm(
        "service_v9enk4r",
        "template_njg66qe",
        form.current,
        {
          publicKey: "mnYsam3gcxofzv_JE",
        }
      );
      console.log("SUCCESS!");
      reset();
      setButtonText(translations.contact.form.emailSent);
      setTimeout(() => {
        setButtonText(translations.contact.form.sendButton);
      }, 3000);
    } catch (error) {
      console.log("FAILED...", error.text);
    }
  };

  return (
    <section className="absolute z-10 h-screen w-screen bg-dark dark:bg-beige dark:bg-opacity-25 bg-opacity-55 flex items-center">
      <form
        onSubmit={handleSubmit(sendEmail)}
        ref={form}
        method="post"
        action="#"
        className="w-11/12 mx-auto bg-dark p-8 rounded-lg shadow-md flex flex-col text-beige"
      >
        <div className="mb-4 flex justify-between">
          <h2 className="text-2xl font-CormorantGaramond font-normal tracking-wider mb-6">
            {translations.contact.form.title}
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
            {translations.contact.form.nameLabel}
          </label>
          <input
            className="mt-1 p-2 w-full border rounded-md bg-beige text-dark text-xs leading-6 tracking-[1px] font-Montserrat"
            type="text"
            name="user_name"
            {...register("user_name", {
              required: translations.contact.form.requiredError,
              maxLength: 40,
            })}
          />
          {errors.user_name?.type === "required" && (
            <span className="tracking-[1px] text-red-500 text-[10px] mt-1">
              {errors.user_name.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="text-xs w-full leading-6 tracking-[1px]"
            htmlFor="user_email"
          >
            {translations.contact.form.emailLabel}
          </label>
          <input
            className="mt-1 p-2 w-full border rounded-md bg-beige text-dark text-xs leading-6 tracking-[1px] font-Montserrat"
            type="email"
            name="user_email"
            {...register("user_email", {
              required: translations.contact.form.requiredError,
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: translations.contact.form.invalidEmailError,
              },
            })}
          />
          {errors.user_email && (
            <span className="tracking-[1px] text-red-500 text-[10px] mt-1">
              {errors.user_email.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="text-xs w-full leading-6 tracking-[1px]"
            htmlFor="message"
          >
            {translations.contact.form.messageLabel}
          </label>
          <textarea
            className="mt-1 p-2 w-full border rounded-md bg-beige text-dark text-xs leading-6 tracking-[1px] font-Montserrat"
            rows="3"
            name="message"
            {...register("message", {
              required: translations.contact.form.requiredError,
            })}
          ></textarea>
          {errors.message?.type === "required" && (
            <span className="tracking-[1px] text-red-500 text-[10px] mt-1">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          className="bg-beige text-dark px-4 py-2 font-bold rounded-full hover:opacity-80 text-base tracking-[1px] font-CormorantGaramond mt-4 button-80"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
    </section>
  );
};
