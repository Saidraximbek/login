import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { dispatch, user } = useGlobalContext();
  const { isPending, logout } = useLogout();

  return (
    <header className="bg-base-200">
      <div className="navbar main-container">
        <div className="navbar-start">
          <Link className="border-0" to="/">
            <img src="./logo.png" alt="Logo" width={75} />
          </Link>
        </div>

        <div className="hidden max-md:block navbar-center relative group cursor-pointer">
          <div className="avatar flex items-center gap-4">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2 overflow-hidden">
              <img src={user.photoURL} alt="User" />
            </div>
            <h3 className="text-black open-burger">{user.displayName}</h3>
          </div>

          <div
            className="flex flex-col gap-3 burger absolute left-12 p-2 rounded-2xl 
                          invisible opacity-0 w-[150px] bg-gray-400 
                          group-hover:visible group-hover:opacity-100 
                          transition-opacity duration-300 z-50"
          >
            <Link to="/" className="hover:text-amber-50">
              Bosh Sahifa
            </Link>
            <Link to="/create" className="hover:text-amber-50">
              Retsept yaratish
            </Link>
          </div>
        </div>

        <div className="navbar-end">
          {!isPending ? (
            <button onClick={logout} className="btn btn-secondary btn-outline">
              Logout
            </button>
          ) : (
            <button
              onClick={logout}
              className="btn btn-secondary btn-outline"
              disabled
            >
              Logout...
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
