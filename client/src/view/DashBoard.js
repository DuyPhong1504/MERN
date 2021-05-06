import React, { useState, useEffect } from 'react'
import Items from '../components/dashboard/Items'
import Header from '../components/dashboard/Header'
import axios from 'axios'

const DashBoard = () => {
    const arr = [{ id: 1, title: 'first', completed: false }, { id: 2, title: 'second', completed: false }, { id: 3, title: 'third', completed: false }]
    const [state, setstate] = useState(arr)
    useEffect(() => {
        const getList = async () => {
            try {
                const res = await axios.get(
                    'https://jsonplaceholder.typicode.com/todos?_limit=10'
                )
                setstate(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getList()
    }, [])

    const markComplete = id => {
        const newTodos = state.map(index => {
            if (index.id === id) index.completed = !index.completed
            return index
        })
        setstate(newTodos)
    }

    const removeJob = id => {
        const newTodos = state.filter(index => {
            return index.id !== id
        })

        setstate(newTodos)
    }

    const addJob = title => {
        const newTodos = [
            ...state,
            { id: state[state.length - 1].id + 1, title, completed: false }
        ]

        setstate(newTodos)
    }

    return (
        <div className='text-center'>
            <Header></Header>
            <h1 className="text-success">List the job</h1>
            <div className="container">
                <div class="row">
                    {state.map(index => {
                        return <Items key={index.id} props={index} markComplete={markComplete} removeJob={removeJob}  ></Items>
                    })}
                </div>
            </div>
        </div>
    )
}

export default DashBoard
