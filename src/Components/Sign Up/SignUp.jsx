import React, { useState } from 'react'
import './SignUp.css'
import axios from 'axios'
import SimpleAlert from '../Alerts/Success';
import { Link } from 'react-router-dom';

const SignUp = () => {
    // Form verilerini yönetmek için useState kullanımı
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const Url = 'https://localhost:7269/api/Auth/Registeration';

    // Function that performs registration
    const registerUser = async (data) => {
        try {
            const response = await axios.post(Url, data);
            debugger
            if (response.status === 201) {
                setIsSuccess(true); // Başarı
                setIsRegistered(false);
            } else if (response.status === 400) {
                setIsSuccess(false);
                setIsRegistered(true); // Kullanıcı zaten kayıtlı
            }
        } catch (error) {
            console.error(error);
            setIsSuccess(false);
        }
    };

    const [isClicked, setIsClicked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsClicked(true);
        // Formdan gelen datalar
        const data = {
            Username: username,
            Email: email,
            Password: password,
        };

        // Kullanıcıyı kaydetme
        registerUser(data);
        // Başarılı kayıt işlemin sonunda formu temizle
        setUsername('');
        setEmail('');
        setPassword('');

    };

    return (
        <div className='main-width mx-auto py-5 sign-up'>
            <form className='main-width mx-auto mb-5 gap-3 text-center d-flex flex-column' onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {isSuccess ? (
                    <Link to="/login" className="btn btn-primary mt-3">
                        Go to Login
                    </Link>
                ) : (
                    <button className="btn btn-primary mt-3" type="submit">
                        Sign Up
                    </button>
                )}
               
            </form>
            {isClicked ? (isSuccess ? SimpleAlert(`success`, true) : SimpleAlert(`error`, false)): null}
            
        </div>
    );
};

export default SignUp;
