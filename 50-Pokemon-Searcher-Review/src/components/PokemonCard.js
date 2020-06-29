import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {frontShowing: true}

  togglePicture = () => {
    this.setState({frontShowing: !this.state.frontShowing})
  }

  render() {
    let {name, hp, sprites} = this.props.pokemon
    return (
      <Card onClick={this.togglePicture}>
        <div>
          <div className="image">
            <img src={this.state.frontShowing ? sprites.front : sprites.back} alt={name} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
