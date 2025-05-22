import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { login } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  // Get redirect URL from location state
  const redirectTo = location.state?.redirectTo || '/';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setErrorMessage('Por favor insira e-mail e senha');
      return;
    }

    // Demo authentication - in a real app, this would call an API
    if (email === 'user@example.com' && password === 'password') {
      login({
        id: 'user-1',
        name: 'admin',
        email: 'user@example.com',
        phone: '123'
      });
      navigate(redirectTo);
    } else {
      setErrorMessage('Invalid credentials. Try user@example.com / password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Bem vindo de volta</h1>
              <p className="text-gray-600">
                Faça login para gerenciar seus compromissos e reservar novos serviços.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-md text-sm">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Senha
                  </label>
                  <a href="#" className="text-sm text-purple-600 hover:text-purple-700">
                    Esqueceu a senha?
                  </a>
                </div>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full py-2 pl-10 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Não tem uma conta?{' '}
                <button
                  onClick={() => navigate('/register', { state: { redirectTo } })}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Sign Up
                </button>
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-center text-gray-500">
                Para fins de demonstração, use: user@example.com/senha
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;