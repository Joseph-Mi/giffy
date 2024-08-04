export const Navbar = () => {
  function registerPressed() {
    console.log("test");
  }

  return (
    <div className="flex w-full fixed justify-between items-center py-6 px-20 top-0">
      <div className="text-primary-white">Logo</div>
      <div className="flex justify-center items-center space-x-20">
        <a href="/About" className="nav hover:nav-hover">
          About
        </a>
        <a href="/About" className="nav hover:nav-hover">
          Community
        </a>
        <a href="/About" className="nav hover:nav-hover">
          Store
        </a>
        <button
          onClick={registerPressed()}
          type="button"
          className="px-7 py-3 border border-primary-white rounded-xl bg-secondary-orange"
        >
          Register
        </button>
      </div>
    </div>
  );
};

// export default Navbar;
