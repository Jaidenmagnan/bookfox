import { db } from '@//db/index';
import { users } from '@//db/schema';
import { eq } from 'drizzle-orm';

type UserProfileProps = {
    params: {
        id: string;
    };
}
export default async function UserProfile({ params }: UserProfileProps) {
    const user = await db.select().from(users).where(eq(users.id, params.id)).then((res) => res[0]);
    return (
        <div>
            <h1>User Profile</h1>
            <p>This is the user profile page.</p>
            {user && (
                <div>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    {/* Additional user information can be displayed here */}
                </div>
            )}
        </div>
    );
}