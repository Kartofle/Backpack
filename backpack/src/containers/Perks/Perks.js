import React, {Component, Fragment} from 'react';

import Perk from '../../components/Perk/Perk';

class Perks extends Component {
    state = {
        perks: [
            {
            icon: "T",
            title: "Test Perk",
            subheader: "This Perk ads 2 to Testing",
            description: "A coder knows testing is important this perk helps with that",
            lore: "Testing dates back to the primitive cave coders",
            onCharacterSheet: false,
            image: "test.png",
            },
            {
            icon: "B",
            title: "Backup Perk",
            subheader: "This is a backup Perk",
            description: "A coder knows testing is important this perk helps with that",
            lore: "Testing dates back to the primitive cave coders",
            onCharacterSheet: true,
            image: "test.png",
            },
        ]
    }

    render() {
        let perks = null;
        
        if (this.state.perks)
            perks = (
                <div>
                    {this.state.perks.map((perk, index) => {
                        return <Perk 
                            key={index}
                            icon={perk.icon}
                            title={perk.title}
                            subheader={perk.subheader}
                            description={perk.description}
                            lore={perk.lore} 
                            image={perk.image}
                            onCharacterSheet={perk.onCharacterSheet}/>
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