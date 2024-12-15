import { Mail } from 'lucide-react';

const team = [
  {
    name: 'Ar. Gurmeet Singh',
    role: 'Founder & CEO',
    email: 'gurmeetsingh@luxeauradesign.com',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80'
  },
  {
    name: 'Gaganpreet Singh',
    role: 'Manager',
    email: 'gagan@luxeauradesign.com',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <a href={`mailto:${member.email}`} className="hover:text-blue-600">
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}