
const Boxes = (props) => {
    const {currentBoxes} = props
    // const {setCurrentBoxes} = props
    // const removeBox = value => {
    //     currentBoxes.filter()
    // }

    return (
        <div className="jsBoxes">
            {
                currentBoxes.map((box, index) => (
                    <div key={index}>
                        <p style={{background:box.boxColor, width:box.boxWidth, height:box.boxHeight}}>
                            {/* <button onClick={() => removeBox(index)}>X</button> */}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default Boxes