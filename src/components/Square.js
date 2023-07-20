import { Button } from 'react-bootstrap'

export default function Square({ value, onSquareClick }) {

    function mark() {
        onSquareClick()
    }

    return (
        <Button variant="light" onClick={ mark }>
            { value }
        </Button>
    )
}