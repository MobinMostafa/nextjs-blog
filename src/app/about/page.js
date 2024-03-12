import { Button, Container } from "react-bootstrap";
import Link from "next/link";

const about = () => {
  return (
    <Container>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse facere
          beatae distinctio doloremque similique non totam dolore ullam alias
          vitae praesentium, natus error, sit rerum accusantium. Minus
          voluptatum eveniet assumenda!
        </p>
        <Link href="/">
          <Button variant="success">home</Button>
        </Link>
      </div>
    </Container>
  );
};

export default about;
