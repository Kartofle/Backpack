import React, {Component, Fragment} from 'react';
import axios from '../../axios-bp';

import Perk from '../../components/Perk/Perk';

class Perks extends Component {
    state = {
        perks: [],
    }

    componentDidMount () {
        axios.get('/perks.json')
          .then(response => {
              this.setState( { perks: response.data } );
          })
          .catch(error => {
              console.log(error);
          });
    }

    addPerkHandler () {
       
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
                            category={perk.category}
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