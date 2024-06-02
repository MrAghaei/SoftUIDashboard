
import ToggleComponent from "../../components/ToggleComponent.tsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


function SignInMain (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        if(email && password){
            navigate('/dashboard')
        }
        else{
            alert('Incorrect email or password')
        }
    }
    return(
        <div className='flex flex-row p-4'>
            <div className='flex flex-col w-1/2 p-56 pt-72 gap-5 text-primary-text'>
                {/* Container for sign-in form */}
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl font-bold'>Sign in</h2> {/* Sign-in header */}
                    <p className='text-secondary-text'>Enter your email and password to sign in</p> {/* Sign-in description */}
                </div>
                <form onSubmit={handleSubmit}>
                    {/* Email input field */}
                    <div className="mb-4">

                        <input
                            type="email"
                            id="email"
                            placeholder='Email'
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-secondary-outline sm:text-sm"
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                        />
                    </div>
                    {/* Password input field */}
                    <div className="mb-6">

                        <input
                            type="password"
                            id="password"
                            placeholder='Password'
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-secondary-outline sm:text-sm"
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {/* Remember me checkbox */}
                    <ToggleComponent/>
                    {/* Submit button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary-light to-primary-dark text-white py-2 px-4 rounded-md"

                    >
                        Sign In
                    </button>
                    <div className='flex justify-center gap-2 mt-5'>
                        <p className='text-secondary-text'>Don't have an account?</p>
                        <p className='bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary-dark cursor-pointer'>Sign up</p>
                    </div>
                </form>
            </div>
            <div className='flex flex-col justify-center items-center w-2/3 h-screen bg-gradient-to-br from-primary-light to-primary-dark rounded-2xl'>
                <img className='w-1/2' src="/src/assets/3dmessage.png" alt="3dmessage"/>
                <div className='flex flex-col gap-2 text-center text-white '>
                    <p className='text-2xl font-bold'>"Attention is the new currency"</p>
                    <p>The more effortless the writing looks, the more effort the writer actually put into the process.</p>
                </div>
            </div>
        </div>


    )

}

export default SignInMain