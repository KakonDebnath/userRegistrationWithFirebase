import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const SignUp = () => {

    const {user, createUser} = useContext(AuthContext);

    const handleSignUp = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = event.target.password.value;
        createUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();

        }).catch(error=>{
            console.log(error.message);
        })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Sign up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Your full name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <label className="label">
                            <Link to="/login" className="label-text-alt link link-hover text-blue-500">Log in Now!</Link>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;