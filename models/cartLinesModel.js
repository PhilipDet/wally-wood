import { supabase } from "../config/supabase.js";

export class cartLinesModel {
    static async getAllCartLines() {
        try {
            let { data, error } = await supabase.from("cartlines").select(`*`);
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Error: can't get cartLines list, ${error}`);
        }
    }

    static async getCartLineById(id) {
        try {
            let { data, error } = await supabase
                .from("cartlines")
                .select("*")
                .eq("id", id)
                .single();
            if (error) {
                throw new Error(error.message);
            }
            return data;
        } catch (error) {
            console.error(`Error: can't get cartLine, ${error}`);
        }
    }

    static async createCartLine(cartLine) {
        try {
            let { data, error } = await supabase
                .from("cartlines")
                .insert([
                    {
                        user_id: cartLine.user_id,
                        poster_id: cartLine.poster_id,
                        quantity: cartLine.quantity,
                    },
                ])
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Error: can't create cartLine, ${error}`);
        }
    }

    static async updateCartLine(cartLine) {
        try {
            let { data, error } = await supabase
                .from("cartlines")
                .update({
                    user_id: cartLine.user_id,
                    poster_id: cartLine.poster_id,
                    quantity: cartLine.quantity,
                })
                .eq("id", cartLine.id)
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Error: can't update cartLine, ${error}`);
        }
    }

    static async deleteCartLine(cartLine) {
        try {
            let { data, error } = await supabase
                .from("cartlines")
                .delete()
                .eq("id", cartLine.id)
                .select();
            if (error) {
                throw new Error(error.message);
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Error: can't delete cartLine, ${error}`);
        }
    }
}
