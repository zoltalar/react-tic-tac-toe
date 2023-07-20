import { Badge } from 'react-bootstrap'

export default function Info({ values, nextPlayer, getWinner }) {

    function winner() {
        return getWinner(values)
    }

    return (
        winner() === null ? 
            <p>Next player is <Badge bg="secondary">{ nextPlayer() }</Badge></p> : 
            <p>Winner is <Badge bg="secondary">{ winner() }</Badge></p>
    )
}