import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function Profile() {
    var profile = useContext(ProfileContext);
    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {profile}</p>
        </div>
    )
}