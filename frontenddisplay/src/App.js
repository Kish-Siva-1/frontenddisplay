import React from 'react';
import './App.css';
import './App.scss';
import logo from './images/logo.png'
import rightarrow from './images/mobile/RightArrow.png'
import leftarrow from './images/mobile/LeftArrow.png'
import testcovimg from './images/mobile/TestimonialCoverImage.png'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //keeps track of the testimonial being shown on the slider
      slideIndex: 0
    };
  }

  componentDidMount() {
    // this ensures that the testimonials aren't blank on loading
    this.plusSlides(+1)
  }

  //keeps track of the slider and puts the next slide onto the screen when the next button is clicked
  plusSlides = (n) => {
    let m = this.state.slideIndex + n
    var slides = document.getElementsByClassName('reisetopia-testimonials');

    if (m > slides.length) { m = 1 }
    else if (m < 1) { m = slides.length }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[m - 1].style.display = "block";
    this.setState({ slideIndex: m })
  }

  render() {

    return (

      <div className="App">

        {/* a list of the pictures displayed to the user*/}
        <section id='grid'>

          <div className='wrapper'>
            <div className='portrait'>
              <img src="https://cdn.pixabay.com/photo/2014/09/13/12/28/hong-kong-443961_1280.jpg" alt="Hong Kong" />
              <div className="center-bottom-portrait">Hong Kong <br /> ab 250€</div>
            </div>
            <div className='portrait'>
              <img src="https://cdn.pixabay.com/photo/2015/01/01/15/34/berlin-585744_1280.jpg" alt="Berlin" />
              <div className="center-bottom-portrait">Berlin <br /> ab 250€</div>
            </div>
            <div className='landscape'>
              <img src="https://cdn.pixabay.com/photo/2014/08/01/15/51/manhattan-407703_1280.jpg" alt="New York" />
              <div className="center-bottom-landscape">New York <br /> ab 250€</div>
            </div>
            <div className='landscape'>
              <img src="https://cdn.pixabay.com/photo/2017/09/08/17/05/elephant-2729413_1280.jpg" alt="Ko Samui" />
              <div className="center-bottom-landscape">Ko Samui <br /> ab 250€</div>
            </div>
          </div>

        </section>

        {/* testimonials used for the testimonial carousel / slider   */}
        <section id='carousel'>

          <div className="image-carousel">
            <div className='coverimage'>
              <img src={testcovimg} alt="Testimonial Cover" />
            </div>
            <div className='inner'>

              <div className="reisetopia-testimonials">
                <p className="quote">I had an incredible time at the Langmore Hotel in Melbourne, Australia.</p>
                <p className="testimonials-author">John Keats</p>
              </div>

              <div className="reisetopia-testimonials">
                <p className="quote">I thoroughly enjoyed my trip with Reisetopia and my booking was fast and very convenient.</p>
                <p className="testimonials-author">Ernest Hemingway</p>
              </div>

              <div className="reisetopia-testimonials">
                <p className="quote">I am incredibly happy with my purchase and the airline even upgraded my seat to first class!</p>
                <p className="testimonials-author">Thomas A. Edison</p>
              </div>

            </div>

        {/* will provide left and right arrows as well as an onclick function to move to the next slide */}
            <div className="arrows">
              <div className="prev" onClick={() => { this.plusSlides(-1) }} ><img src={leftarrow} alt="Left Arrow" /></div>
              <div className="next" onClick={() => { this.plusSlides(+1) }} ><img src={rightarrow} alt="Right Arrow" /></div>
            </div>
          </div>

        </section>

        {/* will display the logo in the footer of the web page */}
        <section id='footer'>
          <img src={logo} alt="reisetopia logo" />
        </section>

      </div>

    );
  }
}

export default App;
