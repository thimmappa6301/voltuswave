import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Card, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";




export default function Cntry() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://flagcdn.com/en/codes.json')
            .then((val) => val.json())
            .then((res) => setData(res))
    }, [])


    const myArray = Object.keys(data)
    const myArray1=Object.entries(data)
    
    

    // const handleChange=(e)=>{
    //     const thimmi=e.target.value;
    //     const myArray1=Object.keys(data)
    //     myArray1.map((key)=>{
    //     if(thimmi== '' || thimmi==null){
    //         console.log('please enter the some text')
    //     }else{
    //         if(thimmi==key){
    //             console.log(data[key])
    //         }
    //         }


    //     }
    // )


    // }

    return (
        <>
            <h1>COUNTRIES NAME</h1>
            {/* <div>
                <input style={{borderRadius:'15px',padding:'10px',margin:'50px',width:'50%'}} type='search' placeholder='Search For Countries'
                onChange={handleChange} />
            </div> */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 2fr 2fr 2fr', columnGap: '40px', rowGap: '50px' }}>
                {/* <Demo data={data}/> */}

                {
                    myArray1.map(([key,val]) => (
                        <Container style={{ backgroundColor: 'whitesmoke' }}>
                            <Card>
                                <Card.Header as="h3">{val}</Card.Header>
                                <Card.Body>


                                    {/* <Link ><Card.Title>GO TO FLAG</Card.Title></Link> */}
                                    {/* <a href={`https://flagcdn.com/256x192/${key}.png`}>GO TO FLAG</a> */}
                                    {
                                        <image src={`https://flagcdn.com/256x192/${key}.png`}/>
                                    }





                                </Card.Body>
                            </Card>
                        </Container>
                    ))
                }
                {
                    myArray1.map(([key,val])=>console.log(key,val))
                }
            </div>
            {/* <Cntry1 /> */}
           
            
        </>
    );
}
