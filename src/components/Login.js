import { useEffect } from "react";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function LoginGoogle() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);

    var decoded = jwtDecode(response.credential);
    console.log("check decode", decoded);
    setUser(decoded);
    document.getElementById("buttonDiv").hidden = true;
    navigate("/dashboard");
  };
  const handleLogOut = (e) => {
    setUser({});
    document.getElementById("buttonDiv").hidden = false;
    navigate("/");
  };
  useEffect(() => {
    /* global google*/
    window.onload = function () {
      google.accounts.id.initialize({
        client_id:
          "293536122059-ajhqscb464im4qut98hu69c04bpcluv2.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" } // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    };
  }, []);

  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
    <h2 style={{ marginBottom: '20px' }}>Vui lòng đăng nhập để xem dashboard</h2>
    
    {user && (
        <div id="buttonDiv" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}></div> 
    )}
  </div>

  );
}
export default LoginGoogle;
