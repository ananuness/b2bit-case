import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { SignIn } from '@/pages/SignIn';
import { Home } from '@/pages/Home';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/signin" element={<SignIn />} />
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
