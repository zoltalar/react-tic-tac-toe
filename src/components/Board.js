import { Col, Row } from 'react-bootstrap'
import Square from './Square'

export default function GameBoard({ values, onMarkSquare }) {
    
    function handleClick(i) {
        onMarkSquare(i)
    }

    return (
        <div className="board">
            <Row>
                <Col>
                    <Square value={ values[0] } onSquareClick={ () => handleClick(0) }></Square>
                    <Square value={ values[1] } onSquareClick={ () => handleClick(1) }></Square>
                    <Square value={ values[2] } onSquareClick={ () => handleClick(2) }></Square>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Square value={ values[3] } onSquareClick={ () => handleClick(3) }></Square>
                    <Square value={ values[4] } onSquareClick={ () => handleClick(4) }></Square>
                    <Square value={ values[5] } onSquareClick={ () => handleClick(5) }></Square>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Square value={ values[6] } onSquareClick={ () => handleClick(6) }></Square>
                    <Square value={ values[7] } onSquareClick={ () => handleClick(7) }></Square>
                    <Square value={ values[8] } onSquareClick={ () => handleClick(8) }></Square>
                </Col>
            </Row>
        </div>
    )
}