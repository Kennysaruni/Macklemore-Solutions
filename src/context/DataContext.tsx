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

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // e.g. Full-time, Part-time, Contract, Internship
  experience_level: string; // e.g. Student / Intern, Entry-level, Mid-level, Senior, Lead
  salary_range?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits?: string[];
  is_active: boolean;
  created_at: string;
}

interface DataContextType {
  team: TeamMember[];
  partners: Partner[];
  blogs: BlogPost[];
  caseStudies: CaseStudy[];
  eguides: EGuide[];
  playbooks: Playbook[];
  jobs: JobOpening[];
  loading: boolean;
  refreshData: () => Promise<void>;
  
  loadingStates: {
    team: boolean;
    partners: boolean;
    blogs: boolean;
    caseStudies: boolean;
    eguides: boolean;
    playbooks: boolean;
    jobs: boolean;
  };
  fetchedStates: {
    team: boolean;
    partners: boolean;
    blogs: boolean;
    caseStudies: boolean;
    eguides: boolean;
    playbooks: boolean;
    jobs: boolean;
  };
  fetchTeam: (force?: boolean) => Promise<void>;
  fetchPartners: (force?: boolean) => Promise<void>;
  fetchBlogs: (force?: boolean) => Promise<void>;
  fetchCaseStudies: (force?: boolean) => Promise<void>;
  fetchEGuides: (force?: boolean) => Promise<void>;
  fetchPlaybooks: (force?: boolean) => Promise<void>;
  fetchJobs: (force?: boolean) => Promise<void>;
  addJob: (job: Omit<JobOpening, 'id' | 'created_at'>) => Promise<{ success: boolean; error?: string; usedStorage?: 'supabase' | 'local' }>;
  updateJob: (id: string, updates: Partial<JobOpening>) => Promise<{ success: boolean; error?: string }>;
  deleteJob: (id: string) => Promise<{ success: boolean; error?: string }>;
}

const DataContext = createContext<DataContextType>({
  team: [],
  partners: [],
  blogs: [],
  caseStudies: [],
  eguides: [],
  playbooks: [],
  jobs: [],
  loading: false,
  refreshData: async () => {},
  loadingStates: { team: false, partners: false, blogs: false, caseStudies: false, eguides: false, playbooks: false, jobs: false },
  fetchedStates: { team: false, partners: false, blogs: false, caseStudies: false, eguides: false, playbooks: false, jobs: false },
  fetchTeam: async () => {},
  fetchPartners: async () => {},
  fetchBlogs: async () => {},
  fetchCaseStudies: async () => {},
  fetchEGuides: async () => {},
  fetchPlaybooks: async () => {},
  fetchJobs: async () => {},
  addJob: async () => ({ success: false }),
  updateJob: async () => ({ success: false }),
  deleteJob: async () => ({ success: false }),
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

export const useJobs = () => {
  const { jobs, loadingStates, fetchedStates, fetchJobs, addJob, updateJob, deleteJob } = useContext(DataContext);
  useEffect(() => {
    if (!fetchedStates.jobs && !loadingStates.jobs) {
      fetchJobs();
    }
  }, [fetchedStates.jobs, loadingStates.jobs, fetchJobs]);
  return { jobs, loading: loadingStates.jobs, fetchJobs, addJob, updateJob, deleteJob };
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [eguides, setEguides] = useState<EGuide[]>([]);
  const [playbooks, setPlaybooks] = useState<Playbook[]>([]);
  const [jobs, setJobs] = useState<JobOpening[]>([]);

  const [loadingStates, setLoadingStates] = useState({
    team: false,
    partners: false,
    blogs: false,
    caseStudies: false,
    eguides: false,
    playbooks: false,
    jobs: false,
  });

  const [fetchedStates, setFetchedStates] = useState({
    team: false,
    partners: false,
    blogs: false,
    caseStudies: false,
    eguides: false,
    playbooks: false,
    jobs: false,
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

  const fetchJobs = useCallback(async (force = false) => {
    if (fetchedStates.jobs && !force) return;
    setLoadingStates(prev => ({ ...prev, jobs: true }));
    try {
      // 1. Attempt to fetch from Supabase
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        const parsedJobs: JobOpening[] = data.map((item: any) => ({
          ...item,
          responsibilities: Array.isArray(item.responsibilities) ? item.responsibilities : (typeof item.responsibilities === 'string' ? JSON.parse(item.responsibilities) : []),
          requirements: Array.isArray(item.requirements) ? item.requirements : (typeof item.requirements === 'string' ? JSON.parse(item.requirements) : []),
          benefits: Array.isArray(item.benefits) ? item.benefits : (typeof item.benefits === 'string' ? JSON.parse(item.benefits) : []),
          is_active: item.is_active ?? true
        }));
        setJobs(parsedJobs);
        try {
          localStorage.setItem('macklemore_jobs', JSON.stringify(parsedJobs));
        } catch (e) {
          // ignore storage quota issues
        }
      } else {
        // Fallback to local storage if Supabase table is not populated or doesn't exist
        const local = localStorage.getItem('macklemore_jobs');
        if (local) {
          try {
            setJobs(JSON.parse(local));
          } catch {
            setJobs([]);
          }
        } else if (!error && data) {
          setJobs([]);
        }
      }
      setFetchedStates(prev => ({ ...prev, jobs: true }));
    } catch (error) {
      console.warn("Could not fetch jobs from Supabase, loading from local storage:", error);
      const local = localStorage.getItem('macklemore_jobs');
      if (local) {
        try {
          setJobs(JSON.parse(local));
        } catch {
          setJobs([]);
        }
      }
      setFetchedStates(prev => ({ ...prev, jobs: true }));
    } finally {
      setLoadingStates(prev => ({ ...prev, jobs: false }));
    }
  }, [fetchedStates.jobs]);

  const addJob = useCallback(async (jobData: Omit<JobOpening, 'id' | 'created_at'>) => {
    const newId = (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : `job-${Date.now()}`;
    const now = new Date().toISOString();
    const newJob: JobOpening = {
      ...jobData,
      id: newId,
      created_at: now
    };

    let usedStorage: 'supabase' | 'local' = 'local';
    let supabaseSuccess = false;

    try {
      const { data, error } = await supabase.from('jobs').insert([
        {
          title: jobData.title,
          department: jobData.department,
          location: jobData.location,
          type: jobData.type,
          experience_level: jobData.experience_level,
          salary_range: jobData.salary_range || null,
          description: jobData.description,
          responsibilities: jobData.responsibilities,
          requirements: jobData.requirements,
          benefits: jobData.benefits || [],
          is_active: jobData.is_active ?? true
        }
      ]).select();

      if (!error && data && data.length > 0) {
        supabaseSuccess = true;
        usedStorage = 'supabase';
        const insertedJob: JobOpening = {
          ...data[0],
          responsibilities: Array.isArray(data[0].responsibilities) ? data[0].responsibilities : [],
          requirements: Array.isArray(data[0].requirements) ? data[0].requirements : [],
          benefits: Array.isArray(data[0].benefits) ? data[0].benefits : []
        };
        setJobs(prev => {
          const updated = [insertedJob, ...prev.filter(j => j.id !== insertedJob.id)];
          try {
            localStorage.setItem('macklemore_jobs', JSON.stringify(updated));
          } catch {}
          return updated;
        });
      }
    } catch (err) {
      console.warn("Could not insert job to Supabase, falling back to local storage:", err);
    }

    if (!supabaseSuccess) {
      // Local storage persistence
      setJobs(prev => {
        const updated = [newJob, ...prev.filter(j => j.id !== newJob.id)];
        try {
          localStorage.setItem('macklemore_jobs', JSON.stringify(updated));
        } catch {}
        return updated;
      });
    }

    return { success: true, usedStorage };
  }, []);

  const updateJob = useCallback(async (id: string, updates: Partial<JobOpening>) => {
    try {
      await supabase
        .from('jobs')
        .update(updates)
        .eq('id', id);
    } catch (err) {
      console.warn("Could not update job in Supabase:", err);
    }

    setJobs(prev => {
      const updated = prev.map(job => job.id === id ? { ...job, ...updates } : job);
      try {
        localStorage.setItem('macklemore_jobs', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    return { success: true };
  }, []);

  const deleteJob = useCallback(async (id: string) => {
    try {
      await supabase.from('jobs').delete().eq('id', id);
    } catch (err) {
      console.warn("Could not delete job in Supabase:", err);
    }

    setJobs(prev => {
      const updated = prev.filter(job => job.id !== id);
      try {
        localStorage.setItem('macklemore_jobs', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    return { success: true };
  }, []);

  const refreshData = useCallback(async () => {
    const promises = [];
    if (fetchedStates.team) promises.push(fetchTeam(true));
    if (fetchedStates.partners) promises.push(fetchPartners(true));
    if (fetchedStates.blogs) promises.push(fetchBlogs(true));
    if (fetchedStates.caseStudies) promises.push(fetchCaseStudies(true));
    if (fetchedStates.eguides) promises.push(fetchEGuides(true));
    if (fetchedStates.playbooks) promises.push(fetchPlaybooks(true));
    if (fetchedStates.jobs) promises.push(fetchJobs(true));
    await Promise.all(promises);
  }, [fetchedStates, fetchTeam, fetchPartners, fetchBlogs, fetchCaseStudies, fetchEGuides, fetchPlaybooks, fetchJobs]);

  const loading = Object.values(loadingStates).some(Boolean);

  return (
    <DataContext.Provider value={{
      team,
      partners,
      blogs,
      caseStudies,
      eguides,
      playbooks,
      jobs,
      loading,
      refreshData,
      loadingStates,
      fetchedStates,
      fetchTeam,
      fetchPartners,
      fetchBlogs,
      fetchCaseStudies,
      fetchEGuides,
      fetchPlaybooks,
      fetchJobs,
      addJob,
      updateJob,
      deleteJob
    }}>
      {children}
    </DataContext.Provider>
  );
};

