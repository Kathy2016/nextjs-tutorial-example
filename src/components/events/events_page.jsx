import React from "react";
import Image from "next/image";
import Link from "next/link";

function AllEvents({ data }) {
  return (
    <div className="events-page">
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
          <a className="card">
            <Image width={500} height={500} alt={ev.title} src={ev.image} />
            <h2>{ev.title}</h2>
            {/* <p>{ev.description}</p> */}
          </a>
        </Link>
      ))}
    </div>
  );
}

export default AllEvents;
