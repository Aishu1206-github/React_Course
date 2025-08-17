import React from "react";

function Banner() {
  return (
    <div
      className='h-[60vh] md:h-[80vh] bg-cover bg-center flex items-end'
      style={{
        backgroundImage: `url(https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/X-Men-Poster.jpg)`,
      }}
    >
        <div className="text-white text-xl font-sans text-center w-full bg-black-950/60 p-2">
          Avengers Endgame
        </div>
    </div>
  );
}

export default Banner;
