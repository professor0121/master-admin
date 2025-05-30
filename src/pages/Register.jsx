import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AMUSignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [agreeTerms, setAgreeTerms] = useState(true);
    const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
                <div className="text-white font-bold text-xl sm:text-2xl tracking-wide">AMU</div>
                <button className="hidden sm:flex text-white/80 text-xs sm:text-sm border border-white/30 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 hover:bg-white/10 transition-all duration-200 items-center space-x-2">
                  <span>Back to website</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content - using flex-1 to take remaining space and justify-end to push content to bottom */}
            <div className="relative z-10 flex-1 flex flex-col justify-end p-4 sm:p-6 lg:p-8 pb-8 sm:pb-10 lg:pb-12">
              <div className="text-white">
                <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 sm:mb-10 lg:mb-12">
                  Capturing Moments,<br />
                  Creating Memories
                </h1>
                
                {/* Pagination dots - with better spacing and visibility */}
                <div className="flex justify-center space-x-2 mb-4">
                  <div className="w-6 sm:w-8 h-1 bg-white/30 rounded-full"></div>
                  <div className="w-6 sm:w-8 h-1 bg-white/30 rounded-full"></div>
                  <div className="w-6 sm:w-8 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 bg-gray-900 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">Create an account</h2>
              <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                Already have an account? <span className="text-white hover:underline cursor-pointer"
                onClick={()=>navigate("/login")}>Log in</span>
              </p>

              <div className="space-y-4 sm:space-y-5">
                {/* Name fields */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-3 sm:py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200 text-sm sm:text-base"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-3 sm:py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200 text-sm sm:text-base"
                    />
                  </div>
                </div>

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

                {/* Terms checkbox */}
                <div className="flex items-start space-x-3 py-2">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="sr-only"
                    />
                    <div 
                      onClick={() => setAgreeTerms(!agreeTerms)}
                      className={`w-4 h-4 sm:w-5 sm:h-5 border-2 rounded cursor-pointer flex items-center justify-center transition-all duration-200 ${
                        agreeTerms ? 'bg-white border-white' : 'border-gray-500 hover:border-gray-400'
                      }`}
                    >
                      {agreeTerms && (
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <label htmlFor="terms" className="text-gray-300 text-xs sm:text-sm cursor-pointer leading-relaxed">
                    I agree to the <span className="text-white hover:underline cursor-pointer">Terms & Conditions</span>
                  </label>
                </div>

                {/* Create account button */}
                <button
                  type="button"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 sm:py-3.5 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 mt-6 text-sm sm:text-base"
                >
                  Create account
                </button>

                {/* Divider */}
                <div className="relative my-6 sm:my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-xs sm:text-sm">
                    <span className="px-4 bg-gray-900 text-gray-500">Or register with</span>
                  </div>
                </div>

                {/* Social buttons */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    type="button"
                    className="flex-1 bg-gray-800 border border-gray-700 hover:bg-gray-750 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center justify-center space-x-3 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-gray-800 border border-gray-700 hover:bg-gray-750 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center justify-center space-x-3 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span>Apple</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}