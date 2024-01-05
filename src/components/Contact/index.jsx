import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function Contact() {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        const fromName = form.current.from_name.value;
        const userEmail = form.current.user_email.value;
        const message = form.current.message.value;
    
        if (!fromName || !userEmail || !message) {
            toast.error("Please fill in all the fields.");
            return;
        }
        emailjs.sendForm(import.meta.env.VITE_SERVICE, import.meta.env.VITE_TEMPLATE, form.current, import.meta.env.VITE_PUBLIC)
          .then((result) => {
            console.log(result.text);
            toast.success("Message sent successfully!");
            form.current.reset();

          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div id='contact' className='w-full h-auto bg-slate-900/50 p-4 '  >
        <div className='flex items-end px-2  text-2xl lg:text-[32px] ' >
            <h1 className='font-semibold text-white leading-none' >
                Get in Touch
            </h1>
            <div className='rounded-full bg-green-700/50 w-[10px] h-[10px] flex items-baseline '/>
        </div>
        
        <div className='p-4' >
            <div className='flex text-white gap-5 mb-4 items-center' >
                <IoIosMail className='text-sky-400 w-8 h-8' />
                <p>gvillanuevavega@gmail.com</p>
            </div>
            <div className='flex text-white gap-5 mb-4  items-center' >
                <FaPhone className='text-sky-400 w-8 h-6' />
                <p>+51941310500</p>
            </div>
            <div className='' >
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2'>
                    <label className='text-sky-400' >Name</label>
                    <input placeholder="Jhon Salchichon" className='h-8 rounded-xl p-2' type="text" name="from_name" />
                    <label className='text-sky-400' >Email</label>
                    <input placeholder="jhon@rambo.com" className='h-8 rounded-xl p-2' type="email" name="user_email" />
                    <label className='text-sky-400' >Message</label>
                    <textarea placeholder="Más bien" className='h-24 rounded-xl p-2' name="message" />
                    <input className='w-32 h-8 rounded-xl bg-sky-400 text-white hover:bg-green-700/50 transition duration-300 ease-in-out' type="submit" value="Send" />
                </form>
               
            </div>
        </div>



    </div>
  )
}

export default Contact