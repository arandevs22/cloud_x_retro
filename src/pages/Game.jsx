import { useLoaderData } from 'react-router-dom'


const Game = () => {

    const { game } = useLoaderData()

    return (
        <>
            <div className='uk-container uk-text-center'>
                <img src={game.cover} alt="" />
                <h1>{game.title}</h1>
                <p>{game.body}</p>
            </div>
        </>
    )
};

export default Game;

export const loaderGame = async ({ params }) => {
    const res = await fetch(`https://mockend.com/mockend/demo/posts/${params.id}`);

    const game = await res.json();
    return { game };
}