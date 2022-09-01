import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie ,BiSearchAlt2} from 'react-icons/bi'
import './Navbar.css'


const Navbar = () => {

    const [busca,setBusca] = useState('');
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if(!busca) return

      navigate(`/search?q=${busca}`);
      setBusca('')
    }
    

    return (
        <nav id="navbar">
        <h2>
          <Link to='/'><BiCameraMovie/>Busca Filmes</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input 
              type='text' 
              placeholder="Busque por um filme" 
              onChange={(e)=>setBusca(e.target.value)}
              value={busca}/>
            <button type="submit"><BiSearchAlt2/></button>
        </form>
      </nav>
    )
}

export default Navbar;