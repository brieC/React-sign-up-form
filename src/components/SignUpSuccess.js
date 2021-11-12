import React, { useEffect, useState } from 'react';
import '../App.css';
import DotLoader from "react-spinners/DotLoader";

// Show success message after loading screen
const SignUpSuccess = () => {

    // When to display or remove loading screen
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []); // Empty array for loading screen to run one time after page is rendered

    return (
        <div className="container">
            {/* condition for when loading is true, run loader. If not, run success message */}
            {loading ?

                <DotLoader
                    size={50}
                    color={"#00b3b3"}
                    loading={loading}
                    speedMultiplier={1.5} />

                :

                <div className="success-box">
                    <h1 className="success-title">Yay!</h1>
                    <h1 className="success-title">You've <br /> successfully <br /> signed up.</h1>
                </div>
            }
        </div>
    )
}

export default SignUpSuccess
