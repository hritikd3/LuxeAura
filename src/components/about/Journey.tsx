import { Building2, Award, Trophy } from 'lucide-react';

const milestones = [
  {
    year: '2000',
    title: 'Establishment',
    description: 'LuxeAura Design Co. was founded in Delhi, committed to blending creativity with luxury in architectural designs.',
    icon: Building2
  },
  {
    year: '2005',
    title: 'Recognition',
    description: 'By 2005, LuxeAura gained recognition for innovative and high-quality designs, setting new standards in the industry.',
    icon: Award
  },
  {
    year: '2019',
    title: 'Industry Leader',
    description: 'In 2019, LuxeAura emerged as an industry leader, renowned for superlative construction and redefining luxury living.',
    icon: Trophy
  }
];

export default function Journey() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Our Journey</h2>
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <milestone.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                </div>
                <p className="text-gray-600 text-lg">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}