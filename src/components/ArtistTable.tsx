import { Component } from "react";
import { Album } from "./types";

interface ArtistTableProps {
  music: {
    album: { cover: string; title: string };
    artist: { name: string; picture: string };
    title: string;
    rank: number;
  };
}

class ArtistTable extends Component<ArtistTableProps> {
  // class ArtistTable extends Component<Album> {
  render() {
    return (
      <tr>
        <td>{this.props.music.artist.name}</td>
        <td>{this.props.music.album.title}</td>
        <td>{this.props.music.rank}</td>
      </tr>
    );
  }
}
export default ArtistTable;
