import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface AchievementsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const achievements = [
  {
    id: 1,
    title: "9th Regional Seminar - Guest Speaker",
    organization: "Women in Surveying",
    year: "2013",
    image: "/lovable-uploads/b169edce-9711-4c7f-8602-9bfe3eea93e6.png"
  },
  {
    id: 2,
    title: "Award of Appreciation and Recognition",
    organization: "Women-in-Surveying Osun State Branch",
    year: "2022",
    image: "/lovable-uploads/d6b75abf-ea9c-432a-9498-05910d445c03.png"
  },
  {
    id: 3,
    title: "Award of Honour",
    organization: "Nigerian Institution of Surveying and Geoinformatics Students (NISGS)",
    year: "2015",
    image: "/lovable-uploads/a46ab0f2-d55b-467c-be1f-4ab36fe55f8a.png"
  },
  {
    id: 4,
    title: "Pan-African Leadership Award for Excellence",
    organization: "African Students' Union Parliament",
    year: "2022",
    description: "Amazon of Nation Building",
    image: "/lovable-uploads/fc0caa00-c743-4c88-a262-814ef3f6e8f0.png"
  },
  {
    id: 5,
    title: "Gold Award of Appreciation",
    organization: "Women-in-Surveying",
    year: "2025",
    image: "/lovable-uploads/8b57c0fe-4c9d-44c0-a292-cb233dc285f4.png"
  },
  {
    id: 6,
    title: "Outstanding Development Achievement Award",
    organization: "Women-in-Surveying",
    year: "2023",
    image: "/lovable-uploads/132f1d29-63a7-4b65-b29d-346d348ea9bc.png"
  },
  {
    id: 7,
    title: "Award of Appreciation - Internal Auditor",
    organization: "Nigerian Institution of Surveyors",
    year: "2017-2019",
    image: "/lovable-uploads/31f90fa7-0534-4918-97df-806be4de7315.png"
  },
  {
    id: 8,
    title: "Distinguished Service Recognition",
    organization: "Student's Union Federal School of Surveying",
    year: "2015",
    image: "/lovable-uploads/56897962-818c-4aa4-927c-4729dfc03348.png"
  },
  {
    id: 9,
    title: "Award of Excellence",
    organization: "Coker Hall, Federal School of Surveying",
    year: "2019",
    image: "/lovable-uploads/78ea18eb-df53-4640-a6ba-0aeedf7841b6.png"
  },
  {
    id: 10,
    title: "Outstanding Lecture Award",
    organization: "Institution's MCPD Programme",
    year: "2019",
    image: "/lovable-uploads/a988cc30-30fa-4c52-b37a-1d3000cdbbc8.png"
  }
];

const AchievementsModal = ({ open, onOpenChange }: AchievementsModalProps) => {
  const [dbAwards, setDbAwards] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAwards = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('awards')
        .select('*')
        .order('year', { ascending: false });

      if (error) throw error;
      setDbAwards(data || []);
    } catch (error) {
      console.error('Error fetching awards:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      fetchAwards();
    }
  }, [open]);

  // Combine hardcoded achievements with database awards
  const allAwards = [...achievements, ...dbAwards.map(award => ({
    id: award.id,
    title: award.title,
    organization: award.organization,
    year: award.year,
    image: award.image_url,
    description: award.description
  }))];
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">Awards & Achievements</DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onOpenChange(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        {loading ? (
          <div className="flex justify-center py-8">
            <div>Loading awards...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {allAwards.map((achievement) => (
              <div 
                key={achievement.id}
                className="bg-card rounded-lg shadow-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {achievement.organization}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {achievement.year}
                  </p>
                  {achievement.description && (
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      {achievement.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AchievementsModal;