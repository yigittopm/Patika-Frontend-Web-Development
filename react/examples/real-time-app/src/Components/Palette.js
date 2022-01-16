import { useState } from 'react'

import { send } from '../SocketApi'

function Palette({activeColor}) {

    const [color, setColor] = useState('#000')

    return (
        <div className='container'>
            <input 
                type="color" 
                value={activeColor}
                onChange={e => setColor(e.target.value)}/>
            
            <button onClick={() => send(color)}>Select</button>
        </div>
    )
}

export default Palette