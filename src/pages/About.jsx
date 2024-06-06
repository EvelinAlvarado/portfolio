import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="mx-[10%]">
      <h1>About</h1>
      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, animi
        minus laborum ipsum earum at numquam beatae perspiciatis expedita iure
        excepturi nesciunt odit cumque culpa quaerat suscipit quo asperiores
        sunt.
      </p>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam maxime
        id magni quos quo exercitationem mollitia natus. Non modi, quod labore
        dolores dolor assumenda, quas odit error ad iusto explicabo.
      </p>
      <h2>Experience</h2>
      <ul>
        <li>fvrevcerv</li>
        <li>vrevrevre</li>
        <li>vrevcerv</li>
      </ul>
      <button>My CV</button>
      <h2>Skills</h2>
      <Link to="/contact">
        <button>Contact me</button>
      </Link>
    </div>
  );
};
