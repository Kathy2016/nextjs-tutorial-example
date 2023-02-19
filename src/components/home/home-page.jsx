import Link from "next/link";
import Image from "next/image";

const HomePage = ({ data }) => {
  return (
    <div className="home-body">
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
          <a className="card">
            <div className="image">
              <Image width={500} height={300} alt={ev.title} src={ev.image} />
            </div>

            <div className="content">
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
