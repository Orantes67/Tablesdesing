import React from 'react';

function Button({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className="text-white bg-amber-950">
        Vizualizar
      </button>
    </div>
  );
}

export default Button;
