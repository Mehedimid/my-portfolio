import React from "react";
import Title from "../../components/Title";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

// Initialize EmailJS globally
emailjs.init("user_tOjMzuyWe2uGvO77H");

function Contact(props) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

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

        <div className=" md:w-8/12 mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col bg-[#200E3A] shadow-2xl shadow-[#52D3D8] px-1 md:px-5 py-10"
          >
            <h1 className="uppercase font-bold text-orange-300 text-2xl mb-5 ">
              get in touch with me?
            </h1>
            {/* name field  */}
            <input
              {...register("name",{ required:"Name is required"})}
              placeholder="Your Name"
              className="common-input"
            />
            {errors.name && <p role="alert" className="text-red-400">{errors?.name?.message}</p>}
            

            {/* email field  */}
            <input
              {...register("email",{ required:"Email Address is required"})}
              placeholder="Your Email"
              className="common-input"
            />
            {errors.email && <p role="alert" className="text-red-400">{errors?.email?.message}</p>}

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
              {...register("message",{ required:"Message is required"})}
              placeholder="Message"
              className="common-input"
            ></textarea>
            {errors.message && <p role="alert" className="text-red-400">{errors?.message?.message}</p>}

            {/* button field  */}
            <button
              type="submit"
              className="bg-[#52D3D8] p-4  font-bold text-black text-xl transition-all duration-300 hover:bg-sky-400 "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
