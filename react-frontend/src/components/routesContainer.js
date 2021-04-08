import { Component } from "react";

function makeDivFrom(route) {
  return (
    <li id="route-container">
      <h3>Nome da Rota: {route.title}</h3>
      <h4>
        Posição Inicial: LAT {route.startPosition.lat} LGT {route.startPosition.lng}
      </h4>
      <h4>
        Posição Final: LAT {route.endPosition.lat} LGT {route.endPosition.lng}
      </h4>
    </li>
  );
}

class RoutesContainer extends Component {
  state = {
    routes: [],
  };

  componentDidMount() {
    fetch("/routes")
      .then(res => res.json())
      .then(responseJson => {
        this.setState({ routes: Object.values(responseJson) });
      });
  }

  render() {
    const { routes } = this.state;
    console.log("These are the routes ", routes);
    return <ul>{routes.map(makeDivFrom)}</ul>;
  }
}

export default RoutesContainer;
