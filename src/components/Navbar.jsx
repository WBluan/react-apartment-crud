import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { login } = useAuth();
    const username = import.meta.env.VITE_APP_USERNAME
    const password = import.meta.env.VITE_APP_PASSWORD
    
    const handleLogin = async () => {
      await login(username, password)
    };

    return (
        <>
          <div className="navbar bg-base-100">
          <div className="navbar-start">
          </div>
          <div className="navbar-center">
            <a className="btn glass text-xl" onClick={handleLogin}>Intelbras</a>
          </div>
          <div className="navbar-end">
          <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
          </div>
        </div>
        </>
    )
}