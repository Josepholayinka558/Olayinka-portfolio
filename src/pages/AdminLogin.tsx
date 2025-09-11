import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const expectedEmail = import.meta.env.VITE_ADMIN_EMAIL as string | undefined;
  const expectedPassword = import.meta.env.VITE_ADMIN_CODE as string | undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!expectedEmail || !expectedPassword) {
        throw new Error("Admin credentials not configured. Set VITE_ADMIN_EMAIL and VITE_ADMIN_CODE in your .env");
      }
      if (email.trim().toLowerCase() !== expectedEmail.trim().toLowerCase()) {
        throw new Error("Invalid email");
      }
      if (password.trim() !== expectedPassword) {
        throw new Error("Invalid password");
      }
      localStorage.setItem("adminAuthenticated", "true");
      toast({ title: "Access granted", description: "Welcome to admin area" });
      navigate("/admin-awards");
    } catch (err: any) {
      toast({ title: "Error", description: err.message ?? "Login failed", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>Enter email and password to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Checking..." : "Sign in"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin; 