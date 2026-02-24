import { useState, useMemo, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowLeft, CalendarCheck, GraduationCap } from "lucide-react";

const services = [
  { id: 1, name: "Consultation (incl meds)", price: 250, discount: 50 },
  { id: 2, name: "Family Planning", price: 150, discount: 50 },
  { id: 3, name: "Implanon Insertion", price: 300, discount: 50 },
  { id: 4, name: "Implanon Removal", price: 350, discount: 50 },
  { id: 5, name: "Pregnancy Test", price: 50, discount: 50 },
  { id: 6, name: "HIV Testing", price: 100, discount: 50 },
  { id: 7, name: "HIV PrEP/PEP", price: 350, discount: 50 },
  { id: 8, name: "HIV Care (Excl labs)", price: 350, discount: 50 },
  { id: 9, name: "Chronic Illness", price: 300, discount: 50 },
  { id: 10, name: "STI Management", price: 300, discount: 50 },
  { id: 11, name: "Acne Care", price: 250, discount: 50 },
  { id: 12, name: "Papsmear / PSA", price: 250, discount: 50 },
  { id: 13, name: "BP / HGT Check", price: 50, discount: 50 },
  { id: 14, name: "Vita Shots (Bco/C/B12/Magnesium)", price: 50, discount: null },
  { id: 15, name: "Glutathione Shot", price: 200, discount: null },
  { id: 16, name: "Glow Drip", price: 500, discount: null },
  { id: 17, name: "Recovery Drip", price: 400, discount: null },
  { id: 18, name: "Energy Drip", price: 300, discount: null },
  { id: 19, name: "Hangover Drip", price: 350, discount: null },
];

const BookAppointment = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [isStudent, setIsStudent] = useState(false);

  const selectedServiceData = services.find((s) => s.name === selectedService);

  const finalPrice = useMemo(() => {
    if (!selectedServiceData) return 0;
    if (isStudent && selectedServiceData.discount !== null) {
      return selectedServiceData.discount;
    }
    return selectedServiceData.price;
  }, [selectedServiceData, isStudent]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!firstName || !surname || !email || !dateOfBirth || !selectedService || !appointmentDate) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Build WhatsApp message
    const fullName = `${firstName} ${surname}`;
    const priceText = finalPrice === 0 ? "FREE" : `R${finalPrice.toFixed(2)}`;
    const studentText = isStudent ? "Yes ✅" : "No";

    const message = `📋 *NEW APPOINTMENT BOOKING*
━━━━━━━━━━━━━━━━━━━━━

👤 *Patient Details*
• Name: ${fullName}
• Email: ${email}
• Date of Birth: ${dateOfBirth}
• Student: ${studentText}

🏥 *Appointment Details*
• Service: ${selectedService}
• Preferred Date: ${appointmentDate}
• Price: ${priceText}

━━━━━━━━━━━━━━━━━━━━━
📍 Dunwell Youth Priority Clinic
38 De Beer Street, Braamfontein`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/27721760247?text=${encodedMessage}`;

    // Store booking locally as backup
    const bookings = JSON.parse(localStorage.getItem("dunwell_bookings") || "[]");
    bookings.push({
      firstName,
      surname,
      email,
      dateOfBirth,
      service: selectedService,
      date: appointmentDate,
      isStudent,
      price: finalPrice,
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem("dunwell_bookings", JSON.stringify(bookings));

    toast.success("✅ Redirecting to WhatsApp to confirm your booking...");

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-navy border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="text-primary-foreground hover:bg-primary-foreground/10 rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-heading font-bold text-primary-foreground">
                Book Appointment
              </h1>
              <p className="text-grey-mid text-sm">
                Schedule your visit to Dunwell Youth Priority Clinic
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {/* Form */}
          <Card className="lg:col-span-2 border-border shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading">Appointment Details</CardTitle>
              <CardDescription>Fill in all required fields below</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Name *</Label>
                    <Input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter your first name"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Surname *</Label>
                    <Input
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      placeholder="Enter your surname"
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Email *</Label>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      type="email"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Date of Birth *</Label>
                    <Input
                      type="date"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      className="h-11"
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <Label>Service *</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s.id} value={s.name}>
                          {s.name} — R{s.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Appointment Date */}
                <div className="space-y-2">
                  <Label>Preferred Appointment Date *</Label>
                  <Input
                    type="date"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    min={today}
                    className="h-11"
                  />
                </div>

                {/* Student Discount */}
                <div className="flex items-center gap-3 bg-muted rounded-xl p-4">
                  <input
                    type="checkbox"
                    id="student"
                    checked={isStudent}
                    onChange={(e) => setIsStudent(e.target.checked)}
                    className="h-5 w-5 rounded accent-gold"
                  />
                  <Label htmlFor="student" className="flex items-center gap-2 cursor-pointer">
                    <GraduationCap className="w-5 h-5 text-gold" />
                    University Student (eligible for R50 discount on clinical services)
                  </Label>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 h-12 bg-gold hover:bg-gold-dark text-accent-foreground font-semibold rounded-xl gap-2"
                  >
                    <CalendarCheck className="w-5 h-5" />
                    Book via WhatsApp
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/")}
                    className="flex-1 h-12 rounded-xl"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-border shadow-sm sticky top-24">
              <CardHeader>
                <CardTitle className="font-heading">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium">{firstName && surname ? `${firstName} ${surname}` : "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium">{email || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date of Birth:</span>
                  <span className="font-medium">{dateOfBirth || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service:</span>
                  <span className="font-medium">{selectedService || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Appointment Date:</span>
                  <span className="font-medium">{appointmentDate || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Student:</span>
                  <span className="font-medium">{isStudent ? "Yes ✅" : "No"}</span>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="font-heading font-bold">Total:</span>
                    <span className="text-3xl font-bold text-gold">
                      {finalPrice === 0 ? "FREE" : `R${finalPrice.toFixed(2)}`}
                    </span>
                  </div>
                  {isStudent && selectedServiceData && selectedServiceData.discount !== null && selectedServiceData.discount < selectedServiceData.price && (
                    <p className="text-xs text-green-500 pt-2 flex items-center gap-1">
                      <GraduationCap className="w-3 h-3" />
                      Student discount applied! (R{selectedServiceData.discount})
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-border text-xs text-muted-foreground space-y-2">
                  <p>📱 Booking will be sent via WhatsApp</p>
                  <p>🎓 Remember to bring your student card if applicable</p>
                  <p>📍 38 De Beer Street, Braamfontein</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookAppointment;
