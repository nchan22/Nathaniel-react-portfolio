import React from "react";

function Contact() {
  return (
    <div className="container">
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
                <h4 style={{ color: "#F06543" }}>Contact Info</h4>
                <p>
                  <a href="mailto:nhchan22@gmail.com">
                    <span className="pr-3">
                      <FaEnvelope />
                    </span>
                    Email - nhchan22@gmail.com
                  </a>
                </p>

                <p>
                  <a href="https://github.com/nchan22" target="_blank">
                    <span className="pr-3">
                      <FaGithub />
                    </span>
                    Github - nchan22
                  </a>
                </p>

                <p>
                  <a
                    href="https://www.linkedin.com/in/nchan22/"
                    target="_blank"
                  >
                    <span className="pr-3">
                      <FaLinkedin />
                    </span>
                    Linkedin - nchan22
                  </a>
                </p>
              </Container>
            </Col>

            <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
              <Container>
                <h4 style={{ color: "#F06543" }}>Send a Message</h4>
                <ContactForm />
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Contact;
