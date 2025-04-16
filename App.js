
import React from 'react';

export default function WokeCoinGallery() {
  const artworks = [
    {
      title: 'Logic Bro™',
      src: '/images/logic-bro.png',
    },
    {
      title: 'Woke Jesus',
      src: '/images/woke-jesus.png',
    },
    {
      title: 'Woke in Vegas (Dana White)',
      src: '/images/woke-dana.png',
    },
    {
      title: 'President Zelensky in the Oval',
      src: '/images/zelensky-oval.png',
    },
    {
      title: 'Mark Carney with WokeCoin',
      src: '/images/mark-carney.png',
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-6 text-center">
        <h1 className="text-4xl font-bold">WokeCoin Gallery</h1>
        <p className="text-lg mt-2">$WOKE – Satire. Culture. Crypto.</p>
      </header>

      <main className="px-4 max-w-3xl mx-auto">
        {artworks.map((art, idx) => (
          <div key={idx} className="mb-10">
            <img
              src={art.src}
              alt={art.title}
              className="w-full rounded-2xl shadow-xl border border-black"
            />
            <h2 className="mt-4 text-xl font-semibold text-center">{art.title}</h2>
          </div>
        ))}
      </main>

      <footer className="text-center p-6 mt-16 border-t border-black">
        <p className="text-sm">dive into my IRONIC art</p>
      </footer>
    </div>
  );
}
