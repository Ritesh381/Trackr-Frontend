import React from 'react'

function Settings() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
  <h2 className="text-2xl font-bold mb-4 text-blue-700">Settings</h2>

  <section className="mb-6">
    <h3 className="text-lg font-semibold mb-2">Account Info</h3>
    <p>Email: <span className="text-gray-700">user@example.com</span></p>
    <button className="text-blue-500 hover:underline mt-1">Change Password</button>
  </section>
  
  <section>
    <h3 className="text-lg font-semibold mb-2">Notifications</h3>
    <label className="flex items-center">
      <input type="checkbox" className="mr-2" />
      Deadline Reminders
    </label>
  </section>
</div>

  )
}

export default Settings