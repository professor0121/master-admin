import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function AMULoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(1); // 1: login, 2: 2FA
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        verificationCode: ''
    });
    const [rememberMe, setRememberMe] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = () => {
        // Simulate login process
        setStep(2);
    };

    const handleVerification = () => {
        // Simulate verification process
        console.log('Login successful with 2FA');
    };

    const goBack = () => {
        setStep(1);
        setFormData({ ...formData, verificationCode: '' });
    };

    return (
        <div className="min-h-screen bg-[#686279] flex items-center justify-center p-2 sm:p-4 lg:p-8">
            <div className="w-full max-w-7xl bg-gray-900 rounded-none sm:rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden min-h-screen sm:min-h-0">
                <div className="flex flex-col lg:flex-row min-h-screen lg:min-h-[500px]">
                    {/* Left Side - Mountain Landscape */}
                    <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[40vh] sm:min-h-[50vh] lg:min-h-auto flex flex-col">
                        {/* Mountain Landscape Background */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='sky' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='70%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23553c9a;stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='mountain1' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23553c9a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%232d1b69;stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='mountain2' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23764ba2;stop-opacity:0.8' /%3E%3Cstop offset='100%25' style='stop-color:%23553c9a;stop-opacity:0.8' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23sky)'/%3E%3Cpath d='M0,400 C200,300 400,350 600,280 L800,320 L800,600 L0,600 Z' fill='url(%23mountain1)'/%3E%3Cpath d='M0,450 C150,380 300,420 500,370 L800,400 L800,600 L0,600 Z' fill='url(%23mountain2)'/%3E%3Cpath d='M0,500 C100,480 200,490 400,470 L800,480 L800,600 L0,600 Z' fill='%23553c9a' opacity='0.6'/%3E%3Cellipse cx='200' cy='100' rx='60' ry='15' fill='%23ffffff' opacity='0.3'/%3E%3Cellipse cx='400' cy='120' rx='80' ry='20' fill='%23ffffff' opacity='0.2'/%3E%3Cellipse cx='600' cy='80' rx='50' ry='12' fill='%23ffffff' opacity='0.25'/%3E%3C/svg%3E")`
                            }}
                        />

                        {/* Header */}
                        <div className="relative z-10 p-4 sm:p-6 lg:p-8">
                            <div className="flex items-center justify-between">
                                <div className="text-white font-bold text-xl sm:text-2xl tracking-wide">MAC</div>
                                <button className="hidden sm:flex text-white/80 text-xs sm:text-sm border border-white/30 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 hover:bg-white/10 transition-all duration-200 items-center space-x-2">
                                    <span>Back to website</span>
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex-1 flex flex-col justify-end p-4 sm:p-6 lg:p-8 pb-8 sm:pb-10 lg:pb-12">
                            <div className="text-white">
                                <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 sm:mb-10 lg:mb-12">
                                    {step === 1 ? (
                                        <>Welcome Back,<br />Ready to Explore</>
                                    ) : (
                                        <>Secure Access,<br />Protected Moments</>
                                    )}
                                </h1>

                                {/* Pagination dots */}
                                <div className="flex justify-center space-x-2 mb-4">
                                    <div className={`w-6 sm:w-8 h-1 rounded-full ${step === 1 ? 'bg-white' : 'bg-white/30'}`}></div>
                                    <div className={`w-6 sm:w-8 h-1 rounded-full ${step === 2 ? 'bg-white' : 'bg-white/30'}`}></div>
                                    <div className="w-6 sm:w-8 h-1 bg-white/30 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full lg:w-1/2 bg-gray-900 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                        <div className="max-w-md w-full mx-auto">

                            {/* Step 1: Login Form */}
                            {step === 1 && (
                                <>
                                    <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">Welcome back</h2>
                                    <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                                       Master admin login to access your dashboard
                                    </p>

                                    <div className="space-y-4 sm:space-y-5">
                                        {/* Email field */}
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Email"
                                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-3 sm:py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200 text-sm sm:text-base"
                                            />
                                        </div>

                                        {/* Password field */}
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                placeholder="Enter your password"
                                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-3 sm:py-3.5 pr-10 sm:pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200 text-sm sm:text-base"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                            >
                                                {showPassword ? <EyeOff size={18} className="sm:w-5 sm:h-5" /> : <Eye size={18} className="sm:w-5 sm:h-5" />}
                                            </button>
                                        </div>

                                        {/* Remember me and Forgot password */}
                                        <div className="flex items-center justify-between py-2">
                                            <div className="flex items-center space-x-3">
                                                <div className="relative flex-shrink-0">
                                                    <input
                                                        type="checkbox"
                                                        id="remember"
                                                        checked={rememberMe}
                                                        onChange={(e) => setRememberMe(e.target.checked)}
                                                        className="sr-only"
                                                    />
                                                    <div
                                                        onClick={() => setRememberMe(!rememberMe)}
                                                        className={`w-4 h-4 sm:w-5 sm:h-5 border-2 rounded cursor-pointer flex items-center justify-center transition-all duration-200 ${rememberMe ? 'bg-white border-white' : 'border-gray-500 hover:border-gray-400'
                                                            }`}
                                                    >
                                                        {rememberMe && (
                                                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                </div>
                                                <label htmlFor="remember" className="text-gray-300 text-xs sm:text-sm cursor-pointer">
                                                    Remember me
                                                </label>
                                            </div>
                                            <button className="text-white hover:underline text-xs sm:text-sm">
                                                Forgot password?
                                            </button>
                                        </div>

                                        {/* Login button */}
                                        <button
                                            type="button"
                                            onClick={handleLogin}
                                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 sm:py-3.5 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 mt-6 text-sm sm:text-base"
                                        >
                                            Sign in
                                        </button>

                                        {/* Divider */}
                                        <div className="relative my-6 sm:my-8">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-gray-700"></div>
                                            </div>
                                            <div className="relative flex justify-center text-xs sm:text-sm">
                                                <span className="px-4 bg-gray-900 text-gray-500">Login with 2FA</span>
                                            </div>
                                        </div>
                                        <p className='text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base'> Secured 2FA login for master admin</p>
                                    </div>
                                </>
                            )}

                            {/* Step 2: 2FA Verification */}
                            {step === 2 && (
                                <>
                                    <div className="flex items-center mb-4 sm:mb-6">
                                        <button
                                            onClick={goBack}
                                            className="text-gray-400 hover:text-white mr-3 transition-colors"
                                        >
                                            <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
                                        </button>
                                        <div>
                                            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">Verification</h2>
                                            <p className="text-gray-400 text-sm sm:text-base">Enter the code to complete sign in</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 sm:space-y-6">
                                        {/* Email notification message */}
                                        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                                <p className="text-purple-300 text-sm sm:text-base">
                                                    OTP has been sent to your email
                                                </p>
                                            </div>
                                            <p className="text-purple-200/70 text-xs sm:text-sm mt-1 ml-5">
                                                Check your inbox for the 6-digit verification code
                                            </p>
                                        </div>

                                        {/* Verification Code Input */}
                                        <div>
                                            <label className="text-gray-300 text-sm sm:text-base mb-2 block">
                                                Email Verification Code
                                            </label>
                                            <input
                                                type="text"
                                                name="verificationCode"
                                                value={formData.verificationCode}
                                                onChange={handleInputChange}
                                                placeholder="Enter 6-digit code"
                                                maxLength="6"
                                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-3 sm:py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200 text-center text-lg sm:text-xl font-mono tracking-widest"
                                            />
                                        </div>

                                        {/* Resend code */}
                                        <div className="text-center">
                                            <p className="text-gray-400 text-xs sm:text-sm mb-2">Didn't receive the code?</p>
                                            <button className="text-white hover:underline text-xs sm:text-sm">
                                                Resend code
                                            </button>
                                        </div>

                                        {/* Verify button */}
                                        <button
                                            type="button"
                                            onClick={handleVerification}
                                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 sm:py-3.5 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-sm sm:text-base"
                                        >
                                            Verify and Sign In
                                        </button>

                                        {/* Backup options */}
                                        <div className="text-center pt-4">
                                            <button className="text-gray-400 hover:text-white text-xs sm:text-sm underline">
                                                Use backup codes instead
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}