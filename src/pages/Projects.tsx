export default function Projects() {
  const projects = [
    {
      title: 'Modern Villa',
      category: 'Residential',
      location: 'Beverly Hills, CA',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
      description: 'Luxury villa with contemporary design and sustainable features.'
    },
    {
      title: 'Urban Office Complex',
      category: 'Commercial',
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
      description: 'Modern office space designed for productivity and collaboration.'
    },
    {
      title: 'Eco Resort',
      category: 'Hospitality',
      location: 'Malibu, CA',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80',
      description: 'Sustainable resort that harmonizes with its natural surroundings.'
    },
    {
      title: 'City Museum',
      category: 'Cultural',
      location: 'Chicago, IL',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80',
      description: 'Cultural landmark featuring innovative architectural elements.'
    },
    {
      title: 'Waterfront Apartments',
      category: 'Residential',
      location: 'Miami, FL',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80',
      description: 'Luxury apartments with stunning ocean views and modern amenities.'
    },
    {
      title: 'Tech Campus',
      category: 'Commercial',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80',
      description: 'State-of-the-art campus designed for leading tech companies.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
          alt="Our Projects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Our Projects</h1>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.location}</p>
                  <p className="text-gray-700 mt-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}