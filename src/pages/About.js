import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import SafetyTips from "../components/Carousel";



const About = () => (
    <div>
        <Hero backgroundImage="https://i.imgur.com/b3p1iYc.jpg">
            <h1>Pupster</h1>
            <h2>They're the Good Boys and Girls</h2>
        </Hero>
        <Container style={{ marginTop: 30 }}>

        <h1>Welcome To Pupster!</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
            consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at et
            metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi gravida. Duis eget
            vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin turpis semper, et
            interdum risus lobortis. Vestibulum suscipit nunc non egestas tristique. Proin hendrerit
            efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor
            erat. Nullam non sem facilisis, tempus tortor sit amet, volutpat nisl. Ut et turpis non
            nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus.
            Praesent suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis consequat
            mattis tortor vitae mattis.
          </p>
          <p>
            Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed malesuada
            molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi ac mi
            hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non nibh
            porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas. Aliquam
            blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel porta
            augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
          </p>
          <br/>
          <h1 id="safety" style={{marginLeft:450}}>SAFETY TIPS</h1>
          <br/>
          <SafetyTips
          imageOne="http://nsvhok.com/wp-content/uploads/2014/08/DVM-Firesafety-750x808.jpg"
          imageTwo="https://www.jaxhumane.org/wp-content/uploads/2017/05/hot-cars-infographic-061815.jpg"
          imageThree="https://blog.plymouthrock.com/wp-content/uploads/2017/01/FB_ENT_Pet_Winter_Tips_Blog.jpg"
          />
        
          
         
          </Container>
          
          {/* https://alldogstrain.com/wp-content/uploads/2017/04/Dogs-Temperature.png */}
    </div>



)

export default About;