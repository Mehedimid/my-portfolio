import React from "react";
import Title from "../../components/Title";
import { useForm } from "react-hook-form";

function Contact(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="py-28 size">
        <div>
          <Title>contact me</Title>
        </div>

        <div className=" w-8/12 mx-auto">
      

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col bg-[#020316] shadow-2xl shadow-[#0095A6] px-1 md:px-5 py-10">
            <h1 className="uppercase font-bold text-orange-300 text-3xl mb-5 ">
              get touch me?
            </h1>
            {/* name field  */}
            <input {...register("name")} placeholder="Your Name" className="common-input" />

            {/* email field  */}
            <input {...register("email")} placeholder="Your Email" className="common-input" />

            {/*phone number field  */}
            <input {...register("phone")} placeholder="Phone Number" className="common-input" />

            {/* textarea */}
            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Message"
              className="common-input"></textarea>

            {/* button field  */}
            <button
              type="submit"
              className="bg-[#0095A6] p-4 uppercase font-bold text-black text-xl hover:bg-sky-400 ">
              send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
