import React from 'react';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<>
            <div className="about-page">
                <h1>Recyclops: An image classifier that helps people sort their trash into the correct bins.</h1>

                <p>The 12th United Nations Sustainable Development Goal is to ensure responsible consumption and production by substantially reducing waste generation through prevention, reduction, recycling, and reuse. Despite consumers’ best intentions to responsibly dispose waste, recycling contamination and incorrect disposal of trash continue to present an obstacle to achieving this goal. Recycling contamination is when non-recyclable material or contaminants ends up in the recycling system which can force entire streams of perfectly recyclable material to go to landfills. On the flip side, high amounts of recyclable materials end up in garbage bins for various reasons such as misinformation or unclarity of signage. Trash sorting is complex and unique to municipalities so we a need a solution to confidently direct consumer trash to their correct bins.</p>

                <p>We propose a feasible solution of developing a smartphone application that allows users to take a picture of the trash that they are unsure of how or where to dispose of and instantly direct them to the correct method of disposal. This app would operates similar to Google Lens where users can just point their camera at an article of trash, and it would tell them which trash bin to throw it in and even give them tips for separating and cleaning it before throwing it out. This feature is powered by an integrated integrated model that is trained to classify varying  trash articles, provide information on how it should be disposed of, and what precautions should be taken.</p>

                <h2>Our Motivation</h2>
                <p>Our motivation for this product goes beyond simply reducing the number of new landfills being created but also other environmental and socioeconomic sectors such as recovering raw materials, preserving energy, mitigating emissions and preventing pollution. For example, solid waste that could otherwise be treated such as batteries in landfills prove to leak toxic chemicals that pollute the local environment, water and soil. Additionally, recycling contamination can expose workers in recycling facilities to hazardous waste, vector-borne diseases and physical injuries. Recycling contamination also causes devaluation of recyclable material, which increases costs of services and even forces some recycling plants to close down; every percent decrease in contamination lowers recycling costs in Toronto by $1 million dollars per year. An app itself won’t directly solve all these issues, but the goal is to empower regular individuals and provide them a tool to make meaningful change towards sustainability.</p>

                <h2>Technology</h2>
                <p>Computer vision tasks like this are best suited by a Convolutional Neural Network (CNN) for their high accuracy; developing the architecture of a model that identifies articles of trash is a feasible task and the least of concern. Most of the effort is involved in training the model, specifically collecting and labelling training image data.</p>
                <p>We utilized <a href="https://github.com/pedropro/TACO">TACO</a>, an open source image dataset of waste found in the wild. It was used to obtain the images and annotations to train our AI in up to 1500 unique pictures. </p>
                <p>Since the picture data wasn’t sorted into different folders based on its contents, an additional Python script was written to sort the images into a uniquely labelled folders based on the information found in the annotations. </p>
                <p>We trained our AI through <a href ="teachablemachine.withgoogle.com">Teachable Machine </a> with the following configuration: 1000 Epochs, 64 Batch Size and 0.001 Learning Rate. There were 30 different unique classes, with their own images, that were used to get the AI familiar with correctly identifying the objects found in images or live feeds.</p>
                <p>Finally, we built an intuitive user interface using React.js and HTML/CSS. The demo is deployed using Heroku and we hope to continue to add to the project in weeks to come. </p>
                <p id="hashtags">#MacHacks2021 #BestEnvironmentalHack</p>
            </div>

        </>)
    }
}

export default AboutPage