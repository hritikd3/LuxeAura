import PageHero from '../components/common/PageHero';
import Journey from '../components/about/Journey';
import Team from '../components/about/Team';

export default function About() {
  return (
    <div className="pt-1">
      <PageHero 
        title="About Us"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
      />

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                To create innovative and sustainable architectural solutions that transform spaces
                and enhance the lives of our clients. We strive to push the boundaries of design
                while maintaining the highest standards of quality and functionality.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg">
                To be the leading architectural firm known for creating timeless designs that
                harmoniously blend with their environment and contribute positively to society's
                development and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Journey />
      <Team />
    </div>
  );
}