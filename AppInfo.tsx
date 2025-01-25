import React from 'react'

export default function AppInfo() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-green-800 mb-6">About Plant AI</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium text-green-700 mb-2">Plant Recognition</h3>
          <p className="text-gray-600">
            Upload a photo or take a picture of any plant to instantly identify it and get detailed information about its care requirements.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium text-green-700 mb-2">Care Information</h3>
          <p className="text-gray-600">
            Get comprehensive care instructions, including watering schedules, light requirements, and potential toxicity warnings.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium text-green-700 mb-2">Virtual Garden</h3>
          <p className="text-gray-600">
            Keep track of all your plants in one place. Monitor watering schedules and maintain a digital record of your garden.
          </p>
        </div>
      </div>
    </div>
  )
}