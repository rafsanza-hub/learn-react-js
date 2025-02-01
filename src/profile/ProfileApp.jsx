import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";

export default function ProfileApp() {
    const[name, setName] = useState("Rafsan");

    return (
        <div>
            <ProfileContext.Provider value={name}>
                <ProfileForm name={name} setName={setName} />
            <Profile/>
            <ProfileAddress/>
            </ProfileContext.Provider>
        </div>
    )
}