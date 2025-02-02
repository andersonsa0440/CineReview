import { useEffect, useState } from 'react';
import './favoritos.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem('@cinereview');
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('@cinereview', JSON.stringify(filtroFilmes))
        toast.success('Filme removido com sucesso!');
    }




    return (
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span className=''>Você não possui nenhum filme salvo.</span>}

            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span className='span'>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                                <button className='btn' onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;