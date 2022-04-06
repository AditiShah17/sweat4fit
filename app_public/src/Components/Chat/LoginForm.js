import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const authObject = { 'Project-ID': '248f3bd8-3634-44b6-b89a-745e855ec6ad',
                            'User-Name': username, 'User-Secret': password };

                            console.log(username, password);
        // const chatId = 107565;
        
        try {

            // username | password => chatengine -> give messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject});
            
            // Works out -> Logged in
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
      
        } catch (error) {
            
            // error -> type with new username ...
            setError('Oooops, Incorrect Credentials');
            
        }


    }

    return (
        <div className="wrapper">
            <div className='form'>
                <h1 className='title'> Sweat4Fit Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder='Username' required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder='Password' required />
                    <div align="center">
                        <button type='submit' className='button' >
                            <span>Start Chatting</span>
                        </button>
                        <h2 className='error'>{error}</h2>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm