import React, { useEffect, useState } from 'react'

const Dummy = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("use effect called!")
    }, [count]);

    console.log("render!")
    return (
        <div>
            <button onClick={() => setCount(prev => prev += 1)}>increase</button>
            {count}
        </div>
    )
}

export default Dummy