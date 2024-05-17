import { SignInForm } from '@/components/organisms/SignInForm';
import logo from '@/assets/b2bit-logo.png';

export function SignIn() {
  return (
    <main className="min-h-screen flex justify-center items-center p-6 bg-zinc-50">
      <div className="max-w-[436px] w-full flex flex-col items-center pt-14 pb-10 px-6 rounded-2xl shadow-lg bg-white">
        <img src={logo} alt="b2bit logo" className="mb-8 mx-auto" />

        <SignInForm />
      </div>
    </main>
  );
}
