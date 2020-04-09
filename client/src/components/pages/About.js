import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";



const About = () => (
  <div>
    <h1></h1>

    <div>
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>Mohammad Shaukat</strong>
            </MDBCardTitle>
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
                Full-Stack Developer
              </MDBCardTitle>
              <MDBCardText>
                Im am a web developer with a vast array of knowledge in many different front end and back end languages.
              </MDBCardText>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a href="#"><MDBIcon
                    fab
                    icon="linkedin-in"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="#"><MDBIcon
                    fab
                    icon="twitter"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="#"><MDBIcon
                    fab
                    icon="facebook-f"
                    className="grey-text"
                    size="lg"
                  /></a>
                </MDBCol>
              </MDBCol>

            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    
  </div>
);

export default About;
