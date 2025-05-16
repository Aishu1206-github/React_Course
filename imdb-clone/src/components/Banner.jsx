import React from "react";

function Banner() {
  return (
    <div
      className='h-[70vh] md:h-[80vh] bg-cover bg-center flex items-end'
      style={{
        backgroundImage: `url(https://m.media-amazon.com/images/M/MV5BMWZkNDRjNTQtNWE2Ni00MDc4LTlmNTEtYzIyNmUxM2ViZTFhXkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg)`,
      }}
    >
        <div className="text-white text-xl font-sans text-center w-full bg-black-950/60 p-2">
          Avengers Endgame
        </div>
    </div>
  );
}

export default Banner;
