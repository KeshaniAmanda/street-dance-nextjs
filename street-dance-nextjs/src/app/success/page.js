export default function Success() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-yellow-400 mb-4">Payment Successful!</h1>
      <p className="text-gray-300 text-xl mb-8">Thank you for your order!</p>
      <a href="/shop" className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300">
        Continue Shopping
      </a>
    </main>
  );
}