
const Boxes = (props) => {
    const {currentBoxes} = props
    const {setCurrentBoxes} = props

    const removeBox = (deleteBox) => {
        const newBoxes = currentBoxes.filter((box) => box !== deleteBox)
        setCurrentBoxes(newBoxes)
    }


    return (
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
    )
}

export default Boxes