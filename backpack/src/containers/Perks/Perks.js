import React, {Component, Fragment} from 'react';
import axios from '../../axios-perks';

import Perk from '../../components/Perk/Perk';

class Perks extends Component {
    state = {
        perks: [
            // {
            // id: '891374910101',
            // symbol: "Fire",
            // icon: "T",
            // level: 4,
            // title: "Test Perk",
            // benefit: "This Perk ads 2 to Testing",
            // description: "A coder knows testing is important this perk helps with that",
            // lore: "Testing dates back to the primitive cave coders",
            // onCharacterSheet: false,
            // image: "test.png",
            // cost: [20, 10],
            // },
            // {
            // id: '02940909820',
            // symbol: "Earth",
            // icon: "B",
            // level: 2,
            // title: "Backup Perk",
            // benefit: "This is a backup Perk",
            // description: "A coder knows testing is important this perk helps with that",
            // lore: "Testing dates back to the primitive cave coders",
            // onCharacterSheet: true,
            // image: "test.png",
            // cost: [10],
            // },
        ]
    }

    componentDidMount () {
        axios.get('https://next.json-generator.com/api/json/get/41_HZAtYv')
          .then(response => {
              this.setState( { perks: response.data } );
          })
          .catch(error => {
              console.log(error);
          });
    }

    render() {
        let perks = null;
        
        if (this.state.perks)
            perks = (
                <div>
                    {this.state.perks.map((perk, index) => {
                        return <Perk 
                            key={perk.id}
                            symbol={perk.symbol}
                            icon={perk.icon}
                            level={perk.level}
                            title={perk.title}
                            benefit={perk.benefit}
                            description={perk.description}
                            lore={perk.lore}
                            cost={perk.cost} 
                            image={perk.image}
                            onCharacterSheet={perk.onCharacterSheet}
                            tags={perk.tags}/>
                    })}
                </div>
        );

        return (
            <Fragment>
                {perks}
            </Fragment>
        );
    }
};

export default Perks;