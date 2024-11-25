import { supabase } from "../config/supabase.js";

export class userRatingModel {
    static async getAllUserRatings() {
        try {
            let { data, error } = await supabase
                .from("user_ratings")
                .select(`*`);
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke hente brugervurderinger, ${error}`);
        }
    }

    static async getUserRatingById(id) {
        try {
            let { data, error } = await supabase
                .from("user_ratings")
                .select(`*`)
                .eq("id", id);
            if (error) {
                throw new Error(error.message);
            }
            return data;
        } catch (error) {
            console.error(`Fejl: kan ikke hente brugervurdering, ${error}`);
        }
    }

    static async createUserRating(userRating) {
        try {
            let { data, error } = await supabase
                .from("user_ratings")
                .insert([
                    {
                        user_id: userRating.user_id,
                        poster_id: userRating.poster_id,
                        num_stars: userRating.num_stars,
                    },
                ])
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke oprette brugervurdering, ${error}`);
        }
    }

    static async updateUserRating(userRating) {
        try {
            let { data, error } = await supabase
                .from("user_ratings")
                .update({
                    user_id: userRating.user_id,
                    poster_id: userRating.poster_id,
                    num_stars: userRating.num_stars,
                })
                .eq("id", userRating.id)
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke opdatere brugervurdering, ${error}`);
        }
    }

    static async deleteUserRating(userRating) {
        try {
            let { data, error } = await supabase
                .from("user_ratings")
                .delete()
                .eq("id", userRating.id)
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke slette brugervurdering, ${error}`);
        }
    }
}
