import { useState } from "react";
import {QrScanner} from "react-qrcode-scanner";

function App() {
  const [qrValue, setQrValue] = useState('')
    const handleScan = (value) => {
        setQrValue(value)
    }

    const handleError = (error) => {
        console.log({error})
    }

    return (
        <div className="App flex flex-col gap-2">
            <QrScanner
                onScan={handleScan}
                onError={handleError}
                className={'fivety-em'}

                /** Default props

                 onError = (error) => console.log({error}),
                 
                 onScan = (value) => console.log({value}),
                 
                 facingMode = 'environment', // environment|face
                 
                 constraints = null, //device constraints
                 
                 onLoad = (val :{mirrorVideo, streamLabel}) => null,
                 
                 flipHorizontally = false, //flip or reflect the video output based on facing mode
                 
                 style, //section styling can be added here
                 
                 className, //classnames will be added to the section wrapper
                 
                 delay = 800, //delay between each scan
                 
                 resolution = 600, //canvas resolution
                 
                 aspectRatio = '16:9',
                       
                 showViewFinder = true,
                 
                 viewFinder = { //any valid JS-CSS can be added here
                    border: '12px solid rgba(255,255,255,0.3)',
                    position: 'absolute',
                    borderRadius: '5px',
                    width: '250px',
                    height: '250px'
                }
                 */
            />
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your name?</span>
                <span className="label-text-alt">Top Right label</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={qrValue} readOnly/>
              <div className="label">
                <span className="label-text-alt">Bottom Left label</span>
                <span className="label-text-alt">Bottom Right label</span>
              </div>
            </label>
        </div>
    );
}

export default App;
