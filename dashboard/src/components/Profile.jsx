import { useEffect, useState } from "react";
import api from "../api/axios";

function Profile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        api.get("/auth/profile")
            .then((res) => setProfile(res.data))
            .catch(console.error);
    }, []);

    if (!profile) {
        return <h3>Loading...</h3>;
    }

    const joinedDate = new Date(profile.createdAt).toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric",
        }
    );

    return (
        <div className="profile-page">

            <div className="profile-card">

                <div className="profile-avatar">
                    {profile.username.substring(0, 2).toUpperCase()}
                </div>

                <h2>{profile.username}</h2>

                <p className="profile-email">
                    {profile.email}
                </p>

                <p className="joined-date">
                    Joined • {joinedDate}
                </p>

            </div>

            <div className="profile-stats">

                <div className="stat-card">
                    <h3>{profile.stats.orders}</h3>
                    <p>Orders</p>
                </div>

                <div className="stat-card">
                    <h3>{profile.stats.holdings}</h3>
                    <p>Holdings</p>
                </div>

                <div className="stat-card">
                    <h3>{profile.stats.watchlist}</h3>
                    <p>Watchlist</p>
                </div>

            </div>

        </div>
    );
}

export default Profile;