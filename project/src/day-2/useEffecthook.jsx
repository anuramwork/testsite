import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FetchEccomercialApi = () => {
  const [product, setProduct] = useState([]);
  const [query, setQuery] = useState("");
  const [queryProduct, setqueryProduct]= useState([])
  const fetchData = () => {
    try {
      const url = "https://api.escuelajs.co/api/v1/products";
      fetch(url)
        .then((response) => {
          // const data = response.json()
          // console.log(data)
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setProduct(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch {
      (err) => {
        console.log(err);
      };
    }
  };


  

  const handleSearch = (e) => {setQuery(e.target.value)
    
    
    // setqueryProduct(filteredData);
  }

  // fetchData();

  useEffect(() => {
    fetchData();
  }, []);
  
  const filteredData = product.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  
  return (
    <>
      <h1>API</h1>

      <input
        type="search"
        value={query}
        onChange={handleSearch}
        placeholder="Search items..."
        style={{margin: "10px"}}
      />

     <Container>
      <Row>
          {filteredData.map((items) => {
            return (
              <Col>
                <div key={items.id}>
                  <Card style={{ width: "18rem" }} key={items.id}>
                    <Card.Img variant="top" src={items.images} />
                    <Card.Body>
                      <Card.Title>{items.title}</Card.Title>
                      <Card.Text>{items.description}</Card.Text>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      
    </>
  );
};

export default FetchEccomercialApi;
