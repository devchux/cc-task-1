import { NavLink, Outlet, useLocation } from "react-router-dom";
import { cn } from "../../util/lib";
import hamburgerIcon from "../../assets/hamburger.svg";
import homeIcon from "../../assets/home.svg";
import noteIcon from "../../assets/note.svg";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="h-[100vh] flex">
      <div className="w-28 h-full z-50 bg-white shadow-[0px_4px_23px_0px_rgba(0,0,0,0.05)] flex flex-col justify-between items-center p-12">
        <div>
          <button>
            <img src={hamburgerIcon} alt="" />
          </button>
          <NavLink to="/" className="mt-24 mb-12 block">
            <img src={homeIcon} alt="" />
          </NavLink>
          <NavLink to="/" className="block">
            <img src={noteIcon} alt="" />
          </NavLink>
        </div>
        <div className="w-12 h-12 rounded-full text-white bg-persian-blue flex justify-center items-center">CE</div>
      </div>
      <div className="w-full h-full overflow-auto">
        <div className="h-32 shadow-[0px_4px_23px_0px_rgba(0,0,0,0.05)] bg-white my-28 sticky top-0">
          <div className="flex h-full items-center">
            <NavLink
              className={cn(
                "flex items-center justify-center text-xl font-medium w-[17.6rem] h-full",
                {
                  "bg-blue-stone text-white relative after:absolute after:w-5 after:h-[1.3rem] after:content-[''] after:-right-2.5 after:top-1/2 after:-translate-y-1/2 after:border-l-[3.75rem] after:border-l-blue-stone after:border-t-[3.75rem] after:border-t-transparent after:border-b-[3.75rem] after:border-b-transparent":
                    location.pathname.startsWith("/program"),
                }
              )}
              to="/program"
            >
              Program Details
            </NavLink>
            <hr className="h-[4.875rem] bg-[#C4C4C4] w-[1px]" />
            <NavLink
              className={cn(
                "flex items-center justify-center text-xl font-medium w-[17.6rem] h-full",
                {
                  "bg-blue-stone text-white relative after:absolute after:w-5 after:h-[1.3rem] after:content-[''] after:-right-2.5 after:top-1/2 after:-translate-y-1/2 after:border-l-[3.75rem] after:border-l-blue-stone after:border-t-[3.75rem] after:border-t-transparent after:border-b-[3.75rem] after:border-b-transparent":
                    location.pathname.startsWith("/application"),
                }
              )}
              to="/application"
            >
              Application Form
            </NavLink>
            <hr className="h-[4.875rem] bg-[#C4C4C4] w-[1px]" />
            <NavLink
              className={cn(
                "flex items-center justify-center text-xl font-medium w-[17.6rem] h-full",
                {
                  "bg-blue-stone text-white relative after:absolute after:w-5 after:h-[1.3rem] after:content-[''] after:-right-2.5 after:top-1/2 after:-translate-y-1/2 after:border-l-[3.75rem] after:border-l-blue-stone after:border-t-[3.75rem] after:border-t-transparent after:border-b-[3.75rem] after:border-b-transparent":
                    location.pathname.startsWith("/workflow"),
                }
              )}
              to="/workflow"
            >
              Workflow
            </NavLink>
            <hr className="h-[4.875rem] bg-[#C4C4C4] w-[1px]" />
            <NavLink
              className={cn(
                "flex items-center justify-center text-xl font-medium w-[17.6rem] h-full",
                {
                  "bg-blue-stone text-white relative after:absolute after:w-5 after:h-[1.3rem] after:content-[''] after:-right-2.5 after:top-1/2 after:-translate-y-1/2 after:border-l-[3.75rem] after:border-l-blue-stone after:border-t-[3.75rem] after:border-t-transparent after:border-b-[3.75rem] after:border-b-transparent":
                    location.pathname.startsWith("/preview"),
                }
              )}
              to="/preview"
            >
              Preview
            </NavLink>
          </div>
        </div>
        <div className="pb-28 px-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
