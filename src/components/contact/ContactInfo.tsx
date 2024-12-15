import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900">Address</h3>
            <div className="text-gray-600 mt-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.8392358798196!2d77.2698510755009!3d28.634579975663595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzA0LjUiTiA3N8KwMTYnMjAuNyJF!5e0!3m2!1sen!2sin!4v1728819634718!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mt-4 rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-600 mt-1">+91 99105 55872</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Mail className="h-6 w-6 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600 mt-1">gurmeetsingh@luxeauradesign.com</p>
          </div>
        </div>
      </div>

      {/* Office Hours */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>
        <div className="space-y-2">
          <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
          <p className="text-gray-600">Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}