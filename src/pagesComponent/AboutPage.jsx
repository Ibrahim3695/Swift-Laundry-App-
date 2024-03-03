import React from 'react'
import "./AboutPage.css"

const AboutPage = () => {
  return (
    <>
    <div className='aboutbody'>
      <div className='aboutmainbody'>
        <div className='aboutusimage'>
          <div className='aboutusimagee'>
          <div className='abouttext'>
          <h1>ABOUT US</h1>
          <p>Let us take the hassle out of laundry day, so you 
            <br />can enjoy fresh, clean garments every time.</p>
          </div>
          </div>
        </div>
        <div className='whowearediv'>
          <div className='whoweareimage'>
            <div className='lefttext'>
              <div className='mission'>
                <h1>Our Mission</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto architecto iure maxime eum quis enim, minima itaque possimus provident tenetur! Officia tempore repellat similique, 
                  pariatur dolore eos voluptatibus voluptatem voluptates.</p>
              </div>
              <div className='vision'>
                <h1>Our Vision</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum rerum doloribus, corrupti animi quibusdam quis, consequuntur amet et quas voluptatum rem dolore facere minima 
                  fugiat nemo iure molestias. Animi, repellendus.</p>
              </div>
            </div>
            <div className='rightimage'>
              <img src="./public/person1.png" alt="" />
            </div>
          </div>
        </div>
        <div className='imagechooseus'>
          <div className='whychooseusimage'>
            <img src="./public/laundry.jpg" alt="" />
            <div className='outerimage'>
              <img src="./public/blackman.jpg" alt="" />
            </div>
          </div>
          <div className='whychooseustext'>
            i need write up here
          </div>

        </div>
        <div className='ourteamdiv'>
          <div className='meetourteam'>
            <h1>MEET OUR TEAM</h1>
            <p>We're The Best Team</p>
          </div>
          <div className='meetourteamimage'>
            <div className='tobe'>
              <img src="./public/tobe.jpg" alt="" />
              <p>Tobe David (Team Lead)</p>
              <h2>Back-End</h2>
            </div>
            <div className='ibrahim'>
              <img src="./public/ibrahim.jpg" alt="" />
              <p>Ibrahim Olawale</p>
              <h2>Front-End</h2>
            </div>
            <div className='grace'>
              <img src="./public/grace.jpg" alt="" />
              <p>Grace Babafemi</p>
              <h2>Front-End</h2>
            </div>
            <div className='ekene'>
              <img src="./public/ekene.jpg" alt="" />
              <p>Ekene Daniel</p>
              <h2>Front-End</h2>
            </div>
            <div className='prosper'>
              <img src="./public/prosper.jpg" alt="" />
              <p>Prosper Chukwunenye</p>
              <h2>Back-End</h2>

            </div>
            

          </div>


        </div>
      </div>
    </div>
    </>
  )
}

export default AboutPage
