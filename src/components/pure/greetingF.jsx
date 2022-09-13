import React from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {
  // Introducción a useState
  // const [variable, método para actualizar] = useState(valorInicial);
  const [age, setAge] = React.useState(30);

  const birthday = () => {
    // actualizar state
    setAge(age + 1);
  };

  return (
    <div>
      <h1>Hola {props.name} desde componente funcional</h1>
      <p>Tienes {age} años</p>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
