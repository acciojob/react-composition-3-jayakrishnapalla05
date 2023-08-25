import React ,{useState} from 'react';



const SecondToolTip=({text,children})=>{
   const [isHover,setisHover]=useState(false);

   const handleMouseEnter=()=>{
    setisHover(true);
    console.log("used");
   }

   const handleMouseLeave=()=>{
    setisHover(false);
   }



    return (
        <div className='tooltip' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {isHover && (
                <div className='tooltiptext'>
                    <div>
                        <p className='tooltip'>{text}</p>
                    </div>
                    </div>
            )}
        </div>

    );
}

export default SecondToolTip;