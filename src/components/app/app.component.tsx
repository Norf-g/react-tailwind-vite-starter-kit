import React from 'react'
import logo from '../../assets/images/logo.svg'

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="text-center">
      <header className="mb-8">
        <img src={logo} className="h-32 w-32 mx-auto animate-spin" alt="logo" />
        <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-2">
          React TypeScript Tailwind Starter
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Edit <code className="bg-gray-200 px-2 py-1 rounded text-sm">src/components/app/app.component.tsx</code> and save to reload.
        </p>
        <a
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </div>
)

export default App
