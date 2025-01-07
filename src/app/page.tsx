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
  const [currentPage, setCurrentPage] = useState(0);
  interface Photo {
    src: string;
    alt: string;
    caption: string;
    date?: string;
    location?: string;
    song?: string;
  }
  
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  


  const photos: Photo[] = [
    { src: "/67420935-56C8-48CD-8088-287723B93612_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio", date: "01/06/2022", location: "Estádio Beira-Rio", song: "/sua-musica14.mp3" },
    { src: "/67420935-56C8-48CD-8088-287723B93612_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio", date: "01/06/2022", location: "Estádio Beira-Rio", song: "/sua-musica15.mp3" },
    { src: "/E2F0EEE3-61F5-4F0A-B3F4-8705D9701135_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/976DC8F5-B797-4F20-89FB-CCB94F757D12_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/632C39D7-9B74-4A30-A1B2-57FA6B940407_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/7115850D-2E0C-4666-83DC-9036B6761218_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/ADAA512A-1A4C-43AF-A47A-E366B78240A3_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/67420935-56C8-48CD-8088-287723B93612_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/E2F0EEE3-61F5-4F0A-B3F4-8705D9701135_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/976DC8F5-B797-4F20-89FB-CCB94F757D12_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/632C39D7-9B74-4A30-A1B2-57FA6B940407_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/7115850D-2E0C-4666-83DC-9036B6761218_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/ADAA512A-1A4C-43AF-A47A-E366B78240A3_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/632C39D7-9B74-4A30-A1B2-57FA6B940407_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/7115850D-2E0C-4666-83DC-9036B6761218_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/ADAA512A-1A4C-43AF-A47A-E366B78240A3_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/632C39D7-9B74-4A30-A1B2-57FA6B940407_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/7115850D-2E0C-4666-83DC-9036B6761218_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/ADAA512A-1A4C-43AF-A47A-E366B78240A3_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/632C39D7-9B74-4A30-A1B2-57FA6B940407_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/7115850D-2E0C-4666-83DC-9036B6761218_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/ADAA512A-1A4C-43AF-A47A-E366B78240A3_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/632C39D7-9B74-4A30-A1B2-57FA6B940407_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/7115850D-2E0C-4666-83DC-9036B6761218_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
    { src: "/ADAA512A-1A4C-43AF-A47A-E366B78240A3_1_105_c.jpeg", alt: "Nós dois", caption: "1º Us mo no estádio Beira-Rio - 01/06/2022" },
  ];

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
  const [dreams, setDreams] = useState<string[]>([]);
  const [newDream, setNewDream] = useState('');

  useEffect(() => {
    const savedDreams = JSON.parse(localStorage.getItem('dreams') || '[]');
    setDreams(savedDreams);
  }, []);

  const addDream = () => {
    const updatedDreams = [...dreams, newDream];
    setDreams(updatedDreams);
    setNewDream('');
    localStorage.setItem('dreams', JSON.stringify(updatedDreams));
  };

  const removeDream = (index: number) => {
    const updatedDreams = dreams.filter((_, i) => i !== index);
    setDreams(updatedDreams);
    localStorage.setItem('dreams', JSON.stringify(updatedDreams));
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
            <a href="#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100" role="menuitem" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}>Sobre</a>
            <a href="#gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100" role="menuitem" onClick={(e) => { e.preventDefault(); document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' }); }}>Galeria de Fotos</a>
            <a href="#dreams" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100" role="menuitem" onClick={(e) => { e.preventDefault(); document.querySelector('#dreams')?.scrollIntoView({ behavior: 'smooth' }); }}>Sonhos</a>
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
  <section id="highlight" className="relative z-10 mt-12 max-w-3xl mx-auto bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-lg">
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
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 w-50 gap-5 mt-10">
            {photos.slice(currentPage * 9, (currentPage + 1) * 9).map((photo, index) => (
              <div key={index} className="rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer" onClick={() => setSelectedPhoto(photo)}>
          <Image src={photo.src} alt={photo.alt} width={500} height={500} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center items-center space-x-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
              disabled={currentPage === 0}
            >
              Anterior
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(photos.length / 9) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`px-3 py-1 rounded-full ${currentPage === index ? 'bg-pink-500 text-white' : 'bg-pink-200 text-pink-700'} transition duration-300 ease-in-out transform hover:scale-105`}
          >
            {index + 1}
          </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((prev) => (prev + 1) * 9 < photos.length ? prev + 1 : prev)}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
              disabled={(currentPage + 1) * 9 >= photos.length}
            >
              Próxima
            </button>
          </div>
        </section>
        {/* Photo Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full relative">
              <button
          onClick={() => setSelectedPhoto(null)}
          className="absolute top-4 right-4 text-3xl text-red-500"
              >
          x
              </button>
              <div className="flex flex-col md:flex-row">
          <Image src={selectedPhoto.src} alt={selectedPhoto.alt} width={400} height={400} className="w-full md:w-1/2 object-cover rounded-lg" />
          <div className="mt-4 md:mt-0 md:ml-6">
            <h3 className="text-2xl font-bold text-pink-700">{selectedPhoto.alt}</h3>
            <p className="mt-2 text-pink-600">{selectedPhoto.caption}</p>
            <p className="mt-2 text-pink-600">Data: {selectedPhoto.date}</p>
            <p className="mt-2 text-pink-600">Local: {selectedPhoto.location}</p>
            {selectedPhoto.song ? (
              <button
                onClick={() => {
                  const audio = new Audio(selectedPhoto.song);
                  audio.play();
                }}
                className="mt-4 flex items-center text-pink-600 hover:text-pink-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              <span className="ml-2">Tocar música do dia</span>
              </button>
            ) : (
              <p className="mt-4 text-pink-600">Nenhuma música disponível</p>
            )}
          </div>
              </div>
            </div>
          </div>
        )}

        

      {/* Dreams Section */}
      <section id="dreams" className="py-20 bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 text-center rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-pink-700 mb-6">Nossos Sonhos</h2>
        <div className="mt-4 flex flex-col items-center">
          <textarea
        value={newDream}
        onChange={(e) => setNewDream(e.target.value)}
        placeholder="Escreva um sonho especial..."
        className="w-full max-w-lg border-2 border-pink-300 rounded-lg p-4 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
        onClick={addDream}
        className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 active:bg-pink-700 active:transform active:translate-y-1 transition duration-150 ease-in-out"
          >
        Adicionar Sonho
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg relative border-2 border-dashed border-pink-400 w-full max-w-3xl mx-auto mt-6" style={{ backgroundImage: "url('/public/E2F0EEE3-61F5-4F0A-B3F4-8705D9701135_1_105_c.jpeg')", backgroundSize: "cover", fontFamily: "'Permanent Marker', cursive" }}>
          <ol className="list-decimal list-inside text-left">
        {dreams.map((dream, index) => (
          <li key={index} className="relative mb-2">
            {dream}
            <button
          onClick={() => removeDream(index)}
          className="absolute top-0 right-0 text-red-500 hover:text-red-700 transition duration-150 ease-in-out"
            >
          ✕
            </button>
          </li>
        ))}
          </ol>
        </div>
      </section>

      </main>

      <footer className="bg-pink-200 py-4 text-center text-pink-700">
        <p className="text-lg">
          Feito com ❤️ por{' '}
          <a 
        href="https://carlossdev.site/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-pink-500 hover:text-white transition duration-300 ease-in-out"
          >
        Carlos Augusto
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
