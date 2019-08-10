import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

function infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
            <div className="col-10 col-sm-10 mx-auto text-white">
                <p className="lead text-white mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius tristique mi porttitor interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam at nisi mollis, maximus ligula a, vestibulum mauris. Etiam fringilla venenatis diam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius tristique mi porttitor interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam at nisi mollis, maximus ligula a, vestibulum mauris. Etiam fringilla venenatis diam.
                </p>
                <Link to="/about">
                    <button className="btn btn-warning btn-lg">
                        {heading}
                    </button>
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default infoblock
