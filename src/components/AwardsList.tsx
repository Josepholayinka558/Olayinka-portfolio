import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Trash2 } from 'lucide-react';

interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description?: string;
  image_url?: string;
}

export const AwardsList = () => {
  const [awards, setAwards] = useState<Award[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchAwards = async () => {
    try {
      const { data, error } = await supabase
        .from('awards')
        .select('*')
        .order('year', { ascending: false });

      if (error) throw error;
      setAwards(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteAward = async (id: string) => {
    try {
      const { error } = await supabase
        .from('awards')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setAwards(awards.filter(award => award.id !== id));
      toast({
        title: "Success",
        description: "Award deleted successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchAwards();

    // Listen for real-time updates
    const channel = supabase
      .channel('awards-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'awards'
        },
        () => {
          fetchAwards();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (loading) {
    return <div>Loading awards...</div>;
  }

  if (awards.length === 0) {
    return <div className="text-muted-foreground">No awards added yet.</div>;
  }

  return (
    <div className="space-y-4">
      {awards.map((award) => (
        <div key={award.id} className="border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              {award.image_url && (
                <img
                  src={award.image_url}
                  alt={award.title}
                  className="w-16 h-16 object-cover rounded mb-2"
                />
              )}
              <h3 className="font-semibold">{award.title}</h3>
              <p className="text-sm text-muted-foreground">{award.organization}</p>
              <p className="text-sm text-muted-foreground">{award.year}</p>
              {award.description && (
                <p className="text-sm mt-2">{award.description}</p>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => deleteAward(award.id)}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};