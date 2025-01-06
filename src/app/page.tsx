// No topo do arquivo
"use client";

if (typeof window !== 'undefined') {
  console.log(window.location.href);
}

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const Home = () => {
  const [timeTogether, setTimeTogether] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const highlightMessages = [
    "Você é a melhor coisa que já aconteceu na minha vida. Eu espero que esta página seja apenas mais um pedacinho da nossa incrível história juntos.",
    "Cada momento ao seu lado é um tesouro que guardo no coração. Te amo mais do que palavras podem expressar.",
    "Nosso amor é a força que me move todos os dias. Obrigado por ser meu tudo.",
    "Você é minha inspiração, minha alegria e minha razão de viver. Amo você infinitamente.",
  ];

  const [currentHighlight, setCurrentHighlight] = useState(0);


  useEffect(() => {
    const startDate = new Date('2023-10-23');

    const updateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeTogether(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Messages (Post-its)
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('messages') || '[]');
    setMessages(savedMessages);
  }, []);

  const addMessage = () => {
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setNewMessage('');
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
  };

  const removeMessage = (index: number) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
  };

  return (
    <div className="bg-pink-50 min-h-screen text-gray-800">
      <Head>
        <title>Nosso Amor</title>
        <meta name="description" content="Uma página especial para nós dois" />
      </Head>

      <header className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 py-10 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">Nosso Memorial</h1>
        <p className="mt-4 text-xl text-pink-100 font-light">Feito com amor e carinho</p>
        <div className="mt-6">
        <div className="relative inline-block text-left">
        <div className="relative">
          <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-white text-pink-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-pink-100 transition duration-300 ease-in-out transform hover:scale-105"
          >
          Explorar
          </button>
          <div className={`absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition duration-300 ease-in-out transform ${menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} origin-top-right`}>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#timer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100" role="menuitem" onClick={(e) => { e.preventDefault(); document.querySelector('#timer')?.scrollIntoView({ behavior: 'smooth' }); }}>Tempo Juntos</a>
            <a href="#gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100" role="menuitem" onClick={(e) => { e.preventDefault(); document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' }); }}>Galeria de Fotos</a>
            <a href="#messages" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100" role="menuitem" onClick={(e) => { e.preventDefault(); document.querySelector('#messages')?.scrollIntoView({ behavior: 'smooth' }); }}>Mensagens</a>
            <a href="#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100" role="menuitem" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}>Sobre</a>
            <a href="#thanks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100" role="menuitem" onClick={(e) => { e.preventDefault(); document.querySelector('#thanks')?.scrollIntoView({ behavior: 'smooth' }); }}>Agradecimento</a>
            </div>
          </div>
        </div>
        </div>
        </div>
      </header>
    
      <main className="p-6 space-y-12">
        {/* Timer Section */}
        <section id="timer" className="py-20 bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 text-center rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-pink-700 mb-4">Tempo Juntos</h2>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-2">
              <p className="text-pink-700 font-bold text-xl">{timeTogether.split(' ')[0]}</p>
            </div>
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-2">
              <p className="text-pink-700 font-bold text-xl">{timeTogether.split(' ')[1]}</p>
            </div>
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-2">
              <p className="text-pink-700 font-bold text-xl">{timeTogether.split(' ')[2]}</p>
            </div>
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-2">
              <p className="text-pink-700 font-bold text-xl">{timeTogether.split(' ')[3]}</p>
            </div>
          </div>
        </section>

  {/* About Section */}
  <section
   id="about"
   className="relative py-20 bg-gradient-to-b from-pink-200 via-pink-100 to-pink-300 overflow-hidden"
  >
  <div className="max-w-4xl mx-auto text-center relative z-10">
   <h2 className="text-5xl font-extrabold text-pink-700 mb-6">
    Sobre Nós 
   </h2>
   <div className="text-lg leading-relaxed text-pink-800">
    <p>
      Bem-vindo(a) ao nosso cantinho especial, criado com todo o amor do
      mundo só para nós dois!
    </p>
    <p className="mt-4">
      Aqui, vamos eternizar nossos momentos mais preciosos: fotos, mensagens
      e todas as coisas que fazem nosso amor tão único.
    </p>
    <p className="mt-6 text-2xl font-semibold text-pink-600">
      Você é minha razão de viver, meu mundo, meu tudo! 🌸
    </p>
   </div>
  </div>

  {/* Floating Hearts */}
<div className="absolute inset-0 overflow-hidden">
  {Array.from({ length: 29 }).map((_, i) => (
    <svg
      key={i}
      className={`heart absolute w-8 h-8 text-white`}
      style={{
      top: `${(Math.sin(i * 0.3) * 40 + 50)}vh`, // Utilizando o seno para uma distribuição mais suave
      left: `${(Math.cos(i * 0.5) * 40 + 50)}vw`, // Utilizando o cosseno para variação nas posições
      animation: `float ${2 + (i % 3)}s ease-in-out infinite`, // Reduzindo o tempo de animação para uma movimentação mais rápida
      animationDelay: `${i % 2}s`,
      }}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ))}
  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  `}</style>
</div>


  {/* Decorative Borders */}
  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-r from-pink-300 via-white to-pink-300" />
  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-r from-pink-300 via-white to-pink-300" />

  {/* Decorative Divider */}
  <div className="w-full border-t-4 border-dashed border-pink-500 mt-16" />

  {/* Highlight Section */}
  <section id="highlight" className="relative z-10 mt-12 max-w-xl mx-auto bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-lg">
    <p className="text-2xl text-pink-700 font-semibold transition-opacity duration-500 ease-in-out" key={currentHighlight}>
      {highlightMessages[currentHighlight]}
    </p>
    <p className="mt-4 text-pink-600 font-light italic">Com todo o meu amor, sempre. 💕</p>
    <div className="mt-4 flex justify-center space-x-4">
      <button
        onClick={() => setCurrentHighlight((prev) => (prev - 1 + highlightMessages.length) % highlightMessages.length)}
        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
      >
        Anterior
      </button>
      <button
        onClick={() => setCurrentHighlight((prev) => (prev + 1) % highlightMessages.length)}
        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
      >
        Próxima
      </button>
    </div>
  </section>
  </section>

        {/* Thanks Section */}



        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 text-center rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-pink-700 mb-4">Galeria de Fotos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {[
              { src: "/67420935-56C8-48CD-8088-287723B93612_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
              { src: "/67420935-56C8-48CD-8088-287723B93612_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
              { src: "/67420935-56C8-48CD-8088-287723B93612_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
              { src: "/67420935-56C8-48CD-8088-287723B93612_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
              { src: "/67420935-56C8-48CD-8088-287723B93612_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
              { src: "/67420935-56C8-48CD-8088-287723B93612_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
            ].map((photo, index) => (
              <div key={index} className="rounded-lg shadow-lg overflow-hidden">
          <Image src={photo.src} alt={photo.alt} width={400} height={400} className="w-full h-full object-cover" />
          <div className="p-4 bg-pink-100 text-pink-700">
            <p>{photo.caption}</p>
          </div>
              </div>
            ))}
          </div>
        </section>

        {/* Messages Section */}
        <section>
          <h2 className="text-2xl font-semibold text-center">Mensagens (Post-its)</h2>
          <div id='messages' className="mt-4 flex flex-col items-center">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Escreva algo especial..."
              className="w-full max-w-lg border rounded-lg p-4 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              onClick={addMessage}
              className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
            >
              Adicionar
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {messages.map((message, index) => (
              <div key={index} className="bg-pink-100 p-4 rounded-lg shadow relative">
                <p>{message}</p>
                <button
                  onClick={() => removeMessage(index)}
                  className="absolute top-2 right-2 text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-pink-200 py-4 text-center text-pink-700">
        <p>Feito com ❤️ por Carlos Augusto</p>
      </footer>
    </div>
  );
};

export default Home;
