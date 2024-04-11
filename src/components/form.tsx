/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

type ErrorHandlerProps = {
    name?: string | undefined
    email?: string | undefined
    message?: string | undefined
}

export default function ContactForm() {
    const [status, setStatus] = useState<
        "error" | "success" | "loading" | undefined
    >()
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<ErrorHandlerProps | undefined>()
    const emailRegex = /(?!no-reply)(?!lol)^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const nameRegex = /^[A-Za-z][A-Za-z,."'-\s]*$/g

    useEffect(() => {
        if (error?.name) {
            const newError = { ...error, name: undefined }
            setError(newError)
        }
    }, [name]);

    useEffect(() => {
        if (error?.email) {
            const newError = { ...error, email: undefined }
            setError(newError)
        }
    }, [email]);

    useEffect(() => {
        if (error?.message) {
            const newError = { ...error, message: undefined }
            setError(newError)
        }
    }, [message]);

    const clearForm = () => {
        setName("")
        setEmail("")
        setMessage("")
    }

    const handleValidateForm = async (e: any) => {
        setStatus("loading")
        e.preventDefault()
        let newError = error
        if (!message) {
            newError = { ...newError, message: "this is a required field" }
        }
        if (email) {
            if (!emailRegex.test(email)) {
                newError = { ...newError, email: "must be a valid email" }
            }
        } else {
            newError = { ...newError, email: "this is a required field" }
        }
        if (name) {
            if (!nameRegex.test(name)) {
                newError = { ...newError, name: "no special characters" }
            }
        } else {
            newError = { ...newError, name: "this is a required field" }
        }
        setError(newError)
        if (
            newError?.email ||
            newError?.name ||
            newError?.message
        ) {
            setStatus(undefined)
        } else {
            handleSubmitForm()
        }
    }

    const handleSubmitForm = () => {
        fetch("https://submit-form.com/m8VDr3oVs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        })
            .then(function (response) {
                if (response.ok) {
                    clearForm()
                    setStatus("success")
                } else {
                    clearForm()
                    setStatus("error")
                    console.log(response)
                }
            })
            .catch(function (error) {
                setStatus("error")
                console.error(error)
            })
    }

    return(
        <form className="w-full max-w-[360px] pb-6 mx-auto">
            <div className="w-full">
                <input
                    disabled={status === 'loading'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name..."
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="disabled:opacity-75 disabled:bg-white block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
                <p className={`text-orange-300 text-xs mt-1 ${error?.name ? 'flex':'hidden'}`}>{error?.name}</p>
            </div>
            <div className="mt-3 w-full">
                <input
                    disabled={status === 'loading'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email..."
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="disabled:opacity-75 disabled:bg-white block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
                <p className={`text-orange-300 text-xs mt-1 ${error?.email ? 'flex':'hidden'}`}>{error?.email}</p>
            </div>
            <div className="mt-3 w-full">
                <textarea
                    disabled={status === 'loading'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message..."
                    name="message"
                    id="message"
                    className="disabled:opacity-75 disabled:bg-white block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
                <p className={`text-orange-300 text-xs mt-1 ${error?.message ? 'flex':'hidden'}`}>{error?.message}</p>
            </div>
            <button 
                disabled={status === 'loading'}
                onClick={(e) => handleValidateForm(e)} 
                className="disabled:opacity-75 mt-4 disabled:hover:cursor-wait rounded-md py-2 px-4 bg-gradient-to-t from-violet-800 to-blue-500 text-white hover:brightness-125 text-md transition-all duration-150 ease-in-out"
            >
                Submit Form
            </button>
                <p className={`${status === 'loading' ? 'text-gray-300': status === 'error' ? 'text-orange-300' : status === 'success' && 'text-green-200'} text-xs mt-2 ${status ? 'flex':'hidden'}`}>{status === 'loading' ? 'loading...': status === 'error' ? 'something went wrong :(' : status === 'success' && 'Message sent!'}</p>
        </form>
    )
}