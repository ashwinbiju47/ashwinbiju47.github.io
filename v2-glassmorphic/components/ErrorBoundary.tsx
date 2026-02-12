import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  handleGoHome = () => {
    // Hard reset to the root of the site, clearing any hash or state
    window.location.href = window.location.origin;
  }

  handleRefresh = () => {
    // Force a complete reload from the server
    window.location.reload();
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-gray-100 dark:bg-[#0A0A0A] transition-colors duration-300">
            {/* Fallback Ambient Background */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-400/30 blur-[80px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-pink-400/30 blur-[80px] animate-blob" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="glass-panel p-10 md:p-16 rounded-[2.5rem] text-center max-w-2xl w-full border border-white/20 shadow-2xl relative z-10 backdrop-blur-xl bg-white/40 dark:bg-black/40">
                <div className="mb-8 flex justify-center">
                    <div className="w-24 h-24 bg-red-100/50 dark:bg-red-900/20 rounded-full flex items-center justify-center border border-red-200/50 dark:border-red-500/30 shadow-lg shadow-red-500/10">
                        <i className='bx bx-error text-5xl text-red-500 dark:text-red-400'></i>
                    </div>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-800 dark:text-white mb-6">
                    Oops! Something went wrong.
                </h1>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-light">
                    We encountered an unexpected error while loading this section. Please try refreshing the page or return home.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                        onClick={this.handleRefresh} 
                        className="px-8 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <i className='bx bx-refresh text-xl'></i> Refresh Page
                    </button>
                    <button 
                        onClick={this.handleGoHome}
                        className="px-8 py-4 glass-btn text-gray-800 dark:text-white rounded-xl font-semibold hover:bg-white/40 dark:hover:bg-white/10 transition-all border border-white/20 hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <i className='bx bx-home-alt text-xl'></i> Go Home
                    </button>
                </div>
            </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;