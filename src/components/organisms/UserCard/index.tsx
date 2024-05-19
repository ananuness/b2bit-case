import avatarDefault from '@/assets/avatar-default.jpg';

interface UserCardProps {
  name: string;
  lastName?: string;
  email: string;
  avatar?: {
    image_low_url?: string;
    image_medium_url?: string;
    image_high_url?: string;
  };
}

export function UserCard({ name, lastName, email, avatar }: UserCardProps) {
  return (
    <div className="w-full max-w-[356px] p-8 rounded-2xl shadow-sm text-neutral-800 bg-zinc-0">
      <h1 className="font-semibold text-center text-xs">Profile Picture</h1>

      <picture>
        <source
          srcSet={avatar?.image_low_url ?? avatarDefault}
          media="(max-width: 768px)"
          data-testid="source-low"
        />
        <source
          srcSet={avatar?.image_medium_url ?? avatarDefault}
          media="(max-width: 1280px)"
          data-testid="source-medium"
        />
        <img
          src={avatar?.image_high_url ?? avatarDefault}
          alt="user profile picture"
          className="w-14 h-14 mx-auto mt-2 mb-8 rounded-lg"
        />
      </picture>

      <div className="flex flex-col gap-2 mb-5">
        <span className="text-sm">
          Your
          <span role="presentation" className="ml-1 font-bold">
            Name
          </span>
        </span>
        <span className="p-4 rounded-lg text-xs break-words bg-zinc-100">
          {`${name} ${lastName ?? ''}`}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm">
          Your
          <span role="presentation" className="ml-1 font-bold">
            E-mail
          </span>
        </span>
        <span className="p-4 rounded-lg text-xs break-words bg-zinc-100">
          {email}
        </span>
      </div>
    </div>
  );
}
