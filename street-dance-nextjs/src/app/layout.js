import "./globals.css";

export const metadata = {
  title: "Street Dance",
  description: "Street Dance Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-yellow-400 text-2xl font-bold">
            Street Dance
          </a>
          <div className="flex gap-6">
            <a href="/" className="hover:text-yellow-400 transition">Home</a>
            <a href="/shop" className="hover:text-yellow-400 transition">Shop</a>
            <a href="/events" className="hover:text-yellow-400 transition">Events</a>
            <a href="/portfolio" className="hover:text-yellow-400 transition">Portfolio</a>
            <a href="/blogs" className="hover:text-yellow-400 transition">Blogs</a>
            <a href="/cart" className="hover:text-yellow-400 transition">Cart</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}