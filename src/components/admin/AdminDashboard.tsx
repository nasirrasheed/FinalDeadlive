import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Ghost, Calendar, Users, MessageCircle, Image, BarChart3, 
  Plus, Edit, Trash2, Eye, Download, LogOut 
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const stats = {
    totalEvents: 24,
    bookingsThisMonth: 156,
    totalMembers: 6,
    messagesThisWeek: 42
  };

  const recentBookings = [
    { id: 1, event: 'Warwick Castle After Dark', customer: 'John Smith', date: '2025-02-15', status: 'confirmed' },
    { id: 2, event: 'Pendle Hill Investigation', customer: 'Sarah Johnson', date: '2025-02-22', status: 'pending' },
    { id: 3, event: 'Tower of London Ghost Walk', customer: 'Mike Wilson', date: '2025-03-08', status: 'confirmed' },
    { id: 4, event: 'Abandoned Asylum Experience', customer: 'Emma Davis', date: '2025-03-01', status: 'confirmed' },
  ];

  const events = [
    { id: 1, title: 'Warwick Castle After Dark', date: '2025-02-15', price: 45, status: 'published', bookings: 14 },
    { id: 2, title: 'Pendle Hill Investigation', date: '2025-02-22', price: 38, status: 'published', bookings: 8 },
    { id: 3, title: 'Tower of London Ghost Walk', date: '2025-03-08', price: 48, status: 'published', bookings: 12 },
    { id: 4, title: 'Abandoned Asylum Experience', date: '2025-03-01', price: 52, status: 'draft', bookings: 0 },
  ];

  const teamMembers = [
    { id: 1, name: 'Dr. Margaret Blackwood', role: 'Lead Investigator', status: 'active' },
    { id: 2, name: 'James Whitmore', role: 'Technical Specialist', status: 'active' },
    { id: 3, name: 'Sarah Mitchell', role: 'Psychic Medium', status: 'active' },
    { id: 4, name: 'Thomas Crawford', role: 'Historical Researcher', status: 'active' },
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center space-x-3">
            <Calendar className="w-8 h-8 text-red-400" />
            <div>
              <div className="text-2xl font-bold text-white">{stats.totalEvents}</div>
              <div className="text-gray-400">Total Events</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-red-400" />
            <div>
              <div className="text-2xl font-bold text-white">{stats.bookingsThisMonth}</div>
              <div className="text-gray-400">Bookings This Month</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-red-400" />
            <div>
              <div className="text-2xl font-bold text-white">{stats.totalMembers}</div>
              <div className="text-gray-400">Team Members</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-8 h-8 text-red-400" />
            <div>
              <div className="text-2xl font-bold text-white">{stats.messagesThisWeek}</div>
              <div className="text-gray-400">Messages This Week</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-gothic font-bold text-white mb-4">Recent Bookings</h3>
          <div className="space-y-3">
            {recentBookings.map(booking => (
              <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-900 rounded">
                <div>
                  <div className="text-white font-semibold">{booking.customer}</div>
                  <div className="text-gray-400 text-sm">{booking.event}</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-300">{booking.date}</div>
                  <div className={`text-sm ${booking.status === 'confirmed' ? 'text-green-400' : 'text-yellow-400'}`}>
                    {booking.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-gothic font-bold text-white mb-4">Popular Events</h3>
          <div className="space-y-3">
            {events.slice(0, 4).map(event => (
              <div key={event.id} className="flex items-center justify-between p-3 bg-gray-900 rounded">
                <div>
                  <div className="text-white font-semibold">{event.title}</div>
                  <div className="text-gray-400 text-sm">{event.bookings} bookings</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-300">£{event.price}</div>
                  <div className={`text-sm ${event.status === 'published' ? 'text-green-400' : 'text-yellow-400'}`}>
                    {event.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-gothic font-bold text-white">Event Management</h2>
        <button className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
          <Plus className="w-4 h-4" />
          <span>New Event</span>
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-900">
            <tr>
              <th className="text-left p-4 text-gray-300">Event</th>
              <th className="text-left p-4 text-gray-300">Date</th>
              <th className="text-left p-4 text-gray-300">Price</th>
              <th className="text-left p-4 text-gray-300">Bookings</th>
              <th className="text-left p-4 text-gray-300">Status</th>
              <th className="text-left p-4 text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id} className="border-t border-gray-700">
                <td className="p-4 text-white">{event.title}</td>
                <td className="p-4 text-gray-300">{event.date}</td>
                <td className="p-4 text-gray-300">£{event.price}</td>
                <td className="p-4 text-gray-300">{event.bookings}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-sm ${
                    event.status === 'published' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
                  }`}>
                    {event.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <button className="p-1 text-gray-400 hover:text-white">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-white">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-400">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderBookings = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-gothic font-bold text-white">Booking Management</h2>
        <button className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
          <Download className="w-4 h-4" />
          <span>Export CSV</span>
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-900">
            <tr>
              <th className="text-left p-4 text-gray-300">Customer</th>
              <th className="text-left p-4 text-gray-300">Event</th>
              <th className="text-left p-4 text-gray-300">Date</th>
              <th className="text-left p-4 text-gray-300">Guests</th>
              <th className="text-left p-4 text-gray-300">Status</th>
              <th className="text-left p-4 text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map(booking => (
              <tr key={booking.id} className="border-t border-gray-700">
                <td className="p-4 text-white">{booking.customer}</td>
                <td className="p-4 text-gray-300">{booking.event}</td>
                <td className="p-4 text-gray-300">{booking.date}</td>
                <td className="p-4 text-gray-300">2</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-sm ${
                    booking.status === 'confirmed' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
                  }`}>
                    {booking.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <button className="p-1 text-gray-400 hover:text-white">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-white">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderTeam = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-gothic font-bold text-white">Team Management</h2>
        <button className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
          <Plus className="w-4 h-4" />
          <span>Add Member</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map(member => (
          <div key={member.id} className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-gray-400" />
              </div>
              <div className="flex space-x-2">
                <button className="p-1 text-gray-400 hover:text-white">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-1 text-gray-400 hover:text-red-400">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <h3 className="text-white font-semibold">{member.name}</h3>
            <p className="text-gray-400 text-sm">{member.role}</p>
            <div className="mt-3">
              <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">
                {member.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'bookings', label: 'Bookings', icon: Users },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'gallery', label: 'Gallery', icon: Image },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 min-h-screen p-6">
          <div className="flex items-center space-x-3 mb-8">
            <Ghost className="w-8 h-8 text-red-600" />
            <h1 className="text-xl font-gothic font-bold text-white">Admin Panel</h1>
          </div>

          <nav className="space-y-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300 ${
                  activeTab === item.id 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-300"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'events' && renderEvents()}
          {activeTab === 'bookings' && renderBookings()}
          {activeTab === 'team' && renderTeam()}
          {activeTab === 'gallery' && (
            <div className="text-center text-gray-400 py-20">
              <Image className="w-16 h-16 mx-auto mb-4" />
              <p>Gallery management coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;