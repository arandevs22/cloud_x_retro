import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getContact } from "../data/items";

function GamePage() {

    const params = useParams();

    const game = useMemo(() => getContact(params.gameid), [params.gameid]);

    if (!game) {
        throw new Error('El juego no existe')
    }

    return (
        <div>
            <h1>{game.name}</h1>
        </div>
    )
}


export default GamePage;