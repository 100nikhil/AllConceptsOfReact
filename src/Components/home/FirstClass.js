import { Component } from "react";
import "./FirstClass.css";

class FirstClass extends Component {
  render() {
    return (
      <div className="bgchange">
        <h5>Rendered via a class component.</h5>
        <h6>{this.props.prop1}</h6>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          fugit eos aliquid, officia dignissimos ab sapiente quod, ducimus vero
          incidunt recusandae quia odio laboriosam debitis iure beatae sit
          aliquam ipsa quis fugiat corrupti nam accusamus! Ad magni, eveniet
          mollitia amet aut excepturi aliquam facilis esse corrupti, natus nisi
          pariatur doloremque provident iste id architecto? Dolorem dicta,
          voluptas, pariatur dolorum quia optio adipisci corrupti maxime
          deserunt fugiat rem minus! Explicabo, fugit voluptas, pariatur nulla
          hic vel id fuga provident rerum accusantium ea deserunt! Dolorum unde
          hic reiciendis, eveniet animi veritatis voluptatibus quos natus eaque
          molestias quibusdam excepturi autem distinctio laboriosam iure?
        </p>
      </div>
    );
  }
}

export default FirstClass;