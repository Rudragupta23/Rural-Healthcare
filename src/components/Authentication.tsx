import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Alert, AlertDescription } from "./ui/alert";
import { Eye, EyeOff, User, Mail, Phone, MapPin } from "lucide-react";

interface AuthenticationProps {
  setUser: (user: any) => void;
  setCurrentPage: (page: string) => void;
  language: string;
}

export function Authentication({ setUser, setCurrentPage, language }: AuthenticationProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'patient',
    location: ''
  });
  const [errors, setErrors] = useState<string[]>([]);

  const content = {
    en: {
      title: "Welcome to RuralHealth",
      subtitle: "Access quality healthcare services",
      login: "Login",
      register: "Register",
      forgotPassword: "Forgot Password?",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      password: "Password",
      confirmPassword: "Confirm Password",
      location: "Location/Village",
      role: "I am a...",
      patient: "Patient/Villager",
      doctor: "Doctor",
      hospital: "Hospital Staff",
      admin: "Administrator",
      loginBtn: "Sign In",
      registerBtn: "Create Account",
      switchToRegister: "Don't have an account? Sign up",
      switchToLogin: "Already have an account? Sign in",
      accessibility: "Accessibility Options",
      guestAccess: "Continue as Guest"
    },
    hi: {
      title: "ग्रामीण स्वास्थ्य में आपका स्वागत है",
      subtitle: "गुणवत्तापूर्ण स्वास्थ्य सेवाओं तक पहुंच",
      login: "लॉगिन",
      register: "पंजीकरण",
      forgotPassword: "पासवर्ड भूल गए?",
      name: "पूरा नाम",
      email: "ईमेल पता",
      phone: "फोन नंबर",
      password: "पासवर्ड",
      confirmPassword: "पासवर्ड की पुष्टि करें",
      location: "स्थान/गांव",
      role: "मैं हूँ...",
      patient: "मरीज/ग्रामीण",
      doctor: "डॉक्टर",
      hospital: "अस्पताल कर्मचारी",
      admin: "प्रशासक",
      loginBtn: "साइन इन करें",
      registerBtn: "खाता बनाएं",
      switchToRegister: "खाता नहीं है? साइन अप करें",
      switchToLogin: "पहले से खाता है? साइन इन करें",
      accessibility: "पहुंच विकल्प",
      guestAccess: "अतिथि के रूप में जारी रखें"
    }
  };

  const t = content[language as keyof typeof content];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors([]);
  };

  const validateForm = (isLogin: boolean) => {
    const newErrors: string[] = [];
    
    if (!isLogin) {
      if (!formData.name.trim()) newErrors.push(language === 'en' ? 'Name is required' : 'नाम आवश्यक है');
      if (!formData.phone.trim()) newErrors.push(language === 'en' ? 'Phone is required' : 'फोन आवश्यक है');
      if (formData.password !== formData.confirmPassword) {
        newErrors.push(language === 'en' ? 'Passwords do not match' : 'पासवर्ड मेल नहीं खाते');
      }
    }
    
    if (!formData.email.trim()) newErrors.push(language === 'en' ? 'Email is required' : 'ईमेल आवश्यक है');
    if (!formData.password.trim()) newErrors.push(language === 'en' ? 'Password is required' : 'पासवर्ड आवश्यक है');
    
    return newErrors;
  };

  const handleSubmit = (isLogin: boolean) => {
    const validationErrors = validateForm(isLogin);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Mock authentication - in real app, this would be an API call
    const user = {
      id: Date.now(),
      name: formData.name || 'User',
      email: formData.email,
      role: formData.role,
      phone: formData.phone,
      location: formData.location
    };

    setUser(user);
    setCurrentPage('dashboard');
  };

  const handleGuestAccess = () => {
    const guestUser = {
      id: 'guest',
      name: language === 'en' ? 'Guest User' : 'अतिथि उपयोगकर्ता',
      email: 'guest@example.com',
      role: 'patient',
      phone: '',
      location: ''
    };
    setUser(guestUser);
    setCurrentPage('dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <Card>
          <CardHeader>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">{t.login}</TabsTrigger>
                <TabsTrigger value="register">{t.register}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4">
                <CardTitle>{t.login}</CardTitle>
                <CardDescription>
                  {language === 'en' ? 'Enter your credentials to access your account' : 'अपने खाते तक पहुंचने के लिए अपनी साख दर्ज करें'}
                </CardDescription>
              </TabsContent>
              
              <TabsContent value="register" className="space-y-4">
                <CardTitle>{t.register}</CardTitle>
                <CardDescription>
                  {language === 'en' ? 'Create a new account to get started' : 'शुरुआत करने के लिए एक नया खाता बनाएं'}
                </CardDescription>
              </TabsContent>
            </Tabs>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              {errors.length > 0 && (
                <Alert className="mb-4 border-destructive">
                  <AlertDescription>
                    <ul className="list-disc list-inside space-y-1">
                      {errors.map((error, index) => (
                        <li key={index} className="text-sm">{error}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}

              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">{t.email}</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="login-email"
                      type="email"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={language === 'en' ? 'your@email.com' : 'आपका@ईमेल.कॉम'}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password">{t.password}</Label>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      className="pr-10"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      placeholder={language === 'en' ? 'Enter your password' : 'अपना पासवर्ड दर्ज करें'}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <Button onClick={() => handleSubmit(true)} className="w-full">
                  {t.loginBtn}
                </Button>

                <div className="text-center">
                  <Button variant="link" className="text-sm">
                    {t.forgotPassword}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="register" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name">{t.name}</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="register-name"
                      className="pl-10"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder={language === 'en' ? 'Your full name' : 'आपका पूरा नाम'}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email">{t.email}</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="register-email"
                      type="email"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={language === 'en' ? 'your@email.com' : 'आपका@ईमेल.कॉम'}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-phone">{t.phone}</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="register-phone"
                      type="tel"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder={language === 'en' ? '+91 9876543210' : '+91 9876543210'}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-location">{t.location}</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="register-location"
                      className="pl-10"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder={language === 'en' ? 'Your village/city' : 'आपका गांव/शहर'}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-role">{t.role}</Label>
                  <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="patient">{t.patient}</SelectItem>
                      <SelectItem value="doctor">{t.doctor}</SelectItem>
                      <SelectItem value="hospital">{t.hospital}</SelectItem>
                      <SelectItem value="admin">{t.admin}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password">{t.password}</Label>
                  <Input
                    id="register-password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder={language === 'en' ? 'Create a password' : 'एक पासवर्ड बनाएं'}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-confirm-password">{t.confirmPassword}</Label>
                  <Input
                    id="register-confirm-password"
                    type={showPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder={language === 'en' ? 'Confirm your password' : 'अपने पासवर्ड की पुष्टि करें'}
                  />
                </div>

                <Button onClick={() => handleSubmit(false)} className="w-full">
                  {t.registerBtn}
                </Button>
              </TabsContent>
            </Tabs>

            <div className="mt-6 pt-4 border-t border-border">
              <Button 
                variant="outline" 
                onClick={handleGuestAccess}
                className="w-full"
              >
                {t.guestAccess}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}