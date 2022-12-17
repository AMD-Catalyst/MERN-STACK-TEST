import Container from "react-bootstrap/Container";

const myStyle = {
  position: "fixed",
  left: 0,
  bottom: 0,
  backgroundColor: "darkgreen",
  color: "white",
  textAlign: "center",
};

function Footer() {
  return (
    <Container fluid style={myStyle}>
      <p>This is Footer</p>{" "}
    </Container>
  );
}

export default Footer;
