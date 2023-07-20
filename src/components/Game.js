import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Board from './Board'
import Info from './Info'

export default function Game() {
    const [values, setValues] = useState(Array(9).fill(null))
    const [currentMove, setCurrentMove] = useState(0)

    function xIsNext(e) {
        return currentMove % 2 === 0
    }

    function getNext() {
        return xIsNext() ? 'X' : 'O'
    }

    function getWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }

        return null
    }

    function markSquare(i) {
        const oldValues = values
        const winner = getWinner(oldValues)

        if (oldValues[i] === null && winner === null) {
            oldValues[i] = getNext()
            setValues(oldValues)
            const nextMove = currentMove + 1
            setCurrentMove(nextMove)            
        } else {
            setValues(Array(9).fill(null))
        }
    }

    return (
        <Container>
            <Row>
                <Col className="text-center mt-5 mb-3">
                    <Board values={ values } onMarkSquare={ markSquare } />
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <Info values={ values } nextPlayer={ getNext } getWinner={ getWinner } />
                </Col>
            </Row>
        </Container>
    )
}