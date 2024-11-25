import { supabase } from "../config/supabase.js";

export class userProfilesModel {
    static async getAllUserProfiles() {
        try {
            let { data, error } = await supabase
                .from("user_profiles")
                .select(`*`);
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke hente brugerprofiler, ${error}`);
        }
    }

    static async getUserProfileById(id) {
        try {
            let { data, error } = await supabase
                .from("user_profiles")
                .select(`*`)
                .eq("id", id);
            if (error) {
                throw new Error(error.message);
            }
            return data;
        } catch (error) {
            console.error(`Fejl: kan ikke hente brugerprofil, ${error}`);
        }
    }

    static async createUserProfile(userProfile) {
        try {
            let { data, error } = await supabase
                .from("user_profiles")
                .insert([
                    {
                        first_name: userProfile.first_name,
                        last_name: userProfile.last_name,
                        birthdate: userProfile.birthdate,
                        gender: userProfile.gender,
                        position: userProfile.position,
                    },
                ])
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke oprette brugerprofil, ${error}`);
        }
    }

    static async updateUserProfile(userProfile) {
        try {
            let { data, error } = await supabase
                .from("user_profiles")
                .update({
                    first_name: userProfile.first_name,
                    last_name: userProfile.last_name,
                    birthdate: userProfile.birthdate,
                    gender: userProfile.gender,
                    position: userProfile.position,
                })
                .eq("id", userProfile.id)
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke opdatere brugerprofil, ${error}`);
        }
    }

    static async deleteUserProfile(userProfile) {
        try {
            let { data, error } = await supabase
                .from("user_profiles")
                .delete()
                .eq("id", userProfile.id)
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke slette brugerprofil, ${error}`);
        }
    }
}
