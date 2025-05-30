import React from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
    const handleGoHome = () => {
        console.log('Redirecting to homepage');
    };

    const handleGoBack = () => {
        console.log('Going back to previous page');
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
            {/* Mountain Landscape Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='sky' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='70%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23553c9a;stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='mountain1' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23553c9a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%232d1b69;stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='mountain2' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23764ba2;stop-opacity:0.8' /%3E%3Cstop offset='100%25' style='stop-color:%23553c9a;stop-opacity:0.8' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23sky)'/%3E%3Cpath d='M0,400 C200,300 400,350 600,280 L800,320 L800,600 L0,600 Z' fill='url(%23mountain1)'/%3E%3Cpath d='M0,450 C150,380 300,420 500,370 L800,400 L800,600 L0,600 Z' fill='url(%23mountain2)'/%3E%3Cpath d='M0,500 C100,480 200,490 400,470 L800,480 L800,600 L0,600 Z' fill='%23553c9a' opacity='0.6'/%3E%3Cellipse cx='200' cy='100' rx='60' ry='15' fill='%23ffffff' opacity='0.3'/%3E%3Cellipse cx='400' cy='120' rx='80' ry='20' fill='%23ffffff' opacity='0.2'/%3E%3Cellipse cx='600' cy='80' rx='50' ry='12' fill='%23ffffff' opacity='0.25'/%3E%3C/svg%3E")`
                }}
            />

            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 p-6">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <div className="text-white font-bold text-2xl tracking-wide">MAC</div>
                    <button 
                        onClick={handleGoHome}
                        className="text-white/80 text-sm border border-white/30 rounded-full px-5 py-2 hover:bg-white/10 transition-all duration-200 flex items-center space-x-2"
                    >
                        <span>Back to website</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
                {/* 404 Number */}
                <div className="text-9xl md:text-[12rem] font-bold text-white/30 leading-none mb-8">
                    404
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    Page Not Found
                </h1>
                
                <p className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                    <button
                        onClick={handleGoHome}
                        className="w-full sm:w-auto bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-white/30 flex items-center justify-center space-x-2"
                    >
                        <Home size={20} />
                        <span>Go Home</span>
                    </button>

                    <button
                        onClick={handleGoBack}
                        className="w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-white/20 flex items-center justify-center space-x-2"
                    >
                        <ArrowLeft size={20} />
                        <span>Go Back</span>
                    </button>
                </div>

                {/* Error Code */}
                <div className="mt-16 text-white/60 text-sm">
                    Error 404 - Page Not Found
                </div>
            </div>
        </div>
    );
}