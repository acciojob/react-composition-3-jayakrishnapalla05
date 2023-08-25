import React,{useState} from 'react';



const FirstToolTip=({text,children})=>{
   const [showToolTip,setshowToolTip]=useState(false);

   const handleMouse=()=>{
    setshowToolTip(true);
    console.log("used");
   }

   const handleMouseLeave=()=>{
    setshowToolTip(false);
   }


    return (
        <div className="tooltip" onMouseEnter={handleMouse} onMouseLeave={handleMouseLeave}>
            {
                children
            }
            { showToolTip && (
                <div className='tooltiptext' >
                    <div>
                        <h2 className='tooltiptext'>{text}</h2>
                    </div>
            )}
        </div>

    );
}

export default FirstToolTip;