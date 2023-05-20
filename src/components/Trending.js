import React, {useEffect, useState} from "react"

import {Container, Row, Col, Card} from "react-bootstrap"
import trending1 from "../assets/AI/Leonardo AI/Output/trending1.jpg"

import axios from "axios"

function Trending() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=a733f6ff6da692289dee52b9c289367b`).then((response) => {
      // console.log("datas => ", response.data.results)
      setMovies(response.data.results)
    })
  }, [])

  return (
    <>
      <div>
        <Container>
          <h1 className="text-white text-center p-2" id="trending">
            Trending Movies
          </h1>
          <Row>
            {movies.map((object, index) => {
              return (
                <Col md={4} className="movieWrapper d-flex align-items-stretch" key={index}>
                  <Card className="movieImage d-flex flex-column ">
                    <Card.Img src={"https://image.tmdb.org/t/p/w780" + object.poster_path} alt="" />
                    <div className="bg-white">
                      <div className="p-2 m-2">
                        <Card.Title>{object.title}</Card.Title>
                        <Card.Text>{object.overview}</Card.Text>
                        <Card.Text>Release Date: {object.release_date}</Card.Text>
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

export default Trending
