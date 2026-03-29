import "./login.css"
function login(){
return(
   <div className="login-container">
   <div className="Login-box">
    <h1>Shop Now Login</h1>
    <h3>Shopkeeper Login</h3>
    <form id="f1">
      <input type="text" placeholder="Mobile Number" className="input-field" />
      <input type="passwoard" placeholder ="Passwoard/OTP" className="input-field"/>
    </form>
    
    <button className ="login-btn">Login</button>
    <p className="forget">Forget Password?</p>
    <p className="create=text">Dont't have a shop account? Create New Shop</p>
    <button className="create-btn">Create New Shop Account</button>


   </div>
   </div>
)
}
export default login;