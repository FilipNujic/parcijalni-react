import React from 'react'

const Forma = ({input, handleChange, handleFetchUsername}) => {
    return (
        <form onSubmit={handleFetchUsername}>
          <input
            id="input"
            type="text"
            placeholder="Unesite Github username"
            value={input}
            onChange={handleChange}
            className="mx-2 rounded-sm px-5 py-3"
          />
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-sm px-5 py-3"
            onClick={handleFetchUsername}>
            Traži!
          </button>
        </form>
      );
    };

export default Forma;