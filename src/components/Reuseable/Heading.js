import React from 'react'

function Heading({title}) {
    return (
        <div className="row">
        <div className="col text-center text-white mb-4">
            <h1 className="display-3">
                {title}
            </h1>
        </div>
        </div>
    )
}

export default Heading