import axios from "axios";
import React from "react";
import {useForm} from "react-hook-form"
import toast from "react-hot-toast"
function Contact() {
  const{
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
  const onSubmit = async (data) =>{
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/avrwyqqa", userInfo);
      toast.success("Your message has been sent");
    }catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }; 
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-6 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/avrwyqqa"
            // method="POST"
            className="bg-slate-200 w-full max-w-md px-6 py-6 rounded-xl shadow-md"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  {...register("name", {required: true})}
                  className="w-full shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                />
                {errors.name && <span>This field is required</span>}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                 {...register("email", {required: true})}
                  className="w-full shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                />
                {errors.email && <span>This field is required</span>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  {...register("message", {required: true})}
                  className="w-full shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="message"
                  placeholder="Enter your message"
                  name="message"
                  rows="4"
                ></textarea>
                {errors.message && <span>This field is required</span>}
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full bg-black text-white rounded-xl px-4 py-2 hover:bg-slate-700 transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
