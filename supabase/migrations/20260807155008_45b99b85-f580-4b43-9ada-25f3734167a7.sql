-- CREATE TABLE public.contacts
CREATE TABLE public.contacts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    company text,
    email text NOT NULL,
    phone text,
    service text,
    budget text,
    timeline text,
    message text,
    created_at timestamptz DEFAULT now()
);

-- CREATE TABLE public.enquiries
CREATE TABLE public.enquiries (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organization text NOT NULL,
    industry text,
    contact_person text NOT NULL,
    designation text,
    email text NOT NULL,
    phone text,
    challenge text,
    services text,
    outcome text,
    budget text,
    timeline text,
    requirements text,
    created_at timestamptz DEFAULT now()
);

-- CREATE TABLE public.user_roles (for admin access)
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    UNIQUE (user_id, role)
);

-- GRANTs
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contacts TO authenticated;
GRANT INSERT ON public.contacts TO anon;
GRANT ALL ON public.contacts TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.enquiries TO authenticated;
GRANT INSERT ON public.enquiries TO anon;
GRANT ALL ON public.enquiries TO service_role;

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

-- RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Anyone can insert contacts" ON public.contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can view all contacts" ON public.contacts FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin')
);

CREATE POLICY "Anyone can insert enquiries" ON public.enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can view all enquiries" ON public.enquiries FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin')
);

-- Security Definer Function
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    from public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;
