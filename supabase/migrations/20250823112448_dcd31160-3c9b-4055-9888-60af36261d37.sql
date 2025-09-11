-- Create awards table
CREATE TABLE public.awards (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  organization TEXT NOT NULL,
  year INTEGER NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.awards ENABLE ROW LEVEL SECURITY;

-- Create policies - only authenticated users can manage awards
CREATE POLICY "Anyone can view awards" 
ON public.awards 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can insert awards" 
ON public.awards 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update awards" 
ON public.awards 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete awards" 
ON public.awards 
FOR DELETE 
TO authenticated
USING (true);

-- Create storage bucket for award images
INSERT INTO storage.buckets (id, name, public) VALUES ('award-images', 'award-images', true);

-- Create storage policies
CREATE POLICY "Anyone can view award images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'award-images');

CREATE POLICY "Authenticated users can upload award images" 
ON storage.objects 
FOR INSERT 
TO authenticated
WITH CHECK (bucket_id = 'award-images');

CREATE POLICY "Authenticated users can update award images" 
ON storage.objects 
FOR UPDATE 
TO authenticated
USING (bucket_id = 'award-images');

CREATE POLICY "Authenticated users can delete award images" 
ON storage.objects 
FOR DELETE 
TO authenticated
USING (bucket_id = 'award-images');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_awards_updated_at
BEFORE UPDATE ON public.awards
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();