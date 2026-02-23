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
  { id: 1, name: "Consultation", price: 150, studentPrice: 50 },
  { id: 2, name: "STI Treatment", price: 200, studentPrice: 50 },
  { id: 3, name: "HIV Care", price: 180, studentPrice: 50 },
  { id: 4, name: "Family Planning", price: 0, studentPrice: 0 },
  { id: 5, name: "Implanon Insertion", price: 0, studentPrice: 0 },
  { id: 6, name: "HIV PreP & PEP", price: 0, studentPrice: 0 },
  { id: 7, name: "Emergency Pills", price: 0, studentPrice: 0 },
  { id: 8, name: "Papsmear", price: 250, studentPrice: 250 },
  { id: 9, name: "Prostate Screening", price: 300, studentPrice: 300 },
  { id: 10, name: "Mental Health Counselling", price: 0, studentPrice: 0 },
  { id: 11, name: "Chronic Illness Management", price: 200, studentPrice: 50 },
  { id: 12, name: "Skin Care", price: 150, studentPrice: 50 },
  { id: 13, name: "Wound Care", price: 120, studentPrice: 50 },
  { id: 14, name: "Stitch Removal", price: 100, studentPrice: 50 },
  { id: 15, name: "Pregnancy Test", price: 80, studentPrice: 80 },
  { id: 16, name: "BP / Glucose Test", price: 50, studentPrice: 50 },
  { id: 17, name: "HIV Test", price: 0, studentPrice: 0 },
  { id: 18, name: "VitBco / B12 / C", price: 150, studentPrice: 150 },
  { id: 19, name: "Glutathione", price: 250, studentPrice: 250 },
  { id: 20, name: "Detox Drip", price: 200, studentPrice: 200 },
  { id: 21, name: "Glow Drip", price: 250, studentPrice: 250 },
  { id: 22, name: "Recovery Drip", price: 200, studentPrice: 200 },
  { id: 23, name: "Energy Drip", price: 200, studentPrice: 200 },
];

const BookAppointment = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isStudent, setIsStudent] = useState(false);

  const [medicalAidNumber, setMedicalAidNumber] = useState("");
  const [medicalAidOption, setMedicalAidOption] = useState("");
  const [mainMemberIdNo, setMainMemberIdNo] = useState("");
  const [medicalAidMainMember, setMedicalAidMainMember] = useState("");
  const [medicalAidName, setMedicalAidName] = useState("");

  const selectedServiceData = services.find((s) => s.name === selectedService);

  const finalPrice = useMemo(() => {
    if (!selectedServiceData) return 0;
    return isStudent ? selectedServiceData.studentPrice : selectedServiceData.price;
  }, [selectedServiceData, isStudent]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!fullName || !phone || !selectedService || !appointmentDate || !appointmentTime || !paymentMethod) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (paymentMethod === "medical-aid" && (!medicalAidNumber || !medicalAidName || !medicalAidOption || !medicalAidMainMember || !mainMemberIdNo)) {
      toast.error("Please fill in all medical aid fields");
      return;
    }

    // Store booking locally
    const bookings = JSON.parse(localStorage.getItem("dunwell_bookings") || "[]");
    bookings.push({
      fullName,
      phone,
      service: selectedService,
      date: appointmentDate,
      time: appointmentTime,
      paymentMethod,
      isStudent,
      price: finalPrice,
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem("dunwell_bookings", JSON.stringify(bookings));

    toast.success("✅ Appointment booked successfully! We'll confirm via phone.");
    navigate("/");
  };

  // Get today's date for min date
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-navy dark:bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="text-primary-foreground dark:text-foreground hover:bg-primary-foreground/10 dark:hover:bg-foreground/10 rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-heading font-bold text-primary-foreground dark:text-foreground">
                Book Appointment
              </h1>
              <p className="text-grey-mid dark:text-muted-foreground text-sm">
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
                    <Label>Full Name *</Label>
                    <Input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number *</Label>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 072 176 0247"
                      type="tel"
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
                          {s.name} {s.price > 0 ? `- R${s.price}` : "- FREE"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Preferred Date *</Label>
                    <Input
                      type="date"
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      min={today}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Time *</Label>
                    <Input
                      type="time"
                      value={appointmentTime}
                      onChange={(e) => setAppointmentTime(e.target.value)}
                      className="h-11"
                    />
                  </div>
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
                    Wits / University Student (eligible for discount — bring student card)
                  </Label>
                </div>

                {/* Payment */}
                <div className="space-y-2">
                  <Label>Payment Method *</Label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Choose payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="card">Card Payment</SelectItem>
                      <SelectItem value="medical-aid">Medical Aid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Medical Aid Fields */}
                {paymentMethod === "medical-aid" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted rounded-xl p-4"
                  >
                    <div className="md:col-span-2 space-y-2">
                      <Label>Medical Aid Name *</Label>
                      <Input value={medicalAidName} onChange={(e) => setMedicalAidName(e.target.value)} className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label>Medical Aid Number *</Label>
                      <Input value={medicalAidNumber} onChange={(e) => setMedicalAidNumber(e.target.value)} className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label>Medical Aid Option *</Label>
                      <Input value={medicalAidOption} onChange={(e) => setMedicalAidOption(e.target.value)} className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label>Main Member Name *</Label>
                      <Input value={medicalAidMainMember} onChange={(e) => setMedicalAidMainMember(e.target.value)} className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label>Main Member ID Number *</Label>
                      <Input value={mainMemberIdNo} onChange={(e) => setMainMemberIdNo(e.target.value)} className="h-11" />
                    </div>
                  </motion.div>
                )}

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 h-12 bg-gold hover:bg-gold-dark text-accent-foreground font-semibold rounded-xl gap-2"
                  >
                    <CalendarCheck className="w-5 h-5" />
                    Book Appointment
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
                  <span className="text-muted-foreground">Patient:</span>
                  <span className="font-medium">{fullName || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="font-medium">{phone || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service:</span>
                  <span className="font-medium">{selectedService || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-medium">{appointmentDate || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time:</span>
                  <span className="font-medium">{appointmentTime || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Student:</span>
                  <span className="font-medium">{isStudent ? "Yes ✅" : "No"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment:</span>
                  <span className="font-medium capitalize">{paymentMethod ? paymentMethod.replace("-", " ") : "-"}</span>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="font-heading font-bold">Total:</span>
                    <span className="text-3xl font-bold text-gold">
                      {finalPrice === 0 ? "FREE" : `R${finalPrice.toFixed(2)}`}
                    </span>
                  </div>
                  {isStudent && selectedServiceData && selectedServiceData.studentPrice < selectedServiceData.price && (
                    <p className="text-xs text-green-500 pt-2 flex items-center gap-1">
                      <GraduationCap className="w-3 h-3" />
                      Student discount applied!
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-border text-xs text-muted-foreground space-y-2">
                  <p>📞 We'll call to confirm your appointment</p>
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
