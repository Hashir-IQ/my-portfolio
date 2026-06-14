import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

export const useHeroContent = () =>
  useQuery({
    queryKey: ['hero_content'],
    queryFn: async () => {
      const { data, error } = await supabase.from('hero_content').select('*').limit(1).single();
      if (error) throw error;
      return data;
    },
  });

export const useAboutContent = () =>
  useQuery({
    queryKey: ['about_content'],
    queryFn: async () => {
      const { data, error } = await supabase.from('about_content').select('*').limit(1).single();
      if (error) throw error;
      return data;
    },
  });

export const useSkills = () =>
  useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const { data, error } = await supabase.from('skills').select('*').order('sort_order');
      if (error) throw error;
      return data;
    },
  });

export const useExperiences = () =>
  useQuery({
    queryKey: ['experiences'],
    queryFn: async () => {
      const { data, error } = await supabase.from('experiences').select('*').order('sort_order');
      if (error) throw error;
      return data;
    },
  });

export const useProjects = () =>
  useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase.from('projects').select('*').order('sort_order');
      if (error) throw error;
      return data;
    },
  });

export const useEducation = () =>
  useQuery({
    queryKey: ['education'],
    queryFn: async () => {
      const { data, error } = await supabase.from('education').select('*').order('sort_order');
      if (error) throw error;
      return data;
    },
  });

export const useContactInfo = () =>
  useQuery({
    queryKey: ['contact_info'],
    queryFn: async () => {
      const { data, error } = await supabase.from('contact_info').select('*').limit(1).single();
      if (error) throw error;
      return data;
    },
  });
