import React from 'react'

const Detalji = ({ avatar, name }) => {
    return (
        <li className=" bg-zinc-700 text-white">
          <a className="block" target="_blank" href={avatar}>
            {name}
          </a>
        </li>
      );
}

export default Detalji;