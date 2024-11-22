import { supabase } from "../config/supabase.js";

export class postersModel {
    static async getAllPosters() {
        try {
            let { data, error } = await supabase.from("posters").select(`*`);
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke hente plakatliste, ${error}`);
        }
    }

    static async getPosterById(id) {
        try {
            let { data, error } = await supabase
                .from("posters")
                .select("*")
                .eq("id", parseInt(id, 10))
                .single();
            if (error) {
                throw new Error(error.message);
            }
            return data;
        } catch (error) {
            console.error(`Fejl: kan ikke hente plakat, ${error}`);
        }
    }

    static async createPoster(poster) {
        try {
            let { data, error } = await supabase
                .from("posters")
                .insert([
                    {
                        name: poster.name,
                        slug: poster.slug,
                        description: poster.description,
                        image: poster.image,
                        width: poster.width,
                        height: poster.height,
                        price: poster.price,
                        stock: poster.stock,
                    },
                ])
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke oprette plakat, ${error}`);
        }
    }

    static async updatePoster(poster) {
        try {
            let { data, error } = await supabase
                .from("posters")
                .update({
                    name: poster.name,
                    slug: poster.slug,
                    description: poster.description,
                    image: poster.image,
                    width: poster.width,
                    height: poster.height,
                    price: poster.price,
                    stock: poster.stock,
                })
                .eq("id", poster.id)
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke opdatere plakat, ${error}`);
        }
    }

    static async deletePoster(poster) {
        try {
            let { data, error } = await supabase
                .from("posters")
                .delete()
                .eq("id", poster.id)
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl: kan ikke slette plakat, ${error}`);
        }
    }
}
