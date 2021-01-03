import React from 'react';
import './portfolio.scss';
import Card from '../card/card.js'


const Portfolio = () => {
    return(<div id="portfolio">
    <div class="section-title"><h1>Projects</h1></div>
    <div class="portfolio-card-container">
        <Card 
        title="Green for growth"
        information="Website for vegan recipes"
        src="../../coding-pic-3.jpg"
        alt="coding"
        >       
        </Card>
        <Card 
        title="Green for growth"
        information="Website for vegan recipes"
        src="../../coding-pic-3.jpg"
        alt="coding"
        >       
        </Card>
        <Card 
        title="Green for growth"
        information="Website for vegan recipes"
        src="../../coding-pic-3.jpg"
        alt="coding"
        >       
        </Card>
        <Card 
        title="Green for growth"
        information="Website for vegan recipes"
        src="../../coding-pic-3.jpg"
        alt="coding"
        >       
        </Card>
        <Card 
        title="Green for growth"
        information="Website for vegan recipes"
        src="../../coding-pic-3.jpg"
        alt="coding"
        >       
        </Card>
        <Card 
        title="Green for growth"
        information="Website for vegan recipes"
        src="../../coding-pic-3.jpg"
        alt="coding"
        >       
        </Card>   
    </div>
    </div>);
}

export default Portfolio;