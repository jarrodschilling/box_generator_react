import { useState } from 'react'

const BoxForm = (props) => {

    const {stateUpdater} = props

    const [boxColor, setBoxColor] = useState("")
    const [boxWidth, setBoxWidth] = useState("")
    const [boxHeight, setBoxHeight] = useState("")

    const makeBox = (e) => {

        e.preventDefault()

        let newValue = {
            boxColor: boxColor,
            boxWidth: boxWidth + "px",
            boxHeight: boxHeight + "px"
        }

        stateUpdater(newValue)

        setBoxColor("")
        setBoxWidth("")
        setBoxHeight("")
    }


    return (
        <>
            <form onSubmit={ makeBox }>
                <div className='formBox'>
                    <label htmlFor="boxColor">Color</label>
                    <input id="boxColor" value={boxColor} type="text" onChange={ (e) => setBoxColor(e.target.value) } />
                </div>
                <div className='formBox'>
                    <label htmlFor="boxWidth">Width (pixels)</label>
                    <input id="boxWidth" value={boxWidth} type="text" onChange={ (e) => setBoxWidth(e.target.value) } />
                </div>
                <div className='formBox'>
                    <label htmlFor="boxHeight">Height (pixels)</label>
                    <input id="boxHeight" value={boxHeight} type="text" onChange={ (e) => setBoxHeight(e.target.value) } />
                </div>
                <button>Add</button>
            </form>
        </>
    );
}

export default BoxForm;