import {useState} from "react";

function toggleComponent(){
    const [rememberMe, setRememberMe] = useState(false);
    function onChangeRememberMeHandler(){
        setRememberMe(!rememberMe)
    }
    return(
        <div className="flex items-center mb-6">
            <input
                type="checkbox"
                id="remember-me"
                className="hidden"
                checked={rememberMe}
                onChange={onChangeRememberMeHandler}
            />
            <label htmlFor="remember-me" className="relative flex items-center cursor-pointer">
                {/* Styled checkbox */}
                <span
                    className={`block bg-gray-200 w-10 h-6 rounded-full shadow-inner ${rememberMe ? 'bg-primary-text' : 'bg-gray-200'}`}>
                </span>
                <span
                    className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform transform-gpu duration-200 ease-in-out ${rememberMe ? 'translate-x-4' : 'translate-x-0'}`}>
                </span>
            </label>
            <span className="ml-3 text-sm text-gray-900">Remember me</span> {/* Remember me text */}
        </div>
    )
}

export default toggleComponent