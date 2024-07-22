import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [errors, setError] = useState({})
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,

        })
    }

    const validate = () => {
        let errors = {}
        if (!formData.name) errors.name = "Name is required"
        if (!formData.email) {
            errors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid"
        }

        if (!formData.message) errors.message = "Message is required"
        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validate()
        if (Object.keys(validationError).length > 0) {
            setError(validationError);

        } else {
            setError({})
            setIsSending(true);

            emailjs.send(
                "service_i6j0x01",
                "template_hvv0y05",
                formData,
                "CipwSVSjBqLWmuS5a"

            )
                .then((response) => {
                    console.log("success", response.status, response.text);
                    toast.success("Message send Successfully!");
                    setFormData({ name: "", email: "", message: "" })
                })
                .catch((error) => {
                    console.log("Failed", error);
                    toast.error("Failed to send Message");
                })
                .finally(() => {
                    setIsSending(false);
                })
        }
    }

    return (
        <div className='mx-auto  max-w-3xl p-4 ' id='contact'>
            <Toaster />
            <h2 className='my-8 text-center text-[30px]  font-semibold tracking-tighter'>
                Let's Connect
            </h2>
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <input className='mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm
                    focus:border-gray-400 focus:outline-none'
                        type="text" id='name' name='name' value={formData.name} placeholder='Name' onChange={handleChange} />
                    {errors.name && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            aria-live='polite'
                            className='text-sm text-pink-700'>{errors.name}</motion.p>
                    )}

                </div>
                <div className='mb-4'>
                    <input className='mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm
                    focus:border-gray-400 focus:outline-none'
                        type="email" id='email' name='email' value={formData.email} placeholder='Email' onChange={handleChange} />
                    {errors.email && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            aria-live='polite'
                            className='text-sm text-pink-700'>{errors.email}</motion.p>
                    )}

                </div>
                <div className='mb-4'>
                    <textarea rows='4' className='mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm
                    focus:border-gray-400 focus:outline-none'
                        id='message' name='message' value={formData.message} placeholder='Message' onChange={handleChange} />
                    {errors.message && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            aria-live='polite'
                            className='text-sm text-pink-700'>{errors.message}</motion.p>
                    )}

                </div>
                <button type='submit'
                    className={`mb-8 w-full rounded bg-yellow-400 px-4  py-2  text-sm font-semibold text-slate-950 hover:bg-yellow-500 $
                    {isSending ? "cursor-not-allowed opacity-50" : ""}`}
                    disabled={isSending}>
                    {isSending ? 'Sending...' : 'Send'}

                </button>
            </motion.form>
        </div>
    )
}

export default Contact
