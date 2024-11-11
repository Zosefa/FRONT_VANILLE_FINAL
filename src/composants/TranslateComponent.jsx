import React, { useEffect, useRef } from 'react'

const TranslateComponent = () => {
    const googleTranslateRef = useRef(null);

    useEffect(()=>{
        let intervalId;

        const checkGoogleTranslate = () => {
            if(window.google && window.google.translate){
                clearInterval(intervalId);
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage : 'fr', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
                    },
                    googleTranslateRef.current
                );
            }
        };
        intervalId = setInterval(checkGoogleTranslate, 100);
    }, []);

    const styles = {
        translateContainer: {
            width: '100%',
            minHeight: '50px',
            padding: '10px',
            textAlign: 'center',
            background: 'linear-gradient(to right, #EADCB5)',
            borderRadius: '4px',
        }
    };

  return (
    <div>
        <div ref={googleTranslateRef} style={styles.translateContainer}></div>
    </div>
  )
}

export default TranslateComponent