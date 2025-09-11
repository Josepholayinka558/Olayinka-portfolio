import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AwardForm } from "@/components/AwardForm";
import { AwardsList } from "@/components/AwardsList";

const AdminAwards = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const ok = localStorage.getItem("adminAuthenticated") === "true";
    if (!ok) {
      navigate("/admin-login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Manage Awards</h1>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              localStorage.removeItem("adminAuthenticated");
              navigate("/admin-login");
            }}
          >
            Sign Out
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Add New Award</CardTitle>
            </CardHeader>
            <CardContent>
              <AwardForm onSuccess={() => { /* list updates via realtime */ }} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Awards</CardTitle>
            </CardHeader>
            <CardContent>
              <AwardsList />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminAwards; 