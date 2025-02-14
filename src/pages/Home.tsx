import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">首页</h1>
      <nav className="space-x-4">
        <Link to="/about" className="text-blue-500 hover:text-blue-700">
          关于我们
        </Link>
      </nav>
      <div className="mt-4">
        <p>欢迎来到首页！</p>
      </div>
    </div>
  );
}

export default Home;
