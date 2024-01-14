import { useState } from 'react'

const TestBox = (props) => {

    const [currentBoxes, setCurrentBoxes] = useState([])
    const [boxColor, setBoxColor] = useState("")
    const [boxWidth, setBoxWidth] = useState("")
    const [boxHeight, setBoxHeight] = useState("")

    const makeBox = (e) => {

        e.preventDefault()
        let updateValue = {
            boxColor: boxColor,
            boxWidth: boxWidth + "px",
            boxHeight: boxHeight + "px",
        }
        setCurrentBoxes([...currentBoxes, updateValue])

        setBoxColor("")
        setBoxWidth("")
        setBoxHeight("")
    }

    const removeBox = (deleteBox) => {
        const newBoxes = currentBoxes.filter((box) => box !== deleteBox)
        setCurrentBoxes(newBoxes)
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
            <div className="jsBoxes">
            {
                currentBoxes.map((box, index) => (
                    <div key={index}>
                        <p style={{background:box.boxColor, width:box.boxWidth, height:box.boxHeight}}>
                            <button onClick={() => removeBox(box)}>X</button>
                        </p>
                    </div>
                ))
            }
            </div>
        </>
    );
}

export default TestBox;