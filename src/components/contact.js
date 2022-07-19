import React from "react";

function Contact() {
    return (
      <div className='container'>
          <Jumbotron fluid className="p-5 mb-0">
              <Container className="text-center">
                  <div className="p-md-5">
                      <h1>Get in Touch</h1>
                  </div>
              </Container>
          </Jumbotron>

          <Container fluid className="shadow bg-light mb-5">
            <Container className="p-4">
                <Row>
                    <Col>
                        <Container>
                            <h4 style={{color: "#F06543"}}>Contact Info</h4>
                            <p>
                                <a href="mailto:nhchan22@gmail.com">
                                    <span className="pr-3">
                                        <FaEnvelope />
                                    </span>
                                    nhchan22@gmail.com
                                </a>
                            </p>