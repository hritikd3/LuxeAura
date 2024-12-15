import { Building2, PaintBucket, LayoutGrid, Box, Ruler, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Architectural Design',
      description: 'Comprehensive architectural design services for residential and commercial projects.'
    },
    {
      icon: PaintBucket,
      title: 'Interior Design',
      description: 'Creative interior solutions that blend functionality with aesthetic appeal.'
    },
    {
      icon: LayoutGrid,
      title: 'Urban Planning',
      description: 'Strategic urban development planning for sustainable communities.'
    },
    {
      icon: Box,
      title: '3D Visualization',
      description: 'Photorealistic 3D renderings and virtual walkthroughs of your project.'
    },
    {
      icon: Ruler,
      title: 'Construction Planning',
      description: 'Detailed construction documentation and project management.'
    },
    {
      icon: Wrench,
      title: 'Renovation',
      description: 'Expert renovation and restoration services for existing structures.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
          alt="Our Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Our Services</h1>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <service.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Initial meeting to understand your vision and requirements.'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Creating detailed designs and 3D visualizations.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Refining designs and preparing construction documents.'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Project execution and quality assurance.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-block bg-blue-600 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to discuss how we can bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}