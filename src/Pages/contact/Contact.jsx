import React from "react";
import Title from "../../components/Title";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

// Initialize EmailJS globally
emailjs.init("user_tOjMzuyWe2uGvO77H");

function Contact(props) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    try {
      const result = await emailjs.send(
        "service_eq4sc1k",
        "template_n297gx3",
        templateParams,
        "tOjMzuyWe2uGvO77H"
      );
      reset()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Message has been sent",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error(error.text);
      console.log("Error sending email");
    }
  };

  return (
    <>
      <div className="py-28 size">
        <div>
          <Title>contact me</Title>
        </div>

        <div className=" w-8/12 mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col bg-[#020316] shadow-2xl shadow-[#0095A6] px-1 md:px-5 py-10"
          >
            <h1 className="uppercase font-bold text-orange-300 text-3xl mb-5 ">
              get touch  me?
            </h1>
            {/* name field  */}
            <input
              {...register("name")}
              placeholder="Your Name"
              className="common-input"
            />

            {/* email field  */}
            <input
              {...register("email")}
              placeholder="Your Email"
              className="common-input"
            />

            {/* phone number field  */}
            <input
              {...register("phone")}
              placeholder="Phone Number"
              className="common-input"
            />

            {/* textarea */}
            <textarea
              name="message"
              cols="30"
              rows="5"
              {...register("message")}
              placeholder="Message"
              className="common-input"
            ></textarea>

            {/* button field  */}
            <button
              type="submit"
              className="bg-[#0095A6] p-4 uppercase font-bold text-black text-xl hover:bg-sky-400 "
            >
              send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
