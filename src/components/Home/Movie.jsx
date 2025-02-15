"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import MediaItem from "../MediaItem/MediaItem";
import styles from "./Movie.module.css";
export default function Movie() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);

  async function getTrending(mediaType, callback) {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=3714a72d989faa17d7fdfacf022162a7`
      );
      callback(data.results || []);
    } catch (error) {
      console.error(`Error fetching ${mediaType}:`, error);
    }
  }

  useEffect(() => {
    getTrending("movie", setTrendingMovies);
    getTrending("tv", setTrendingTv);
    getTrending("person", setTrendingPeople);
  }, []);

  return (
    <>
      <section className="row py-5 align-items-center">
        <div className="col-lg-4">
          <div className="card">
            <h2 className={`${styles.heading}`}>Trending Movies</h2>
          </div>
        </div>
        {trendingMovies.slice(0, 10).map((item) => (
          <MediaItem key={item.id} item={item} type="movie" />
        ))}
      </section>

      <section className="row py-5 align-items-center">
        <div className="col-lg-4">
          <div className="card">
            <h2 className={`${styles.heading}`}>Trending TV</h2>
          </div>
        </div>
        {trendingTv.slice(0, 10).map((item) => (
          <MediaItem key={item.id} item={item} type="tv" />
        ))}
      </section>

      <section className="row py-5 align-items-center">
        <div className="col-lg-4">
          <div className="card">
            <h2 className={`${styles.heading}`}>Trending People</h2>
          </div>
        </div>
        {trendingPeople.slice(0, 10).map((item) => (
          <MediaItem key={item.id} item={item} type="person" />
        ))}
      </section>
    </>
  );
}
