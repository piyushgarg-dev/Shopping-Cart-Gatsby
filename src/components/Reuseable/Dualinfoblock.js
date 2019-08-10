import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

function Dualinfoblock({ heading, imgsrc }) {
  const mystyle = {
    width: "18rem",
  }
  return (
    <section className="my-2 py-4 bg-secondary">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Nulla placerat, felis a condimentum fringilla, diam lacus egestas
              magna, sed vestibulum massa turpis nec leo. Nam euismod nisl non
              urna fringilla mattis id ut orci. Sed vel enim id nibh volutpat
              mattis. Aliquam non eleifend est. Pellentesque ac tincidunt nisi,
              vel dignissim ligula. Nullam consequat velit tortor, in rhoncus.
              Nulla placerat, felis a condimentum fringilla, diam lacus egestas
              magna, sed vestibulum massa turpis nec leo. Nam euismod nisl non
              urna fringilla mattis id ut orci. Sed vel enim id nibh volutpat
              mattis. Aliquam non eleifend est. Pellentesque ac tincidunt nisi,
              vel dignissim ligula. Nullam consequat velit tortor, in rhoncus.
              Nulla placerat, felis a condimentum fringilla, diam lacus egestas
              magna, sed vestibulum massa turpis nec leo. Nam euismod nisl non
              urna fringilla mattis id ut orci. Sed vel enim id nibh volutpat
              mattis. Aliquam non eleifend est. Pellentesque ac tincidunt nisi,
              vel dignissim ligula. Nullam consequat velit tortor, in rhoncus.
              Nulla placerat, felis a condimentum fringilla, diam lacus egestas
              magna, sed vestibulum massa turpis nec leo. Nam euismod nisl non
              urna fringilla mattis id ut orci. 
            </p>
          </div>
          <div className="col-4">
            <div className="card bg-dark text-white" style={mystyle}>
              <img
                className="card-img-top"
                src={imgsrc}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Just Clicked Photos</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to='/' className="btn btn-info btn-block">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Dualinfoblock
