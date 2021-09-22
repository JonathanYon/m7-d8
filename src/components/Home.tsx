import { Component } from "react";
import ArtistTable from "./ArtistTable";

class Home extends Component {
  state = {
    music: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=sia`
      );
      if (response.ok) {
        const res = await response.json();
        console.log(res.data);
      } else {
        console.log("error in fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return <ArtistTable />;
  }
}
export default Home;
