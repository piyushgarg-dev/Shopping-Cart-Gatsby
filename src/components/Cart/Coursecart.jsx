import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'
import Img from 'gatsby-image'

class Coursecart extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            courses:props.courses.edges,
            mycourses:props.courses.edges
        }
    }
    render() {
        console.log(this.state.courses)
        return (
            <section className="text-primary py-5">
            <div className="container">
                <h1 className="text-center display-3 mb-5">Courses</h1>
                <div className="row">
                    {
                        this.state.mycourses.map(({node})=>{
                            return(
                                <div
                                key={node.id}
                                className="col-11 col-md-6 my-3 mx-auto d-flex"
                                >
                                <Img
                                    fixed={node.image.fixed}
                                />
                                <div className="flex-grow-1 px-3">
                                <div className="d-flex justify-content-between">
                                <h5 className="mb-1">{node.title}</h5>
                                
                                <h5 className="mb-1">${node.price}</h5>
                                </div>
                                <h5 className="mb-1 text-muted">{node.description.description}</h5>
                                <button
                                className="snipcart-add-item btn btn-danger"
                                data-item-id={node.id}
                                data-item-name={node.title}
                                data-item-price={node.price}
                                data-item-weight=""
                                data-item-url="http://myapp.com/products/bacon"
                                data-item-description={node.description.description}>
                                Join Now
                            </button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </section>
        )
    }
}
export default Coursecart
