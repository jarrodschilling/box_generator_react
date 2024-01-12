import { useState } from 'react'

const BoxForm = (props) => {
    const [boxColor, setBoxColor] = useState("")
    const [boxWidth, setBoxWidth] = useState("")
    const [boxHeight, setBoxHeigth] = useState("")

    const makeBox = () => {
        // Prevent page from reloading
        e.preventDefault()
        // Clear form inputs after submission
        setBoxColor("")
        setBoxWidth("")
        setBoxHeigth("")
    }


    return (
        <>
            <form onSubmit={ makeBox }>
                <div className='formBox'>
                    <label htmlFor="boxColor">Color</label>
                    <input id="boxColor" value={boxColor} type="text" onChange={ (e) => e.target.value } />
                </div>
                <div className='formBox'>
                    <label htmlFor="boxWidth">Width (pixels)</label>
                    <input id="boxWidth" value={boxWidth} type="text" onChange={ (e) => e.target.value } />
                </div>
                <div className='formBox'>
                    <label htmlFor="boxHeight">Height (pixels)</label>
                    <input id="boxHeight" value={boxHeight} type="text" onChange={ (e) => e.target.value } />
                </div>
                <button>Add</button>
            </form>
        </>
    );
}

export default BoxForm;