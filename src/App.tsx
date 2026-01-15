import { useState } from 'react';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { Authentication } from './components/Authentication';
import { Dashboard } from './components/Dashboard';
import { Directory } from './components/Directory';
import { CampLocations } from './components/CampLocations';
import { Footer } from './components/Footer';
import { AccessibilityBar } from './components/AccessibilityBar';

// Placeholder components for remaining pages
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { 
  Calendar, 
  Heart, 
  Users, 
  MapPin, 
  Clock, 
  Phone, 
  Video, 
  MessageCircle,
  CreditCard,
  Settings,
  BarChart3,
  Plus
} from 'lucide-react';
import { ImageWithFallback } from './components/pages/ImageWithFallback';

// Campaigns Component
function Campaigns({ setCurrentPage, language }: { setCurrentPage: (page: string) => void, language: string }) {
  const campaigns = [
    {
      id: 1,
      title: language === 'en' ? 'Blood Donation Drive' : 'रक्तदान अभियान',
      date: '2025-09-16',
      time: '09:00 AM',
      location: language === 'en' ? 'Community Center' : 'सामुदायिक केंद्र',
      description: language === 'en' ? 'Help save lives by donating blood' : 'रक्तदान करके जीवन बचाने में सहायता करें',
      participants: 45,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcJRXcAP1eakca1F-aRcK28amcnuFSDPO-Q&s'
    },
    {
      id: 2,
      title: language === 'en' ? 'Free Health Checkup' : 'मुफ्त स्वास्थ्य जांच',
      date: '2025-09-18',
      time: '10:00 AM',
      location: language === 'en' ? 'Village Health Center' : 'ग्राम स्वास्थ्य केंद्र',
      description: language === 'en' ? 'Comprehensive health screening for all ages' : 'सभी उम्र के लिए व्यापक स्वास्थ्य जांच',
      participants: 23,
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202503/india--adult--advice--social-service--government--professional-111602451-16x9_0.jpg?VersionId=eBpBmxW2OQs5jaj_GF0kfb0a6zKehbdL&size=690:388'
    },
    {
      id: 3,
      title: language === 'en' ? 'COVID Vaccination' : 'कोविड टीकाकरण',
      date: '2025-09-20',
      time: '08:30 AM',
      location: language === 'en' ? 'District Hospital' : 'जिला अस्पताल',
      description: language === 'en' ? 'Free COVID vaccination for eligible candidates' : 'योग्य उम्मीदवारों के लिए मुफ्त कोविड टीकाकरण',
      participants: 67,
      image: 'https://images.unsplash.com/photo-1608243499710-5ebece89a37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2FtcGFpZ24lMjB2YWNjaW5hdGlvbnxlbnwxfHx8fDE3NTc4NTQzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {language === 'en' ? 'Health Campaigns & Events' : 'स्वास्थ्य अभियान और कार्यक्रम'}
          </h1>
          <p className="text-gray-600">
            {language === 'en' ? 'Join our community health initiatives' : 'हमारी सामुदायiक स्वास्थ्य पहल में शामिल हों'}
          </p>
          <div className="mt-4">
            <Button 
              onClick={() => setCurrentPage('locations')} 
              variant="outline"
              className="flex items-center"
            >
              <MapPin className="h-4 w-4 mr-2" />
              {language === 'en' ? 'Find Nearest Camp Locations' : 'निकटतम शिविर स्थान खोजें'}
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <ImageWithFallback
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{campaign.title}</CardTitle>
                <p className="text-gray-600 text-sm mb-4">{campaign.description}</p>
                
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{campaign.date} at {campaign.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{campaign.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{campaign.participants} {language === 'en' ? 'registered' : 'पंजीकृत'}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1">
                    {language === 'en' ? 'Register' : 'पंजीकरण'}
                  </Button>
                  <Button variant="outline">
                    {language === 'en' ? 'Share' : 'साझा करें'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// Consultation Component
function Consultation({ language }: { language: string }) {
  const [consultationType, setConsultationType] = useState('video');

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {language === 'en' ? 'Online Consultation' : 'ऑनलाइन परामर्श'}
          </h1>
          <p className="text-gray-600">
            {language === 'en' ? 'Connect with healthcare professionals from anywhere' : 'कहीं से भी स्वास्थ्य पेशेवरों से जुड़ें'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{language === 'en' ? 'Book Appointment' : 'अपॉइंटमेंट बुक करें'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'Consultation Type' : 'परामर्श प्रकार'}
                </label>
                <Select value={consultationType} onValueChange={setConsultationType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">
                      <div className="flex items-center">
                        <Video className="h-4 w-4 mr-2" />
                        {language === 'en' ? 'Video Call' : 'वीडियो कॉल'}
                      </div>
                    </SelectItem>
                    <SelectItem value="audio">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        {language === 'en' ? 'Voice Call' : 'वॉयस कॉल'}
                      </div>
                    </SelectItem>
                    <SelectItem value="chat">
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {language === 'en' ? 'Chat' : 'चैट'}
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'Preferred Date' : 'पसंदीदा तारीख'}
                </label>
                <Input type="date" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'Preferred Time' : 'पसंदीदा समय'}
                </label>
                <Input type="time" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'Describe your symptoms' : 'अपने लक्षणों का वर्णन करें'}
                </label>
                <Textarea 
                  placeholder={language === 'en' ? 'Please describe your health concerns...' : 'कृपया अपनी स्वास्थ्य चिंताओं का वर्णन करें...'}
                  rows={4}
                />
              </div>

              <Button className="w-full">
                {language === 'en' ? 'Book Consultation - ₹200' : 'परामर्श बुक करें - ₹200'}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{language === 'en' ? 'Emergency Contact' : 'आपातकालीन संपर्क'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <Phone className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'en' ? 'Emergency Helpline' : 'आपातकालीन हेल्पलाइन'}
                </h3>
                <p className="text-2xl font-bold text-red-600 mb-4">108</p>
                <Button variant="destructive" className="w-full">
                  {language === 'en' ? 'Call Emergency' : 'आपातकाल कॉल करें'}
                </Button>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">{language === 'en' ? 'Available 24/7' : '24/7 उपलब्ध'}</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {language === 'en' ? 'Medical emergencies' : 'चिकित्सा आपात स्थिति'}</li>
                  <li>• {language === 'en' ? 'Ambulance services' : 'एम्बुलेंस सेवाएं'}</li>
                  <li>• {language === 'en' ? 'Crisis counseling' : 'संकट परामर्श'}</li>
                  <li>• {language === 'en' ? 'Health advice' : 'स्वास्थ्य सलाह'}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Donation Component
function Donation({ language }: { language: string }) {
  const [donationAmount, setDonationAmount] = useState(500);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {language === 'en' ? 'Support Rural Healthcare' : 'ग्रामीण स्वास्थ्य सेवा का समर्थन करें'}
          </h1>
          <p className="text-gray-600">
            {language === 'en' ? 'Your contribution helps bring healthcare to underserved communities' : 'आपका योगदान वंचित समुदायों तक स्वास्थ्य सेवा पहुंचाने में मदद करता है'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2 text-red-500" />
                {language === 'en' ? 'Make a Donation' : 'दान करें'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-4">
                  {language === 'en' ? 'Select Amount (₹)' : 'राशि चुनें (₹)'}
                </label>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[100, 500, 1000, 2000, 5000, 10000].map((amount) => (
                    <Button
                      key={amount}
                      variant={donationAmount === amount ? "default" : "outline"}
                      onClick={() => setDonationAmount(amount)}
                      className="text-sm"
                    >
                      ₹{amount}
                    </Button>
                  ))}
                </div>
                <Input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(Number(e.target.value))}
                  placeholder={language === 'en' ? 'Custom amount' : 'कस्टम राशि'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'Donation Purpose' : 'दान का उद्देश्य'}
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={language === 'en' ? 'Select purpose' : 'उद्देश्य चुनें'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">
                      {language === 'en' ? 'General Healthcare' : 'सामान्य स्वास्थ्य सेवा'}
                    </SelectItem>
                    <SelectItem value="medicine">
                      {language === 'en' ? 'Medicine & Supplies' : 'दवा और आपूर्ति'}
                    </SelectItem>
                    <SelectItem value="equipment">
                      {language === 'en' ? 'Medical Equipment' : 'चिकित्सा उपकरण'}
                    </SelectItem>
                    <SelectItem value="campaigns">
                      {language === 'en' ? 'Health Campaigns' : 'स्वास्थ्य अभियान'}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium mb-2">
                  {language === 'en' ? 'Your Impact' : 'आपका प्रभाव'}
                </h4>
                <p className="text-sm text-gray-600">
                  ₹{donationAmount} {language === 'en' 
                    ? 'can provide medical care for 5 families in rural areas' 
                    : 'ग्रामीण क्षेत्रों में 5 परिवारों को चिकित्सा देखभाल प्रदान कर सकता है'}
                </p>
              </div>

              <Button className="w-full" size="lg">
                <CreditCard className="h-4 w-4 mr-2" />
                {language === 'en' ? `Donate ₹${donationAmount}` : `₹${donationAmount} दान करें`}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{language === 'en' ? 'Transparency Report' : 'पारदर्शिता रिपोर्ट'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">
                  {language === 'en' ? 'Funds Raised This Month' : 'इस महीने एकत्रित धन'}
                </h4>
                <p className="text-2xl font-bold text-green-600">₹2,45,000</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">{language === 'en' ? 'How Funds Are Used:' : 'धन का उपयोग कैसे किया जाता है:'}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{language === 'en' ? 'Medical supplies' : 'चिकित्सा आपूर्ति'}</span>
                    <span>40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === 'en' ? 'Doctor consultations' : 'डॉक्टर परामर्श'}</span>
                    <span>30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === 'en' ? 'Health campaigns' : 'स्वास्थ्य अभियान'}</span>
                    <span>20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === 'en' ? 'Administrative costs' : 'प्रशासनिक लागत'}</span>
                    <span>10%</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">{language === 'en' ? 'Recent Impact' : 'हालिया प्रभाव'}</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {language === 'en' ? '324 patients treated' : '324 मरीजों का इलाज'}</li>
                  <li>• {language === 'en' ? '15 health camps organized' : '15 स्वास्थ्य शिविर आयोजित'}</li>
                  <li>• {language === 'en' ? '1,200 vaccinations completed' : '1,200 टीकाकरण पूर्ण'}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Admin Panel Component
function AdminPanel({ language }: { language: string }) {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {language === 'en' ? 'Admin Dashboard' : 'प्रशासन डैशबोर्ड'}
          </h1>
          <p className="text-gray-600">
            {language === 'en' ? 'Manage campaigns, users, and platform settings' : 'अभियान, उपयोगकर्ता और प्लेटफॉर्म सेटिंग्स प्रबंधित करें'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {language === 'en' ? 'Total Users' : 'कुल उपयोगकर्ता'}
                <Users className="h-5 w-5" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">2,845</p>
              <p className="text-sm text-green-600">+12% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {language === 'en' ? 'Active Campaigns' : 'सक्रिय अभियान'}
                <Calendar className="h-5 w-5" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">8</p>
              <p className="text-sm text-blue-600">3 starting this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {language === 'en' ? 'Consultations' : 'परामर्श'}
                <Phone className="h-5 w-5" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">156</p>
              <p className="text-sm text-green-600">This week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {language === 'en' ? 'Donations' : 'दान'}
                <Heart className="h-5 w-5" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">₹2.4L</p>
              <p className="text-sm text-green-600">This month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {language === 'en' ? 'Campaign Management' : 'अभियान प्रबंधन'}
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  {language === 'en' ? 'New Campaign' : 'नया अभियान'}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <h4 className="font-medium">{language === 'en' ? 'Blood Donation Drive' : 'रक्तदान अभियान'}</h4>
                    <p className="text-sm text-gray-500">Sept 16, 2025</p>
                  </div>
                  <Badge>Active</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <h4 className="font-medium">{language === 'en' ? 'Health Checkup Camp' : 'स्वास्थ्य जांच शिविर'}</h4>
                    <p className="text-sm text-gray-500">Sept 18, 2025</p>
                  </div>
                  <Badge variant="secondary">Upcoming</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                {language === 'en' ? 'Analytics' : 'विश्लेषण'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{language === 'en' ? 'User Engagement' : 'उपयोगकर्ता सहभागिता'}</span>
                    <span>78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{language === 'en' ? 'Campaign Success' : 'अभियान सफलता'}</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{language === 'en' ? 'Platform Usage' : 'प्लेटफॉर्म उपयोग'}</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState('en');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage setCurrentPage={setCurrentPage} language={language} />;
      case 'auth':
        return <Authentication setUser={setUser} setCurrentPage={setCurrentPage} language={language} />;
      case 'dashboard':
        return <Dashboard user={user} setCurrentPage={setCurrentPage} language={language} />;
      case 'directory':
        return <Directory setCurrentPage={setCurrentPage} language={language} />;
      case 'campaigns':
        return <Campaigns setCurrentPage={setCurrentPage} language={language} />;
      case 'locations':
        return <CampLocations setCurrentPage={setCurrentPage} language={language} />;
      case 'consultation':
        return <Consultation language={language} />;
      case 'donation':
        return <Donation language={language} />;
      case 'admin':
        return <AdminPanel language={language} />;
      default:
        return <LandingPage setCurrentPage={setCurrentPage} language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        user={user} 
        setUser={setUser}
        language={language}
        setLanguage={setLanguage}
      />
      
      <main>
        {renderCurrentPage()}
      </main>
      
      <Footer 
        setCurrentPage={setCurrentPage} 
        language={language} 
      />
      
      <AccessibilityBar 
        language={language} 
        setLanguage={setLanguage} 
      />
    </div>
  );
}