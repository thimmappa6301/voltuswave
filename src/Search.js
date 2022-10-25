import React, { useEffect, useState } from 'react'
import { Container, Card } from 'react-bootstrap'

function Search() {
    const [data, setData] = useState([])
    const [serchTerm, setSearchTerm] = useState('')


    useEffect(() => {
        fetch('https://flagcdn.com/en/codes.json')
            .then((val) => val.json())
            .then((res) => setData(res))
    })
    // const myArray=Object.keys(data)

    const myArray1 = Object.entries(data)
    console.log(data)

    return (
        <>
            <div className='app'>
                <h1>COUNTRIES DATA</h1>
                <input style={{ width: '50%', padding: '10px', borderRadius: '20PX', paddingLeft: '50px' }} type='text' placeholder='Search Here' maxlength="2"
                    onChange={(e) => { setSearchTerm(e.target.value) }} />
                <div style={{ display: 'grid', gridTemplateColumns: '3fr 3fr 3fr 3fr', columnGap: '20px', rowGap: '20px' }}>
                    {
                        myArray1.filter(([key, val]) => {
                            if (serchTerm == '') {
                                return val
                            } else if (serchTerm.toLowerCase() == key) {
                                return val
                            }
                        }).map(([key, val]) => {
                            return (
                                <>
                                    <Container style={{ backgroundColor: 'whitesmoke', margin: '50px' }}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={`https://flagcdn.com/144x108/${key}.png`} />
                                            <Card.Body>
                                                <Card.Title style={{ color: 'red' }}>{val}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Container>
                                </>
                            )
                        })
                    }

                </div>
            </div>

        </>
    )
}

export default Search