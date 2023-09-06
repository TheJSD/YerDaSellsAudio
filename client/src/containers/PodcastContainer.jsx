import "../App.css"
import EpisodesGrid from "../components/EpisodesGrid"
import Placeholder from '../assets/150.png'
import { useParams, useLocation } from 'react-router-dom'
import { podcastsURL } from "../App"

  const PodcastContainer = () => {
    
    const location = useLocation();
    const { podcastObject } = location.state;

    const [podcast, setPodcast] = useState()

    const fetchPodcast = async () => {
      const res = await fetch(`${podcastsURL}`)
    }
    
  return (
    <div className="background">
    {/* <NavBar/> */}
    <div className="podcast-container">
    <img className="podcast-img" src={Placeholder}></img><br />
      <h1>{podcast.name}</h1>
      <h2>{podcast.author}</h2>
      <h4>{podcast.genre}</h4>
      <button className="button-small">Subscribe</button>
      <p>{podcast.description}</p>
    </div>
    <div className="episode-list">
      <ul>
        <EpisodesGrid episodes = {podcast.episodes}/>
      </ul>
    </div>
    </div>
  )
}
export default PodcastContainer