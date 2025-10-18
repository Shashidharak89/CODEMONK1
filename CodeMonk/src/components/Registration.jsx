import React from 'react'

const Registration = () => {
  return (
    <div>
        {/* Registration for taking user name, address, age, and gender */}
        <h1>Registration Page</h1>
        <label htmlFor="name">Enter your name:</label>
        <input type="text" placeholder='name' />
        <br />
        <label htmlFor="address">Enter your Address:</label>
        <input type="text" placeholder='address' />
        <br />
        <label htmlFor="age">Enter your Age:</label>
        <input type="number" placeholder='age' />
        <br />
        <label htmlFor="gender">Select your Gender:</label>
        <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
        <br />
        <button type="submit">Register</button> 
        

    </div>
  )
}

export default Registration
