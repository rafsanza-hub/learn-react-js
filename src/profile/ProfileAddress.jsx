import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileAddress(){
    var profile = useContext(ProfileContext);
    return(
        <div>
            <h1>Address</h1>
            <p>Alamat {profile}</p>
        </div>
    )
}