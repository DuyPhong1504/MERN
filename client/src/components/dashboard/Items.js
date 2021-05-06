import React from 'react'
import PropTypes from 'prop-types'

const Items = props => {
    const input = props.props.completed ? { color: "red" } : { color: "blue" }
    const markComplete = props.markComplete
     const removeJob=props.removeJob
    return (
        <div className="col-3 border m-3">
            <img src="https://picsum.photos/id/237/200/300" className="img-fluid" />
            <p style={input}>
                {props.props.title}
            </p>
            <input type='checkbox'
                onChange={markComplete.bind(this,props.props.id)}
                checked={props.props.completed} className="m-3"
            />
            <button className="btn btn-danger" onClick={removeJob.bind(this,props.props.id)} >Delete</button>
        </div>
    )
}

export default Items
