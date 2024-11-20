import { supabase } from "../config/supabase.js";

export class genPosRelModel {
    static async getAllGenPosRel() {
        try {
            let { data, error } = await supabase
                .from("genre_poster_rel")
                .select(`*`);
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke hente genPosRel liste, ${error}`);
        }
    }

    static async getGenPosRelById(id) {
        try {
            let { data, error } = await supabase
                .from("genre_poster_rel")
                .select("*")
                .eq("id", id)
                .single();
            if (error) {
                throw new Error(error.message);
            }
            return data;
        } catch (error) {
            console.error(`Fejl: kan ikke hente genPosRel, ${error}`);
        }
    }

    static async createGenPosRel(genPosRel) {
        try {
            let { data, error } = await supabase
                .from("genre_poster_rel")
                .insert([
                    {
                        genre_id: genPosRel.genre_id,
                        poster_id: genPosRel.poster_id,
                    },
                ])
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke oprette genPosRel, ${error}`);
        }
    }

    static async updateGenPosRel(genPosRel) {
        try {
            let { data, error } = await supabase
                .from("genre_poster_rel")
                .update({
                    genre_id: genPosRel.genre_id,
                    poster_id: genPosRel.poster_id,
                })
                .eq("id", genPosRel.id)
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke opdatere genPosRel, ${error}`);
        }
    }

    static async deleteGenPosRel(genPosRel) {
        try {
            let { data, error } = await supabase
                .from("genre_poster_rel")
                .delete()
                .eq("id", genPosRel.id)
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke slette genPosRel, ${error}`);
        }
    }
}
