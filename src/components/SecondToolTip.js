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
                        <h2 className='tooltiptext'>{text}</h2>
                    </div>
            )}
        </div>

    );
}

export default SecondToolTip;