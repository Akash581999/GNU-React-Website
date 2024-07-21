import React, { useState } from 'react';

function UserProfileSettings() {
    const [profilePic, setProfilePic] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleProfilePicChange = (event) => {
        setProfilePic(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle form submission, like sending data to a server
        console.log('Profile settings updated:', { profilePic, username, password, email, phoneNumber });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div>
                <label htmlFor="profilePic">Profile Picture:</label>
                <input type="file" id="profilePic" value={profilePic} onChange={handleProfilePicChange} />
            </div>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
            </div>
            <button type="submit">Update Profile</button>
        </form>
    );
}

export default UserProfileSettings;
