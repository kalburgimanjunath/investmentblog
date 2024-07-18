import { Link } from 'react-router-dom';

export default function Navbar() {
  const menus = [
    { title: 'home', link: '/home' },
    { title: 'FO', link: 'fo' },
    { title: 'Stocks', link: 'stocks' },
    { title: 'Mutual Funds', link: 'mutualfunds' },
    { title: 'Guide to Invest', link: 'guides' },
    { title: 'Learning', link: 'learning' },
  ];
  return (
    <div className="flex bg-black text-white p-2">
      {menus &&
        menus.map((item) => {
          return (
            <div key={item} className="p-2 ">
              <Link to={item.link}>{item.title.toUpperCase()}</Link>
            </div>
          );
        })}
    </div>
  );
}
