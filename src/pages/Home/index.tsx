import { useAuth } from '@/hooks/useAuth';
import { useProfileDetails } from '@/hooks/useProfileDetails';
import { UserCard } from '@/components/organisms/UserCard';
import { Button } from '@/components/atoms/Button';

export function Home() {
  const { signOut } = useAuth();
  const { loading, userProfile } = useProfileDetails();

  return (
    <div className="min-h-screen bg-slate-100">
      {!loading && userProfile && (
        <>
          <header className="flex justify-end px-8 py-3 bg-white">
            <Button title="Logout" onClick={signOut} />
          </header>
          <main className="flex justify-center mt-24 px-8 pb-8">
            <UserCard
              name={userProfile!.name}
              lastName={userProfile?.last_name}
              email={userProfile!.email}
              avatar={userProfile?.avatar}
            />
          </main>
        </>
      )}
    </div>
  );
}
