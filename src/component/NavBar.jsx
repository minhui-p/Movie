import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between pb-3">
      <Link to="/" className="text-lg">
        Movie
      </Link>
      <input
        type="text"
        placeholder="영화 검색 해보삼!"
        className="flex-grow max-w-md mx-auto border rounded-md px-3 py-1"
      />
      <div className="flex space-x-2">
        <a className="px-4 py-2 border rounded-md">로그인</a>
        <a className="px-4 py-2 border rounded-md">회원가입</a>
      </div>
    </nav>
  );
};

export default NavBar;
