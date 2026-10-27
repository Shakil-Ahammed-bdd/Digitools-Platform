import account from '../assets/user.png';
import product from '../assets/rocket.png';
import create from '../assets/package.png';

const ThreeSteps = () => {
    return (
        <div className="mx-auto  max-w-7xl items-center justify-between gap-8 px-4 py-8 sm:px-6 lg:px-8 text-center mt-8">
            <h1 className='text-5xl font-bold my-4'>Get Started in 3 Steps</h1>
            <p>Start using premium digital tools in minutes, not hours.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className='flex flex-col items-center border rounded-lg p-5'>
                    <img className='p-3 rounded-full bg-fuchsia-100 ' src={account} alt="Step 1" />
                    <h2 className='text-2xl font-bold my-4'>Create Account</h2>
                    <p>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='flex flex-col items-center border rounded-lg p-5'>
                    <img className='p-3 rounded-full bg-fuchsia-100 ' src={create} alt="Step 1" />
                    <h2 className='text-2xl font-bold my-4'>Choose Products</h2>
                    <p>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='flex flex-col items-center border rounded-lg  p-5'>
                    <img className='p-3 rounded-full bg-fuchsia-100 ' src={product} alt="Step 1" />
                    <h2 className='text-2xl font-bold my-4'>Start Creating</h2>
                    <p>Download and start using your premium tools immediately.</p>
                </div>
                
            </div>
        </div>
    );
};

export default ThreeSteps;