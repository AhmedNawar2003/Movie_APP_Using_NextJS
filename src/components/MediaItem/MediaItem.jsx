import Link from "next/link";
import Image from "next/image";

export default function MediaItem({ item }) {
  const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`;

  return (
    <div className="col-lg-3 my-3">
      <Link href={`/itemDetails/${item.id}/${item.media_type}`} className="text-decoration-none">
        <div className="card position-relative">
          <div className="card-image">
            {item.poster_path ? (
              <Image
                className="w-100"
                src={getImageUrl(item.poster_path)}
                alt={item.title || item.name || "Media Image"}
                width={300} 
                height={450}
                priority
              />
            ) : item.profile_path ? (
              <Image
                className="w-100"
                src={getImageUrl(item.profile_path)}
                alt={item.title || item.name || "Media Image"}
                width={300} 
                height={450}
                priority
              />
            ) : null}
          </div>
          <div className="card-body">
            {item.vote_average && (
              <span
                style={{ background: "lightblue" }}
                className="position-absolute top-0 end-0 py-1 px-2"
              >
                {Number(item.vote_average).toFixed(1) * 10}%
              </span>
            )}
            <h6>{item.title || item.name}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}
