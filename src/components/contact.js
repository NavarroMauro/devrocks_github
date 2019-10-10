import React from "react"
import { Jumbotron, Button } from "reactstrap"
import PropTypes from "prop-types"

const Contact = () => (
  <Jumbotron>
    <h1 className="display-5">devRocks GmbH</h1>
    Neuenkampsweg 4 <br />
    25337 Kölln-Reisiek <br /> <br />
    tel: 04121 830360 <br />
    mail: contact@devrocks.de <br /> <br />
    Geschäftsführer: Joachim Hart Fernandez <br />
    Registergericht: Amtsgericht Pinneberg <br />
    Registernummer: HRB 13551 PI <br />
    USt-IdNr.: DE317861867
    <p className="lead">
      <Button
        id="email-button"
        className="d-block m-3 float-md-right float-lg-right float-xl-right"
        href="mailto:contact@devrocks.de"
        color="primary"
      >
        Schreiben Sie uns
      </Button>

      <Button
        href="tel:04121 830360"
        className="m-3 d-block d-sm-none d-md-none d-lg-none d-xl-none"
        color="primary"
      >
        Ruf uns an
      </Button>
    </p>
  </Jumbotron>
)

Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string,
}

export default Contact
