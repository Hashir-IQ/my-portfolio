import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { LogOut, Save, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const Admin = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('hero');
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (!session?.user) navigate('/admin/login');
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (!session?.user) navigate('/admin/login');
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  if (loading) return <div className="min-h-screen bg-background flex items-center justify-center text-primary font-mono">Loading...</div>;
  if (!user) return null;

  const tabs = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="font-mono text-sm font-bold text-primary glow-text">{"<Admin />"}</h1>
          <div className="flex items-center gap-3">
            <a href="/" className="text-xs text-muted-foreground hover:text-primary font-mono transition-colors">View Site</a>
            <button onClick={handleLogout} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Logout">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-xs font-mono capitalize transition-all ${
                activeTab === tab
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === 'hero' && <HeroEditor queryClient={queryClient} />}
        {activeTab === 'about' && <AboutEditor queryClient={queryClient} />}
        {activeTab === 'skills' && <SkillsEditor queryClient={queryClient} />}
        {activeTab === 'experience' && <ExperienceEditor queryClient={queryClient} />}
        {activeTab === 'projects' && <ProjectsEditor queryClient={queryClient} />}
        {activeTab === 'education' && <EducationEditor queryClient={queryClient} />}
        {activeTab === 'contact' && <ContactEditor queryClient={queryClient} />}
      </div>
    </div>
  );
};

// Reusable input styles
const inputClass = "w-full px-3 py-2 rounded-md bg-card border border-border text-foreground text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all";
const labelClass = "block text-xs font-mono text-muted-foreground mb-1";
const btnSave = "flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-mono text-xs font-semibold hover:shadow-[0_0_15px_hsl(180_100%_50%/0.3)] transition-all disabled:opacity-50";
const btnDanger = "flex items-center gap-1 px-3 py-1.5 rounded-md border border-red-500/30 text-red-400 text-xs font-mono hover:bg-red-500/10 transition-all";
const btnAdd = "flex items-center gap-2 px-4 py-2 rounded-md border border-primary/30 text-primary text-xs font-mono hover:bg-primary/10 transition-all";
const cardClass = "bg-card border border-border rounded-lg p-5 space-y-3";

/* =================== HERO EDITOR =================== */
function HeroEditor({ queryClient }: { queryClient: any }) {
  const [data, setData] = useState({ name: '', taglines: [''], email: '', phone: '', linkedin_url: '', cv_url: '' });
  const [id, setId] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase.from('hero_content').select('*').limit(1).single().then(({ data: d }) => {
      if (d) { setData({ name: d.name, taglines: d.taglines, email: d.email, phone: d.phone, linkedin_url: d.linkedin_url, cv_url: d.cv_url || '' }); setId(d.id); }
    });
  }, []);

  const save = async () => {
    setSaving(true);
    const { error } = id
      ? await supabase.from('hero_content').update({ ...data, updated_at: new Date().toISOString() }).eq('id', id)
      : await supabase.from('hero_content').insert(data);
    setSaving(false);
    if (error) toast.error(error.message);
    else { toast.success('Hero updated!'); queryClient.invalidateQueries({ queryKey: ['hero_content'] }); }
  };

  return (
    <div className={cardClass}>
      <label className={labelClass}>Name</label>
      <input className={inputClass} value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
      <label className={labelClass}>Taglines (one per line)</label>
      <textarea className={inputClass + " min-h-[80px] resize-none"} value={data.taglines.join('\n')} onChange={(e) => setData({ ...data, taglines: e.target.value.split('\n') })} />
      <label className={labelClass}>Email</label>
      <input className={inputClass} value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
      <label className={labelClass}>Phone</label>
      <input className={inputClass} value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
      <label className={labelClass}>LinkedIn URL</label>
      <input className={inputClass} value={data.linkedin_url} onChange={(e) => setData({ ...data, linkedin_url: e.target.value })} />
      <label className={labelClass}>CV/Resume URL (Google Drive, Dropbox, etc.)</label>
      <input className={inputClass} value={data.cv_url} onChange={(e) => setData({ ...data, cv_url: e.target.value })} placeholder="https://drive.google.com/file/d/..." />
      <button className={btnSave} onClick={save} disabled={saving}><Save size={14} />{saving ? 'Saving...' : 'Save'}</button>
    </div>
  );
}

/* =================== ABOUT EDITOR =================== */
function AboutEditor({ queryClient }: { queryClient: any }) {
  const [paragraphs, setParagraphs] = useState(['']);
  const [id, setId] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase.from('about_content').select('*').limit(1).single().then(({ data }) => {
      if (data) { setParagraphs(data.paragraphs); setId(data.id); }
    });
  }, []);

  const save = async () => {
    setSaving(true);
    const { error } = id
      ? await supabase.from('about_content').update({ paragraphs, updated_at: new Date().toISOString() }).eq('id', id)
      : await supabase.from('about_content').insert({ paragraphs });
    setSaving(false);
    if (error) toast.error(error.message);
    else { toast.success('About updated!'); queryClient.invalidateQueries({ queryKey: ['about_content'] }); }
  };

  return (
    <div className={cardClass}>
      <label className={labelClass}>Paragraphs</label>
      {paragraphs.map((p, i) => (
        <div key={i} className="flex gap-2">
          <textarea className={inputClass + " min-h-[60px] resize-none flex-1"} value={p} onChange={(e) => { const np = [...paragraphs]; np[i] = e.target.value; setParagraphs(np); }} />
          {paragraphs.length > 1 && (
            <button className={btnDanger} onClick={() => setParagraphs(paragraphs.filter((_, j) => j !== i))}><Trash2 size={12} /></button>
          )}
        </div>
      ))}
      <button className={btnAdd} onClick={() => setParagraphs([...paragraphs, ''])}><Plus size={14} />Add Paragraph</button>
      <button className={btnSave} onClick={save} disabled={saving}><Save size={14} />{saving ? 'Saving...' : 'Save'}</button>
    </div>
  );
}

/* =================== SKILLS EDITOR =================== */
function SkillsEditor({ queryClient }: { queryClient: any }) {
  const [items, setItems] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase.from('skills').select('*').order('sort_order').then(({ data }) => { if (data) setItems(data); });
  }, []);

  const save = async () => {
    setSaving(true);
    for (const item of items) {
      if (item.id) await supabase.from('skills').update({ category: item.category, skill_names: item.skill_names, sort_order: item.sort_order }).eq('id', item.id);
      else await supabase.from('skills').insert({ category: item.category, skill_names: item.skill_names, sort_order: item.sort_order });
    }
    setSaving(false);
    toast.success('Skills updated!');
    queryClient.invalidateQueries({ queryKey: ['skills'] });
  };

  const remove = async (i: number) => {
    const item = items[i];
    if (item.id) await supabase.from('skills').delete().eq('id', item.id);
    setItems(items.filter((_, j) => j !== i));
    queryClient.invalidateQueries({ queryKey: ['skills'] });
  };

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className={cardClass}>
          <div className="flex justify-between items-start">
            <div className="flex-1 space-y-2">
              <label className={labelClass}>Category</label>
              <input className={inputClass} value={item.category} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], category: e.target.value }; setItems(n); }} />
              <label className={labelClass}>Skills (comma separated)</label>
              <input className={inputClass} value={item.skill_names.join(', ')} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], skill_names: e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean) }; setItems(n); }} />
            </div>
            <button className={btnDanger + " ml-3"} onClick={() => remove(i)}><Trash2 size={12} /></button>
          </div>
        </div>
      ))}
      <button className={btnAdd} onClick={() => setItems([...items, { category: '', skill_names: [], sort_order: items.length }])}><Plus size={14} />Add Category</button>
      <button className={btnSave} onClick={save} disabled={saving}><Save size={14} />{saving ? 'Saving...' : 'Save'}</button>
    </div>
  );
}

/* =================== EXPERIENCE EDITOR =================== */
function ExperienceEditor({ queryClient }: { queryClient: any }) {
  const [items, setItems] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase.from('experiences').select('*').order('sort_order').then(({ data }) => { if (data) setItems(data); });
  }, []);

  const save = async () => {
    setSaving(true);
    for (const item of items) {
      const payload = { role: item.role, company: item.company, period: item.period, description: item.description, sort_order: item.sort_order };
      if (item.id) await supabase.from('experiences').update(payload).eq('id', item.id);
      else await supabase.from('experiences').insert(payload);
    }
    setSaving(false);
    toast.success('Experience updated!');
    queryClient.invalidateQueries({ queryKey: ['experiences'] });
  };

  const remove = async (i: number) => {
    if (items[i].id) await supabase.from('experiences').delete().eq('id', items[i].id);
    setItems(items.filter((_, j) => j !== i));
    queryClient.invalidateQueries({ queryKey: ['experiences'] });
  };

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className={cardClass}>
          <div className="flex justify-between">
            <div className="flex-1 space-y-2">
              <label className={labelClass}>Role</label>
              <input className={inputClass} value={item.role} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], role: e.target.value }; setItems(n); }} />
              <label className={labelClass}>Company</label>
              <input className={inputClass} value={item.company} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], company: e.target.value }; setItems(n); }} />
              <label className={labelClass}>Period</label>
              <input className={inputClass} value={item.period} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], period: e.target.value }; setItems(n); }} />
              <label className={labelClass}>Description</label>
              <textarea className={inputClass + " min-h-[60px] resize-none"} value={item.description} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], description: e.target.value }; setItems(n); }} />
            </div>
            <button className={btnDanger + " ml-3"} onClick={() => remove(i)}><Trash2 size={12} /></button>
          </div>
        </div>
      ))}
      <button className={btnAdd} onClick={() => setItems([...items, { role: '', company: '', period: '', description: '', sort_order: items.length }])}><Plus size={14} />Add Experience</button>
      <button className={btnSave} onClick={save} disabled={saving}><Save size={14} />{saving ? 'Saving...' : 'Save'}</button>
    </div>
  );
}

/* =================== PROJECTS EDITOR =================== */
function ProjectsEditor({ queryClient }: { queryClient: any }) {
  const [items, setItems] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase.from('projects').select('*').order('sort_order').then(({ data }) => { if (data) setItems(data); });
  }, []);

  const save = async () => {
    setSaving(true);
    for (const item of items) {
      const payload = { title: item.title, description: item.description, tags: item.tags, badge: item.badge || null, link: item.link || null, sort_order: item.sort_order };
      if (item.id) await supabase.from('projects').update(payload).eq('id', item.id);
      else await supabase.from('projects').insert(payload);
    }
    setSaving(false);
    toast.success('Projects updated!');
    queryClient.invalidateQueries({ queryKey: ['projects'] });
  };

  const remove = async (i: number) => {
    if (items[i].id) await supabase.from('projects').delete().eq('id', items[i].id);
    setItems(items.filter((_, j) => j !== i));
    queryClient.invalidateQueries({ queryKey: ['projects'] });
  };

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className={cardClass}>
          <div className="flex justify-between">
            <div className="flex-1 space-y-2">
              <label className={labelClass}>Title</label>
              <input className={inputClass} value={item.title} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], title: e.target.value }; setItems(n); }} />
              <label className={labelClass}>Badge (optional, e.g. FYP)</label>
              <input className={inputClass} value={item.badge || ''} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], badge: e.target.value }; setItems(n); }} />
              <label className={labelClass}>Description</label>
              <textarea className={inputClass + " min-h-[60px] resize-none"} value={item.description} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], description: e.target.value }; setItems(n); }} />
              <label className={labelClass}>Tags (comma separated)</label>
              <input className={inputClass} value={item.tags.join(', ')} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], tags: e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean) }; setItems(n); }} />
              <label className={labelClass}>Live Link (optional)</label>
              <input className={inputClass} value={item.link || ''} placeholder="https://..." onChange={(e) => { const n = [...items]; n[i] = { ...n[i], link: e.target.value }; setItems(n); }} />
            </div>
            <button className={btnDanger + " ml-3"} onClick={() => remove(i)}><Trash2 size={12} /></button>
          </div>
        </div>
      ))}
      <button className={btnAdd} onClick={() => setItems([...items, { title: '', description: '', tags: [], badge: '', link: '', sort_order: items.length }])}><Plus size={14} />Add Project</button>
      <button className={btnSave} onClick={save} disabled={saving}><Save size={14} />{saving ? 'Saving...' : 'Save'}</button>
    </div>
  );
}

/* =================== EDUCATION EDITOR =================== */
function EducationEditor({ queryClient }: { queryClient: any }) {
  const [items, setItems] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase.from('education').select('*').order('sort_order').then(({ data }) => { if (data) setItems(data); });
  }, []);

  const save = async () => {
    setSaving(true);
    for (const item of items) {
      const payload = { title: item.title, subtitle: item.subtitle, detail: item.detail, icon_name: item.icon_name, sort_order: item.sort_order };
      if (item.id) await supabase.from('education').update(payload).eq('id', item.id);
      else await supabase.from('education').insert(payload);
    }
    setSaving(false);
    toast.success('Education updated!');
    queryClient.invalidateQueries({ queryKey: ['education'] });
  };

  const remove = async (i: number) => {
    if (items[i].id) await supabase.from('education').delete().eq('id', items[i].id);
    setItems(items.filter((_, j) => j !== i));
    queryClient.invalidateQueries({ queryKey: ['education'] });
  };

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className={cardClass}>
          <div className="flex justify-between">
            <div className="flex-1 space-y-2">
              <label className={labelClass}>Title</label>
              <input className={inputClass} value={item.title} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], title: e.target.value }; setItems(n); }} />
              <label className={labelClass}>Subtitle</label>
              <input className={inputClass} value={item.subtitle} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], subtitle: e.target.value }; setItems(n); }} />
              <label className={labelClass}>Detail</label>
              <input className={inputClass} value={item.detail} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], detail: e.target.value }; setItems(n); }} />
              <label className={labelClass}>Icon (GraduationCap, Award, Users)</label>
              <input className={inputClass} value={item.icon_name} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], icon_name: e.target.value }; setItems(n); }} />
            </div>
            <button className={btnDanger + " ml-3"} onClick={() => remove(i)}><Trash2 size={12} /></button>
          </div>
        </div>
      ))}
      <button className={btnAdd} onClick={() => setItems([...items, { title: '', subtitle: '', detail: '', icon_name: 'GraduationCap', sort_order: items.length }])}><Plus size={14} />Add Item</button>
      <button className={btnSave} onClick={save} disabled={saving}><Save size={14} />{saving ? 'Saving...' : 'Save'}</button>
    </div>
  );
}

/* =================== CONTACT EDITOR =================== */
function ContactEditor({ queryClient }: { queryClient: any }) {
  const [data, setData] = useState({ email: '', phone: '', location: '' });
  const [id, setId] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase.from('contact_info').select('*').limit(1).single().then(({ data: d }) => {
      if (d) { setData({ email: d.email, phone: d.phone, location: d.location }); setId(d.id); }
    });
  }, []);

  const save = async () => {
    setSaving(true);
    const { error } = id
      ? await supabase.from('contact_info').update({ ...data, updated_at: new Date().toISOString() }).eq('id', id)
      : await supabase.from('contact_info').insert(data);
    setSaving(false);
    if (error) toast.error(error.message);
    else { toast.success('Contact updated!'); queryClient.invalidateQueries({ queryKey: ['contact_info'] }); }
  };

  return (
    <div className={cardClass}>
      <label className={labelClass}>Email</label>
      <input className={inputClass} value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
      <label className={labelClass}>Phone</label>
      <input className={inputClass} value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
      <label className={labelClass}>Location</label>
      <input className={inputClass} value={data.location} onChange={(e) => setData({ ...data, location: e.target.value })} />
      <button className={btnSave} onClick={save} disabled={saving}><Save size={14} />{saving ? 'Saving...' : 'Save'}</button>
    </div>
  );
}

export default Admin;
