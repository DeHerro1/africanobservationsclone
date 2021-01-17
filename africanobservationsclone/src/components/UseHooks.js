import React, {useEffect, useState} from 'react';

function ChangeDisplay () {
    const [show,setShow] = useState(false);

      useEffect(() => {
        let effect = () => {
          if(window.scrollY > 150) {
          setShow(true);
        }else setShow(false);
      }
          window.addEventListener('scroll', effect);
          return () => { 
              window.removeEventListener('scroll', effect)
          };
        },[]);
    return show;    
}

export default ChangeDisplay;