import React, {useEffect, useState} from "react"

import {Container, Row, Col, Card} from "react-bootstrap"
import potrait1 from "../assets/AI/Leonardo AI/Output/potrait1.jpg"

import axios from "axios"

function Series() {
  const [series, setSeries] = useState([])
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=a733f6ff6da692289dee52b9c289367b`).then((response) => {
      console.log("datas => ", response.data.results)
      setSeries(response.data.results)
    })
  }, [])
  return (
    <>
      <div>
        <Container>
          <h1 className="text-white text-center p-2" id="potrait">
            Trending TV Series
          </h1>
          <Row>
            {series.map((object, index) => {
              return (
                <Col md={4} className="movieWrapper d-flex align-items-stretch" key={index}>
                  <Card className="movieImage d-flex flex-column ">
                    <Card.Img src={"https://image.tmdb.org/t/p/w780" + object.poster_path} alt="" />
                    <div className="bg-white">
                      <div className="p-2 m-2">
                        <Card.Title>{object.name}</Card.Title>
                        <Card.Text className="card-text ">{object.overview}</Card.Text>
                        <Card.Text>
                          <b>First Air Date: {object.first_air_date}</b>
                        </Card.Text>
                      </div>
                    </div>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Series
