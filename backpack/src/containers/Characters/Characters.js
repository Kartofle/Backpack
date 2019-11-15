import React, {Component, Fragment} from 'react';
import axios from '../../axios-bp';

import Character from '../../components/Character/Character';

class Characters extends Component {
    state = {
        characters: [],
    }

    componentDidMount () {
        axios.get('/characters.json')
          .then(response => {
              this.setState( { characters: response.data } );
          })
          .catch(error => {
              console.log(error);
          });
    }

    render() {
        let characters = null;
        
        if (this.state.characters)
            characters = (
                <div>
                    {this.state.characters.map((character, index) => {
                        return <Character 
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            race={character.race}
                            move={character.move}
                            size={character.size}
                            initiative={character.initiative}
                            actions={character.actions}
                            sign={character.sign}
                            age={character.age}
                            icon={character.icon}
                            points={character.points}
                            tier={character.tier}
                            background={character.background}
                            description={character.description}
                            stats={character.stats}
                            skills={character.skills} 
                            image={character.image}
                            perks={character.perks}
                            armor={character.armor}
                            wS1={character.wS1}
                            wS2={character.wS2}
                            quickSlots={character.quickSlots}
                            inventory={character.inventory}
                            wealth={character.wealth}
                            wounds={character.wounds}
                            traumas={character.traumas}
                            consequences={character.consequences}
                            maxCarry={character.maxCarry}
                            totalWeight={character.totalWeight}
                            tags={character.tags}/>
                    })}
                </div>
        );

        return (
            <Fragment>
                {characters}
            </Fragment>
        );
    }
};

export default Characters;