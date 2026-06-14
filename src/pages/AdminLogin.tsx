import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

    if (authError) {
      setError(authError.message);
      setLoading(false);
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 grid-bg">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-mono font-bold text-foreground mb-2 text-center">
          <span className="text-primary glow-text">{"<Admin />"}</span>
        </h1>
        <p className="text-xs text-muted-foreground text-center mb-8 font-mono">Portfolio Dashboard Login</p>

        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded p-3 font-mono">
              {error}
            </div>
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-semibold hover:shadow-[0_0_20px_hsl(180_100%_50%/0.4)] transition-all disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <a href="/" className="block text-center mt-6 text-xs text-muted-foreground hover:text-primary font-mono transition-colors">
          ← Back to Portfolio
        </a>
      </div>
    </div>
  );
};

export default AdminLogin;
