function About() {
  return (
    <div className="min-h-full py-10 flex items-center justify-center p-4">
      <div className="p-8 text-center max-w-md w-full">
        <svg
          className="mx-auto h-16 w-16 text-[var(--accent-color)] mb-4 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4v8m0-4a2 2 0 100 4m-4 8h8m-4-8v4m-6 0h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <h1 className="text-3xl font-bold text-white mb-2">Work in Progress</h1>
        <p className="text-white mb-6">
          We are currently working on this page. Please check back soon for updates!
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-[var(--accent-color)] h-2.5 rounded-full animate-pulse" style={{ width: '75%' }}></div>
        </div>
        <p className="text-sm text-zinc-300 mt-4">Thank you for your patience.</p>
      </div>
    </div>
  );
}

export default About