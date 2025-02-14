import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">关于我们</h1>
      <nav className="space-x-4">
        <Link to="/home" className="text-blue-500 hover:text-blue-700">
          返回首页
        </Link>
      </nav>
      <div className="mt-4">
        <p>这是关于我们页面的内容。</p>
      </div>
    </div>
  );
}

export default About;
