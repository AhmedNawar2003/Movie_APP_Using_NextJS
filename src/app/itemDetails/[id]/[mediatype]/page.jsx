"use client"; // Ensure this is a client component

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ItemDetails() {
  const params = useParams();
  const { id, mediatype } = params || {};

  const [itemInfo, setItemInfo] = useState(null);

  const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`;

  async function getItemDetails(id, mediatype) {
    if (!id || !mediatype) return;
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/${mediatype}/${id}?api_key=3714a72d989faa17d7fdfacf022162a7`
      );
      setItemInfo(data);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  }

  useEffect(() => {
    getItemDetails(id, mediatype);
  }, [id, mediatype]);

  if (!itemInfo) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-4 text-center">
          {itemInfo.poster_path || itemInfo.profile_path ? (
            <Image
              className="rounded shadow-lg"
              src={getImageUrl(itemInfo.poster_path || itemInfo.profile_path)}
              alt={itemInfo.title || itemInfo.name || "Media Image"}
              width={300}
              height={450}
              priority
            />
          ) : (
            <p>No Image Available</p>
          )}
        </div>
        <div className="col-8">
          <h1 className="mb-3">{itemInfo.title || itemInfo.name}</h1>
          {itemInfo.vote_average ? (
            <h4 className="mb-2">
              Vote Average:
              <span className="p-2 rounded ms-2" style={{ background: "sandybrown" }}>
                {Number(itemInfo.vote_average).toFixed(1) * 10}%
              </span>
            </h4>
          ) : (
            <h4 className="mb-2">Popularity: {Number(itemInfo.popularity).toFixed()}%</h4>
          )}
          {itemInfo.vote_count && <h4 className="mb-2">Vote Count: {itemInfo.vote_count}</h4>}
          <p className="mt-3">{itemInfo.overview}</p>
        </div>
      </div>

      
    </div>
  );
}
