import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
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
  
  loadingStates: {
    team: boolean;
    partners: boolean;
    blogs: boolean;
    caseStudies: boolean;
    eguides: boolean;
    playbooks: boolean;
  };
  fetchedStates: {
    team: boolean;
    partners: boolean;
    blogs: boolean;
    caseStudies: boolean;
    eguides: boolean;
    playbooks: boolean;
  };
  fetchTeam: (force?: boolean) => Promise<void>;
  fetchPartners: (force?: boolean) => Promise<void>;
  fetchBlogs: (force?: boolean) => Promise<void>;
  fetchCaseStudies: (force?: boolean) => Promise<void>;
  fetchEGuides: (force?: boolean) => Promise<void>;
  fetchPlaybooks: (force?: boolean) => Promise<void>;
}

const DataContext = createContext<DataContextType>({
  team: [],
  partners: [],
  blogs: [],
  caseStudies: [],
  eguides: [],
  playbooks: [],
  loading: false,
  refreshData: async () => {},
  loadingStates: { team: false, partners: false, blogs: false, caseStudies: false, eguides: false, playbooks: false },
  fetchedStates: { team: false, partners: false, blogs: false, caseStudies: false, eguides: false, playbooks: false },
  fetchTeam: async () => {},
  fetchPartners: async () => {},
  fetchBlogs: async () => {},
  fetchCaseStudies: async () => {},
  fetchEGuides: async () => {},
  fetchPlaybooks: async () => {},
});

export const useData = () => useContext(DataContext);

// Individual hooks for components
export const useTeam = () => {
  const { team, loadingStates, fetchedStates, fetchTeam } = useContext(DataContext);
  useEffect(() => {
    if (!fetchedStates.team && !loadingStates.team) {
      fetchTeam();
    }
  }, [fetchedStates.team, loadingStates.team, fetchTeam]);
  return { team, loading: loadingStates.team };
};

export const usePartners = () => {
  const { partners, loadingStates, fetchedStates, fetchPartners } = useContext(DataContext);
  useEffect(() => {
    if (!fetchedStates.partners && !loadingStates.partners) {
      fetchPartners();
    }
  }, [fetchedStates.partners, loadingStates.partners, fetchPartners]);
  return { partners, loading: loadingStates.partners };
};

export const useBlogs = () => {
  const { blogs, loadingStates, fetchedStates, fetchBlogs } = useContext(DataContext);
  useEffect(() => {
    if (!fetchedStates.blogs && !loadingStates.blogs) {
      fetchBlogs();
    }
  }, [fetchedStates.blogs, loadingStates.blogs, fetchBlogs]);
  return { blogs, loading: loadingStates.blogs };
};

export const useCaseStudies = () => {
  const { caseStudies, loadingStates, fetchedStates, fetchCaseStudies } = useContext(DataContext);
  useEffect(() => {
    if (!fetchedStates.caseStudies && !loadingStates.caseStudies) {
      fetchCaseStudies();
    }
  }, [fetchedStates.caseStudies, loadingStates.caseStudies, fetchCaseStudies]);
  return { caseStudies, loading: loadingStates.caseStudies };
};

export const useEGuides = () => {
  const { eguides, loadingStates, fetchedStates, fetchEGuides } = useContext(DataContext);
  useEffect(() => {
    if (!fetchedStates.eguides && !loadingStates.eguides) {
      fetchEGuides();
    }
  }, [fetchedStates.eguides, loadingStates.eguides, fetchEGuides]);
  return { eguides, loading: loadingStates.eguides };
};

export const usePlaybooks = () => {
  const { playbooks, loadingStates, fetchedStates, fetchPlaybooks } = useContext(DataContext);
  useEffect(() => {
    if (!fetchedStates.playbooks && !loadingStates.playbooks) {
      fetchPlaybooks();
    }
  }, [fetchedStates.playbooks, loadingStates.playbooks, fetchPlaybooks]);
  return { playbooks, loading: loadingStates.playbooks };
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [eguides, setEguides] = useState<EGuide[]>([]);
  const [playbooks, setPlaybooks] = useState<Playbook[]>([]);

  const [loadingStates, setLoadingStates] = useState({
    team: false,
    partners: false,
    blogs: false,
    caseStudies: false,
    eguides: false,
    playbooks: false,
  });

  const [fetchedStates, setFetchedStates] = useState({
    team: false,
    partners: false,
    blogs: false,
    caseStudies: false,
    eguides: false,
    playbooks: false,
  });

  const fetchTeam = useCallback(async (force = false) => {
    if (fetchedStates.team && !force) return;
    setLoadingStates(prev => ({ ...prev, team: true }));
    try {
      const { data } = await supabase.from('team').select('*').order('created_at', { ascending: true });
      setTeam(data || []);
      setFetchedStates(prev => ({ ...prev, team: true }));
    } catch (error) {
      console.error("Error fetching team:", error);
    } finally {
      setLoadingStates(prev => ({ ...prev, team: false }));
    }
  }, [fetchedStates.team]);

  const fetchPartners = useCallback(async (force = false) => {
    if (fetchedStates.partners && !force) return;
    setLoadingStates(prev => ({ ...prev, partners: true }));
    try {
      const { data } = await supabase.from('partners').select('*').order('created_at', { ascending: true });
      setPartners(data || []);
      setFetchedStates(prev => ({ ...prev, partners: true }));
    } catch (error) {
      console.error("Error fetching partners:", error);
    } finally {
      setLoadingStates(prev => ({ ...prev, partners: false }));
    }
  }, [fetchedStates.partners]);

  const fetchBlogs = useCallback(async (force = false) => {
    if (fetchedStates.blogs && !force) return;
    setLoadingStates(prev => ({ ...prev, blogs: true }));
    try {
      const { data } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
      setBlogs(data || []);
      setFetchedStates(prev => ({ ...prev, blogs: true }));
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoadingStates(prev => ({ ...prev, blogs: false }));
    }
  }, [fetchedStates.blogs]);

  const fetchCaseStudies = useCallback(async (force = false) => {
    if (fetchedStates.caseStudies && !force) return;
    setLoadingStates(prev => ({ ...prev, caseStudies: true }));
    try {
      const { data } = await supabase.from('case_studies').select('*').order('created_at', { ascending: false });
      setCaseStudies(data || []);
      setFetchedStates(prev => ({ ...prev, caseStudies: true }));
    } catch (error) {
      console.error("Error fetching case studies:", error);
    } finally {
      setLoadingStates(prev => ({ ...prev, caseStudies: false }));
    }
  }, [fetchedStates.caseStudies]);

  const fetchEGuides = useCallback(async (force = false) => {
    if (fetchedStates.eguides && !force) return;
    setLoadingStates(prev => ({ ...prev, eguides: true }));
    try {
      const { data } = await supabase.from('eguides').select('*').order('created_at', { ascending: false });
      setEguides(data || []);
      setFetchedStates(prev => ({ ...prev, eguides: true }));
    } catch (error) {
      console.error("Error fetching eguides:", error);
    } finally {
      setLoadingStates(prev => ({ ...prev, eguides: false }));
    }
  }, [fetchedStates.eguides]);

  const fetchPlaybooks = useCallback(async (force = false) => {
    if (fetchedStates.playbooks && !force) return;
    setLoadingStates(prev => ({ ...prev, playbooks: true }));
    try {
      const { data } = await supabase.from('playbooks').select('*').order('created_at', { ascending: false });
      setPlaybooks(data || []);
      setFetchedStates(prev => ({ ...prev, playbooks: true }));
    } catch (error) {
      console.error("Error fetching playbooks:", error);
    } finally {
      setLoadingStates(prev => ({ ...prev, playbooks: false }));
    }
  }, [fetchedStates.playbooks]);

  const refreshData = useCallback(async () => {
    const promises = [];
    if (fetchedStates.team) promises.push(fetchTeam(true));
    if (fetchedStates.partners) promises.push(fetchPartners(true));
    if (fetchedStates.blogs) promises.push(fetchBlogs(true));
    if (fetchedStates.caseStudies) promises.push(fetchCaseStudies(true));
    if (fetchedStates.eguides) promises.push(fetchEGuides(true));
    if (fetchedStates.playbooks) promises.push(fetchPlaybooks(true));
    await Promise.all(promises);
  }, [fetchedStates, fetchTeam, fetchPartners, fetchBlogs, fetchCaseStudies, fetchEGuides, fetchPlaybooks]);

  const loading = Object.values(loadingStates).some(Boolean);

  return (
    <DataContext.Provider value={{
      team,
      partners,
      blogs,
      caseStudies,
      eguides,
      playbooks,
      loading,
      refreshData,
      loadingStates,
      fetchedStates,
      fetchTeam,
      fetchPartners,
      fetchBlogs,
      fetchCaseStudies,
      fetchEGuides,
      fetchPlaybooks
    }}>
      {children}
    </DataContext.Provider>
  );
};

