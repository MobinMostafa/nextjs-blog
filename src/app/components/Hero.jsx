"use client";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
// import heroImage from '/hero.jfif'
import { Fade, Zoom } from "react-reveal";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter()
  const handleRouter = () => {
    router.push("/contact")
  }
  return (
    <div className="container">
      <div className="row py-5 ">
        <Fade left>
          <div className="col-md-6">
            <h1 className="display-2 pb-2">Welcome to Next js Blog App !</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum
              quos similique illum nisi odio sit praesentium voluptate facere
              quia id, velit minima totam hic amet. Dolore nihil ducimus hic.
            </p>
            <Link href="/about">
              <Button className="primaryColor">Read More</Button>
            </Link>
            <Button variant="outline-success" className="ms-2" onClick={() => handleRouter() }>
              Contact
            </Button>
          </div>
        </Fade>
        <Zoom>
          <div className="col-md-6 d-md-flex justify-content-end">
            <Image src="/hero.jfif" width={450} height={400} />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Hero;
