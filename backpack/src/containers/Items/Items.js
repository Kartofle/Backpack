import React, {Component, Fragment} from 'react';
import axios from '../../axios-bp';

import Item from '../../components/Item/Item';

class Items extends Component {
    state = {
        items: [],
    }

    componentDidMount () {
        axios.get('/items.json')
          .then(response => {
              this.setState( { items: response.data } );
          })
          .catch(error => {
              console.log(error);
          });
    }

    clickExpandHandler (props) {
        // props.expanded  
    }

    render() {
        let items = null;
        
        if (this.state.items)
            items = (
                <div>
                    {this.state.items.map((item, index) => {
                        return <Item 
                            key={item.id}
                            type={item.type}
                            symbol={item.symbol}
                            icon={item.icon}
                            level={item.level}
                            name={item.name}
                            benefit={item.benefit}
                            ap={item.ap}
                            damage={item.dam}
                            hardness={item.hardness}
                            uses={item.uses}
                            description={item.description}
                            lore={item.lore}
                            materials={item.materials}
                            value={item.value} 
                            image={item.image}
                            onCharacterSheet={item.onCharacterSheet}
                            tags={item.tags}
                            expandHandler={this.clickExpandHandler}/>
                    })}
                </div>
        );

        return (
            <Fragment>
                {items}
            </Fragment>
        );
    }
};

export default Items;