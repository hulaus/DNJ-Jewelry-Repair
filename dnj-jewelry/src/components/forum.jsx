import React, { useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


function Forum() {

    const fetchPosts = async () => {
        const data= await axios.get(`${baseUrl}/forum`)
        console.log("DATA: ", data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])
    
    return(
        <div className="forumWrap">
        <h1>The Jewelry Fix</h1>
            <Card className="forumCards">
                <Card.Header className="forumHead"> Featured </Card.Header>
                <Card.Body className="forumBody">
                    <Card.Title className="forumTitle"> Special Title Treatment </Card.Title>
                    <Card.Text className="forumText">
                        On the grind
                    </Card.Text>
                    <Button variant="primary">Go Somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Forum