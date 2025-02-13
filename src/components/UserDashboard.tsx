import { Book, Clock, User } from "lucide-react"

export default function UserDashboard() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          My <span className="text-blue-600">Dashboard</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Book className="w-8 h-8 text-blue-600 mr-4" />
              <h3 className="text-xl font-semibold">Borrowed Books</h3>
            </div>
            <p className="text-3xl font-bold">5</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-blue-600 mr-4" />
              <h3 className="text-xl font-semibold">Due Soon</h3>
            </div>
            <p className="text-3xl font-bold">2</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <User className="w-8 h-8 text-blue-600 mr-4" />
              <h3 className="text-xl font-semibold">Account Status</h3>
            </div>
            <p className="text-xl font-semibold text-green-600">Active</p>
          </div>
        </div>
      </div>
    </section>
  )
}

