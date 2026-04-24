import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image_url: string;
  linkedin: string;
  created_at: string;
}

export interface Partner {
  id: string;
  name: string;
  logo_url: string;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  category?: string;
  image_url: string;
  created_at: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  image_url: string;
  client?: string;
  industry: string;
  region: string;
  size?: string;
  icon_name?: string;
  situation: string;
  solution: string;
  deliverables: string[];
  impact: string[];
  created_at: string;
}

export interface EGuide {
  id: string;
  title: string;
  description: string;
  content?: string;
  image_url: string;
  download_url: string;
  created_at: string;
}

export interface Playbook {
  id: string;
  title: string;
  description: string;
  content?: string;
  image_url: string;
  download_url: string;
  created_at: string;
}

interface DataContextType {
  team: TeamMember[];
  partners: Partner[];
  blogs: BlogPost[];
  caseStudies: CaseStudy[];
  eguides: EGuide[];
  playbooks: Playbook[];
  loading: boolean;
  refreshData: () => Promise<void>;
}

const DataContext = createContext<DataContextType>({
  team: [],
  partners: [],
  blogs: [],
  caseStudies: [],
  eguides: [],
  playbooks: [],
  loading: true,
  refreshData: async () => {},
});

export const useData = () => useContext(DataContext);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [eguides, setEguides] = useState<EGuide[]>([]);
  const [playbooks, setPlaybooks] = useState<Playbook[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAllData = async () => {
    setLoading(true);
    
    try {
      const [
        { data: teamData },
        { data: partnersData },
        { data: blogsData },
        { data: caseStudiesData },
        { data: eguidesData },
        { data: playbooksData }
      ] = await Promise.all([
        supabase.from('team').select('*').order('created_at', { ascending: true }),
        supabase.from('partners').select('*').order('created_at', { ascending: true }),
        supabase.from('blog_posts').select('*').order('created_at', { ascending: false }),
        supabase.from('case_studies').select('*').order('created_at', { ascending: false }),
        supabase.from('eguides').select('*').order('created_at', { ascending: false }),
        supabase.from('playbooks').select('*').order('created_at', { ascending: false }),
      ]);

      setTeam(teamData || []);
      setPartners(partnersData || []);
      setBlogs(blogsData || []);
      setCaseStudies(caseStudiesData || []);
      setEguides(eguidesData || []);
      setPlaybooks(playbooksData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <DataContext.Provider value={{
      team,
      partners,
      blogs,
      caseStudies,
      eguides,
      playbooks,
      loading,
      refreshData: fetchAllData
    }}>
      {children}
    </DataContext.Provider>
  );
};
