import { useParams } from "react-router-dom"

export const Agaram=()=>{
    return(
        <>
        <h1>World best literature</h1>
        </>
    )
}

export const Thenali=()=>{
    return(
        <>
        <h1>Assembly poet form vijayanagar emperium</h1>
        </>
    )
}

export const Vikatan=()=>{
    const{gopi}=useParams()
    return(
        <>
        <h1>Super Hero {gopi}</h1>
        </>
    )
}
