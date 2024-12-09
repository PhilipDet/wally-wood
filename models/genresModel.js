import { supabase } from "../config/supabase.js";

export class genresModel {
    static async getAllGenres() {
        try {
            let query = supabase.from("genres").select(`*`);

            let { data, error } = await query;
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke hente genreliste, ${error}`);
        }
    }

    static async getGenreById(id) {
        try {
            let { data, error } = await supabase
                .from("genres")
                .select("*")
                .eq("id", id)
                .single();
            if (error) {
                throw new Error(error.message);
            }
            return data;
        } catch (error) {
            console.error(`Fejl: kan ikke hente genre, ${error}`);
        }
    }

    static async createGenre(genre) {
        try {
            let { data, error } = await supabase
                .from("genres")
                .insert([
                    {
                        title: genre.title,
                        slug: genre.slug,
                    },
                ])
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke oprette genre, ${error}`);
        }
    }

    static async updateGenre(genre) {
        try {
            let { data, error } = await supabase
                .from("genres")
                .update({
                    title: genre.title,
                    slug: genre.slug,
                })
                .eq("id", genre.id)
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke opdatere genre, ${error}`);
        }
    }

    static async deleteGenre(genre) {
        try {
            let { data, error } = await supabase
                .from("genres")
                .delete()
                .eq("id", genre.id)
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke slette genre, ${error}`);
        }
    }
}
