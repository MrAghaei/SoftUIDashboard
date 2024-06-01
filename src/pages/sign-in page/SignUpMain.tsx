import {useState} from "react";


function SignUpMain (){
    const [rememberMe, setRememberMe] = useState(false);
    function onChangeRememberMeHandler(){
        setRememberMe(!rememberMe)
    }
    return(
        <div className='flex flex-col w-1/3 p-20 gap-5 text-primary-text'>
            {/* Container for sign-in form */}
            <div className='flex flex-col gap-2'>
                <h2 className='text-2xl font-bold'>Sign in</h2> {/* Sign-in header */}
                <p>Enter your email and password to sign in</p> {/* Sign-in description */}
            </div>
            <form>
                {/* Email input field */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-secondary-outline sm:text-sm"
                        required
                    />
                </div>
                {/* Password input field */}
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-secondary-outline sm:text-sm"
                        required
                    />
                </div>
                {/* Remember me checkbox */}
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
                {/* Submit button */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-light to-primary-dark text-white py-2 px-4 rounded-md"
                >
                    Sign In
                </button>
            </form>
        </div>

    )

}

export default SignUpMain