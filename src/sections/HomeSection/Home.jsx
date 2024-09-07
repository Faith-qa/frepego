import './home.css'
import entrance from './Assets/entrance.JPG'

const Home = () => {
    return(
        <div className="homesec">
            <div>
                <h1>FREPEGO LAKEVIEW</h1>
                <h1>RESORT</h1>
                <h2>Hotel & Restaurant</h2>
            </div>
            <div className="parallax-container">
                <div className="paralaxImage">
                    <img
                        src={entrance}
                        alt={"entrance"}
                        width={"980"}
                        height={"638"}
                    />
                </div>

            </div>
            <div className="about">
                <h3>About</h3>
                <div>
                    <p>
                        <span>
                            Frepego Lakeview Resort is a serene and picturesque destination located on the shores of a
                            beautiful lake. The resort offers a perfect blend of tranquility and modern amenities, making it
                            an ideal choice for leisure and business travelers alike. Whether you're looking for a relaxing
                            getaway or planning a corporate retreat, we have everything you need to make your stay memorable.
                        </span>
                    </p></div>
            </div>


        </div>
    )
}

export default Home