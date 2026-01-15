import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Heart, Users, Calendar, Phone, Shield, Globe } from "lucide-react";
import { ImageWithFallback } from "./pages/ImageWithFallback";

interface LandingPageProps {
  setCurrentPage: (page: string) => void;
  language: string;
}

export function LandingPage({ setCurrentPage, language }: LandingPageProps) {
  const content = {
    en: {
      hero: {
        title: "Connecting Rural Communities to Quality Healthcare",
        subtitle: "Bridging the gap between villages and medical care through digital innovation",
        primaryCTA: "Get Started",
        secondaryCTA: "Book Consultation"
      },
      quickAccess: {
        title: "Quick Access",
        register: "Register / Login",
        consult: "Book Consultation",
        campaigns: "View Health Campaigns"
      },
      features: {
        title: "Our Services",
        directory: {
          title: "Hospital & Doctor Directory",
          description: "Find verified healthcare providers in your area"
        },
        consultation: {
          title: "Online Consultation",
          description: "Connect with doctors through chat, call, or video"
        },
        campaigns: {
          title: "Health Campaigns",
          description: "Join vaccination drives, health checkups, and awareness programs"
        },
        support: {
          title: "24/7 Support",
          description: "Emergency contact and continuous healthcare assistance"
        },
        multilingual: {
          title: "Multilingual Support",
          description: "Available in English, Hindi, and local dialects"
        },
        accessibility: {
          title: "Accessible Design",
          description: "Built for all users including persons with disabilities"
        }
      }
    },
    hi: {
      hero: {
        title: "गुणवत्तापूर्ण स्वास्थ्य सेवा से जोड़ते ग्रामीण समुदाय",
        subtitle: "डिजिटल नवाचार के माध्यम से गांवों और चिकित्सा देखभाल के बीच की दूरी को पाटना",
        primaryCTA: "शुरू करें",
        secondaryCTA: "परामर्श बुक करें"
      },
      quickAccess: {
        title: "त्वरित पहुंच",
        register: "पंजीकरण / लॉगिन",
        consult: "परामर्श बुक करें",
        campaigns: "स्वास्थ्य अभियान देखें"
      },
      features: {
        title: "हमारी सेवाएं",
        directory: {
          title: "अस्पताल और डॉक्टर निर्देशिका",
          description: "अपने क्षेत्र में सत्यापित स्वास्थ्य सेवा प्रदाता खोजें"
        },
        consultation: {
          title: "ऑनलाइन परामर्श",
          description: "चैट, कॉल या वीडियो के माध्यम से डॉक्टरों से जुड़ें"
        },
        campaigns: {
          title: "स्वास्थ्य अभियान",
          description: "टीकाकरण अभियान, स्वास्थ्य जांच और जागरूकता कार्यक्रमों में शामिल हों"
        },
        support: {
          title: "24/7 सहायता",
          description: "आपातकालीन संपर्क और निरंतर स्वास्थ्य सहायता"
        },
        multilingual: {
          title: "बहुभाषी सहायता",
          description: "अंग्रेजी, हिंदी और स्थानीय बोलियों में उपलब्ध"
        },
        accessibility: {
          title: "सुलभ डिज़ाइन",
          description: "विकलांग व्यक्तियों सहित सभी उपयोगकर्ताओं के लिए बनाया गया"
        }
      }
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t.hero.subtitle}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setCurrentPage('auth')}
                  className="text-lg px-8 py-3"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  {t.hero.primaryCTA}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setCurrentPage('consultation')}
                  className="text-lg px-8 py-3"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {t.hero.secondaryCTA}
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1742106850780-fbcc50b1ef5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGhlYWx0aGNhcmUlMjBtZWRpY2FsJTIwdmlsbGFnZXxlbnwxfHx8fDE3NTc4NTQzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Rural healthcare"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.quickAccess.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setCurrentPage('auth')}>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>{t.quickAccess.register}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={() => setCurrentPage('auth')}>
                  {language === 'en' ? 'Start Here' : 'यहाँ शुरू करें'}
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setCurrentPage('consultation')}>
              <CardHeader className="text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>{t.quickAccess.consult}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={() => setCurrentPage('consultation')}>
                  {language === 'en' ? 'Book Now' : 'अभी बुक करें'}
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setCurrentPage('campaigns')}>
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>{t.quickAccess.campaigns}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={() => setCurrentPage('campaigns')}>
                  {language === 'en' ? 'View All' : 'सभी देखें'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.features.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{t.features.directory.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.features.directory.description}</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{t.features.consultation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.features.consultation.description}</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{t.features.campaigns.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.features.campaigns.description}</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{t.features.support.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.features.support.description}</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{t.features.multilingual.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.features.multilingual.description}</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{t.features.accessibility.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.features.accessibility.description}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}