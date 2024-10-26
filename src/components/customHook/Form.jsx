import React from 'react'
import useFormInput from './useFormInput'

function Form() {
    const name = useFormInput("")
    const age = useFormInput("")
    const email = useFormInput("")
    const address = useFormInput("")
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`name:${name.value}
        age:${age.value}
        email:${email.value}
        address:${address.value}
        `
        )

    }

    return (
        <>
            <h2>Personal Details</h2>
            <form onSubmit={handleSubmit}>
                <div> <label htmlFor="name">Name:
                    <input type="text" id='name' {...name} required />
                </label></div>
                <div> <label htmlFor="age">age:
                    <input type="number" id='age' {...age} required />
                </label></div>
                <div> <label htmlFor="email">email:
                    <input type="email" id='email' {...email} required />
                </label></div>
                <div> <label htmlFor="address">address:
                    <input type="text" id='address' {...address} required />
                </label></div>
                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>

        </>

    )
}

export default Form


 {/* 
    import React, { useState } from 'react'
import useFormInput from './useFormInput'

function Form() {
    const name = useFormInput("")
    const age = useFormInput("")
    const email = useFormInput("")
    const address = useFormInput("")

    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {}
        if (name.value.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters long."
        }
        if (age.value < 18 || age.value > 100) {
            newErrors.age = "Age must be between 18 and 100."
        }
        if (!/^\S+@\S+\.\S+$/.test(email.value)) {
            newErrors.email = "Email is invalid."
        }
        if (address.value.trim().length < 5) {
            newErrors.address = "Address must be at least 5 characters long."
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        alert(`Name: ${name.value}
Age: ${age.value}
Email: ${email.value}
Address: ${address.value}`)

        // Clear errors on successful submission
        setErrors({})
    }

    return (
        <>
            <h2>Personal Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:
                        <input
                            type="text"
                            id="name"
                            {...name}
                            required
                            minLength="3"
                        />
                    </label>
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="age">Age:
                        <input
                            type="number"
                            id="age"
                            {...age}
                            required
                            min="18"
                            max="100"
                        />
                    </label>
                    {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:
                        <input
                            type="email"
                            id="email"
                            {...email}
                            required
                            pattern="^\S+@\S+\.\S+$"
                        />
                    </label>
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="address">Address:
                        <input
                            type="text"
                            id="address"
                            {...address}
                            required
                            minLength="5"
                        />
                    </label>
                    {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Form
 */}


