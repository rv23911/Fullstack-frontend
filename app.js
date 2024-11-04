import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import Profile from './components/Profile';
import Chart from './components/Chart';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (response) => {
    const token = response.tokenId;
    setUser(response.profileObj);
    axios.post('/auth/google/callback', { token }).then(res => console.log(res.data));
  };

  return (
    <div>
      {!user ? (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={handleLoginSuccess}
          onFailure={(err) => console.log('Login failed', err)}
        />
      ) : (
        <div>
          <Profile user={user} />
          <Chart />
        </div>
      )}
    </div>
  );
};

export default App;
