import { useEffect, useState } from "react";
import ArtistTable from "./ArtistTable";
import { Album } from "./types";
import { Table, Spinner, Alert } from "react-bootstrap";

const Home = () => {
  const [musics, setMusics] = useState<Album[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=sia`
        );
        if (response.ok) {
          setLoading(false);
          const res = await response.json();
          setMusics(res.data);
          console.log(res.data);
        } else {
          setLoading(false);
          setError(true);
          console.log("error in fetch");
        }
      } catch (error) {
        setError(true);
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
          <th>Rank</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <Spinner animation="grow" />
        ) : error ? (
          <Alert variant="danger">snap something wrong! come back later</Alert>
        ) : (
          musics.map((music, i) => <ArtistTable music={music} key={i + 1} />)
        )}
      </tbody>
    </Table>
  );
};
export default Home;
