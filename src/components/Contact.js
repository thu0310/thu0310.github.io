import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5lm4uqm",
        "template_vgne9at",
        form.current,
        "196EmZu9fRtViDsQs"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log(error);
        }
      );
    alert("Email Send");
    e.target.reset();
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4
                className="text-x1 uppercase text-[#ddffbb] font-medium mb-2
              tracking-wide"
              >
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 border rounded-2x1 flex flex-col gap-y-6
          pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full 
              placeholder:text-white focus:border-[#ddffbb] transition-all"
              type="text"
              placeholder="Your name"
              name="user_name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full 
              placeholder:text-white focus:border-[#ddffbb] transition-all
              resize-none mb-12"
              type="text"
              placeholder="Your email"
              name="user_email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full 
              placeholder:text-white focus:border-[#ddffbb] transition-all"
              type="text"
              placeholder="Your message"
              name="user_message"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
