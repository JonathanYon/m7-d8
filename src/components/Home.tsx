import { Component, useEffect, useState } from "react";
import ArtistTable from "./ArtistTable";
import { Album } from "./types";
import { Table } from "react-bootstrap";

const Home = () => {
  const [musics, setMusics] = useState<Album[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=sia`
        );
        if (response.ok) {
          const res = await response.json();
          setMusics(res.data);
          console.log(res.data);
        } else {
          console.log("error in fetch");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Table striped bordered hover style={{ width: "70%" }} className="ml-5">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {musics.map((music, i) => (
          <ArtistTable music={music} key={i + 1} />
        ))}
      </tbody>
    </Table>
  );
};
export default Home;
