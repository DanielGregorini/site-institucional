import React, { useEffect, useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';


//interface para lingua
interface LanguageOption {
  value: string; //valor: pt, es, en...
  label: string; //nome
  icon: React.ComponentType;  // Define o tipo para o componente de ícone
}


function Navbar(): JSX.Element {
 
  //se o rota está selecinado fica com uma barra vermelha
  function IsRoute(path?: string): string{
    const location = useLocation();

    if(location.pathname === path){
      return ' border-b-2 border-red-500 font-medium'
    }else{
      return ''
    }
  }

  return (
    <nav className="flex wrap justify-center bg-gray-900 pt-10 pb-10">

      <Link className='flex wrap justify-start w-1/12' to='/'>
        Logo
      </Link>

      <ul className="flex list-none flex-wrap justify-center items-center w-10/12">
        <li className="mr-10 mb-1 pr-5 pl-5 text-center">
          <Link to='/' className={`text-white hover:text-red-300${IsRoute('/')}`}>Home</Link>
        </li>
        <li className="mr-10 mb-1 pr-5 pl-5 text-center">
          <Link to='/about' className={`text-white hover:text-red-300${IsRoute('/about')}`}>Sobre</Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar;