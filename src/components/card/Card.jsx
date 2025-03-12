import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { getPokemon } from "../../services/pokemon";
import { useQuery } from '@tanstack/react-query'

export const  Card = () =>{
    const { theme } = useContext(ThemeContext)

    const { data, error, isLoading } = useQuery({
        queryKey: ['PK'],
        queryFn: getPokemon
    })
    
    if (isLoading) return <p>Carregando...</p>
    if (error) return <p>Erro: {error.message}</p>

    const types = data.types.map((slot) =>{
        return `${slot.type.name} `   
    })

    return(
        <div className='flex-col w-80 h-50 place-items-center rounded-md shadow-xl' style={{backgroundColor: theme.card}}>
            <img src={data.sprites.front_default} className="w-35"></img>
            <div className='flex-col w-80 justify-items-center content-center'>
                <h2>{data.name}</h2>
                <p>Core type: {types[0]}</p>
            </div>
        </div>
    )
}