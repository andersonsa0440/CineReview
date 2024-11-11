import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './filme-info.css'
import api from '../../services/api';
import { toast } from "react-toastify";

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "4adb399aa7af8b06edb91f8cc70eb739",
          language: "pt-BR",
        }
      })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log('Filme não encontrado!')
          navigate('/', { replace: true });
          return;
        })
    }

    loadFilme();

    return () => {
      console.log('Componente foi desmontado')
    }

  }, [id])

  function salvarFilme(filme) {
    const minhaLista = localStorage.getItem("@cinereview");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

    if (hasFilme) {
      toast.warn("Este Filme já na sua lista!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@cinereview", JSON.stringify(filmesSalvos));
    toast.success('Filme salvo com sucesso!')
  }


  if (loading) {
    return (
      <div className="detail">
        <h1>Carregando detalhes {id} </h1>
      </div>
    )
  }

  const ratingStyle = {
    color: filme.vote_average >= 5 ? 'green' : 'red',
  };

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong style={ratingStyle}>Avaliação: {filme.vote_average} /10 </strong>

      <div className="area-buttons">
        <button onClick={() => salvarFilme(filme)}>Salvar</button>
        <button>
          <a target="_blank" rel="noopener noreferrer" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>
            Trailer
          </a>
        </button>
      </div>

    </div>
  )
}

export default Filme;